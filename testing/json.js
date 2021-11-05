const fs = require("fs");

const data = fs.readFileSync("data.json");
const parsedData = JSON.parse(data.toString());
parsedData.name = "Abdul Quddous";
parsedData.age = 21;
const personJSON = JSON.stringify(parsedData);
fs.writeFileSync("data.json", personJSON);
