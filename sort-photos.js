const fs = require("fs");
const path = require("path");

// fs.rename('', '', (err) => {
//     if(err) throw err
//     console.log('rename completed')
// })

const textExtension = [".txt", ".texte"];
const wordExtension = [".doc", ".docx"];

function sortFiles(sourceDir, textDir, wordDir) {
  // make sure directory exist, otherwise create it
  if (!fs.existsSync(textDir)) {
    fs.mkdirSync(textDir, { recursive: true });
    console.log(`${textDir} created`);
  }
  if (!fs.existsSync(textDir)) {
    fs.mkdirSync(textDir, { recursive: true });
    console.log(`${textDir} created`);
  }

  const wordDirFiles = fs.readdirSync(wordDir);
  const textDirFiles = fs.readdirSync(textDir);

  // Read files in the source directory
  fs.readdirSync(sourceDir).forEach((filename) => {
    const sourceFilePath = path.join(sourceDir, filename);
    const ext = path.extname(filename);
    if (textExtension.includes(ext)) {
        if(!textDirFiles.includes(filename)) {

            fs.renameSync(sourceFilePath, path.join(textDir, filename));
            console.log(`Moved ${filename} to ${textDir}`);
        } else {
        console.log(`${filename} already exits in ${textDir}`)

        }
    } else if (wordExtension.includes(ext)) {
      if (!wordDirFiles.includes(filename)) {
        fs.renameSync(sourceFilePath, path.join(wordDir, filename));
        console.log(`Moved ${filename} to ${wordDir}`);
      } else {
        console.log(`${filename} already exits in ${wordDir}`)
      }
    }
  });
}

function deleteFile(sourceDir) {
    fs.readdirSync(sourceDir).forEach(filename => {
        fs.unlinkSync(path.join(sourceDir, filename))
    })
}


sortFiles(
  "",
  "",
  ""
);
