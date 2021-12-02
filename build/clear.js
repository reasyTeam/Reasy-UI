const fs = require("fs");
const path = require("path");

function removeJs(src) {
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(file) {
      let curPath = path.join(src, file),
        stat = fs.statSync(curPath);

      // 判断是否为css文件
      if (stat.isFile() && path.extname(curPath) !== ".css") {
        fs.unlinkSync(curPath);
      } else if (stat.isDirectory()) {
        removeJs(curPath);
      }
    });
  });
}

function main() {
  let cwd = process.cwd();
  removeJs(path.join(cwd, "theme"));
}

main();
