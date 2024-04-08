const fs = require("fs");
const path = require("path");

// fs.rename('', '', (err) => {
//     if(err) throw err
//     console.log('rename completed')
// })

const rawExtension = [".cr2", ".cr3"];
const jpegExtension = [".jpeg", ".jpg"];

function sortFiles(sourceDir, rawDir, jpegDir) {
  // make sure directory exist, otherwise create it
  if (!fs.existsSync(rawDir)) {
    fs.mkdirSync(rawDir, { recursive: true });
    console.log(`${rawDir} created`);
  }
  if (!fs.existsSync(rawDir)) {
    fs.mkdirSync(rawDir, { recursive: true });
    console.log(`${rawDir} created`);
  }

  const jpegDirFiles = fs.readdirSync(jpegDir);
  const rawDirFiles = fs.readdirSync(rawDir);

  // Read files in the source directory
  fs.readdirSync(sourceDir).forEach((filename) => {
    const sourceFilePath = path.join(sourceDir, filename);
    const ext = path.extname(filename);
    if (rawExtension.includes(ext)) {
      // check if the file is already in the folder
      if (!rawDirFiles.includes(filename)) {
        fs.renameSync(sourceFilePath, path.join(rawDir, filename));
        console.log(`Moved ${filename} to ${rawDir}`);
      } else {
        console.log(`${filename} already exits in ${rawDir}`);
      }
    } else if (jpegExtension.includes(ext)) {
      if (!jpegDirFiles.includes(filename)) {
        fs.renameSync(sourceFilePath, path.join(jpegDir, filename));
        console.log(`Moved ${filename} to ${jpegDir}`);
      } else {
        console.log(`${filename} already exits in ${jpegDir}`);
      }
    }
  });
}

function deleteFile(sourceDir) {
  fs.readdirSync(sourceDir).forEach((filename) => {
    fs.unlinkSync(path.join(sourceDir, filename));
  });
}

sortFiles("", "", "");
