const yargs = require("yargs");
const notesUtilities = require("./notes");

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notesUtilities.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "removing an existing note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notesUtilities.removeNote(argv.title);
  },
});

yargs.parse();

// console.log(yargs.argv);

// const fs = require( "fs" );

// const myNotes = require("./notes");

// console.log(myNotes());

// // fs.writeFileSync( "notes.txt", "This file is created by Node.js" );

// // fs.appendFileSync("notes.txt", "\nThis file is edited by Kudos");
