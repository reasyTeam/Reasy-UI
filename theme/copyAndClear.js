const fs = require("fs");
const path = require("path");

function removeDir(dir) {
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      //如果是文件夹就递归下去
      removeDir(newPath);
    } else {
      //删除文件
      fs.unlinkSync(newPath);
    }
  }
  fs.rmdirSync(dir);
}

function copy(src, dst) {
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function(file) {
      let curPath = path.join(src, file),
        outPath = path.join(dst, file),
        stat = fs.statSync(curPath),
        readable,
        writable;

      // 判断是否为css文件
      if (stat.isFile() && path.extname(curPath) === ".css") {
        readable = fs.createReadStream(curPath);
        writable = fs.createWriteStream(outPath);
        readable.pipe(writable);
      } else if (stat.isDirectory()) {
        exists(outPath);
        copy(curPath, outPath);
      }
    });
  });
}

function exists(dst) {
  if (!fs.existsSync(dst)) {
    fs.mkdirSync(dst);
  }
}

function main() {
  let cwd = process.cwd();
  copy(path.join(cwd, "theme/out"), path.join(cwd, "dist"));
  removeDir(path.join(process.cwd(), "theme/out"));
}

main();
