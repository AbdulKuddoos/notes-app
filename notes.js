const fs = require("fs");
const chalk = require("chalk");

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse("Title: ", note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("No Note found"));
  }
};

const listNotes = () => {
  console.log(chalk.yellow.inverse("your notes are:"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(
      chalk.green.inverse("\nNote with title: ", title, " is remove!")
    );
  } else console.log(chalk.red.inverse("\nNo Note found!"));
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicatedNote = notes.find((note) => note.title === title);

  if (!duplicatedNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse("\nNew Note added"));
    console.log("\nTitle: ", title, "\nBody: ", body);
  } else {
    console.log(chalk.red.inverse("\nTitle already taken, Use another one."));
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const bufferedNotes = fs.readFileSync("notes.json");
    const notes = bufferedNotes.toString();
    return JSON.parse(notes);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
