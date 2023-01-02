const fs = require('fs');
const filename = process.argv[2];

process.argv.forEach(element => {
    console.log(element);

    // 첫번째 파라미터 - node의 경로 /opt/homebrew/Cellar/node/19.3.0/bin/node
    // 두번째 파라미터 - 실행한 js파일의 경로 /Users/dowonseo/Code/node-beginner/file-system/watcher-argv.js
    // 세번째 파라미터 - target.txt
})

if (!filename) {
    throw Error("Error - A file to watch must be specified!");
}

fs.watch(filename, () => {
    console.log("FILE " + filename + " JUST CHANGED!");
})
console.log("NOW WATCHING " + filename + " for changes");
