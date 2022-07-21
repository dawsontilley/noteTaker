const router = require('express').Router();
const { createNote, validateNote } = require('../../lib/note');
const  db = require('../../db/db.json');

//get notes
router.get('/notes', (req, res) => {
  let results = db;
 
  res.json(results);
});
// post route
router.post('/notes', (req, res) => {
  
  req.body.id=db.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send('The db is not properly formatted.');
  } else {
   
    const newNote = createNote(req.body, db);
    res.json(newNote);
  }
});

module.exports = router;
