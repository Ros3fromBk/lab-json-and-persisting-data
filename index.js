const { createRandomUser } = require("./FakerInfoFile");
const { writeJSONFile, readJSONFile } = require("./Assistantfile");
function run() {
    let products = readJSONFile("./data", "Fakerfakedata.json");
    console.log("Products Index file", products);
    // if (process.argv[3]) {
    //   products.push(...randomProductFactory(process.argv[3]));
    // } else {
    products.push(createRandomUser());
    // }
    writeJSONFile("./data", "Fakerfakedata.json", products);
}

run();


