// helpers js
const fs = require("node:fs");

// helpers.js
function readJSONFile(path, fileName) {
    //    console.log("path data",path)
    const collection = fs.readFileSync(`${path}/${fileName}`, "utf8");
    // console.log("coll Data", collection)
    return collection ? JSON.parse(collection) : [];
}
function writeJSONFile(path, fileName, data) {
    data = JSON.stringify(data)
    fs.writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
    writeJSONFile,
    readJSONFile
};