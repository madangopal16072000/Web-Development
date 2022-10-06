const fs = require('fs');
// console.log(fs);
// // Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the callback");
//   if (err) throw err;
// });

// console.log("I come after mkdir in the file!!!");
// fs.mkdirSync('Cats');
// console.log("I come after mkdirsync in the file");

const folderName = process.argv[2] || 'Project';
try{
    fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`, "");
fs.writeFileSync(`${folderName}/app.js`, "");
fs.writeFileSync(`${folderName}/styles.css`, "");
}catch(e)
{
    console.log("Somethig went wrong");
    console.log(e);
}
