// const fs = require('fs/promises')

// const filename = process.argv[2];
// if (!filename) {
//   console.error("Please provide json filename");
//   process.exit(127)
// }

// const main = async jsonFilename => {
//   // let's start coding
//   const jsonString = await fs.readFile(jsonFilename, 'uts8')
//   //console.log(jsonString)
//   const  json = Json.parse(jsonString)
//   //console.log(json)
//   process.stdout.write(Json.stringify(json, null, 2))
// }

// main(filename);

const fs = require('fs').promises

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

const main = async jsonFilename => {
  const jsonFileContent = await fs.readFile(jsonFilename);
  const json = JSON.parse(jsonFileContent);

  process.stdout.write(
    JSON.stringify(json, null, 2)
  )
}

main(filename);