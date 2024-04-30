
const {readFileSync, writeFileSync} = require('fs');

console.log("start");
// const fs = require('fs');
// fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag:'a'})
// 後面再加個 flag:a 是新增內容進檔案

console.log('doe with this task');
console.log("starting the next one");