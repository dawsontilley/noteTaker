const router = require('express').Router();
const { createNote, validateNote } = require('../../lib/note');
const  db = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = db;
  /*if (req.query) {
    results = filterByQuery(req.query, results);
  }*/
  res.json(results);
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  
 //let wrapper= [req.body];

  if (!validateNote(req.body)) {
    res.status(400).send('The db is not properly formatted.');
  } else {
    //switch back if not work
    const newNote = createNote(req.body, db);
    res.json(newNote);
  }
});

module.exports = router;
