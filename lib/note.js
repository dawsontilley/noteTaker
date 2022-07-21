const fs = require('fs');
const path = require('path');

// creates a new note
function createNote(body, note) {

  const note1 = body;
  

  note.push(note1);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ note }, null, 2)
  );
  return note1;
}
// validates note has correct strings
function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  createNote,
  validateNote,
  
};
