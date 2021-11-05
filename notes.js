const fs = require("fs");
const chalk = require("chalk");

function removeNote(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(
      chalk.green.inverse("\nNote with title: ", title, " is remove!")
    );
  } else console.log(chalk.red.inverse("\nNo Note found!"));
}

function addNote(title, body) {
  const notes = loadNotes();

  const duplicatedNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicatedNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("\nNew Note added"));
    console.log("\nTitle: ", title, "\nBody: ", body);
  } else {
    console.log(chalk.red.inverse("\nTitle already taken, Use another one."));
  }
}

function saveNotes(notes) {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
}

function loadNotes() {
  try {
    const bufferedNotes = fs.readFileSync("notes.json");
    const notes = bufferedNotes.toString();
    return JSON.parse(notes);
  } catch (e) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
