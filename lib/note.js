const fs = require('fs');
const path = require('path');


function createNote(body, prev_data) {

  const note1 = body;
  // check this and switch back if not work

  prev_data.push(note1);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ prev_data }, null, 2)
  );
  return note1;
}

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
