const path = require('path')

console.log(path.sep)

const FilePath = path.join('/content','sunbFolder','test.txt')
console.log(FilePath)
const base = path.basename(FilePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','sunbFolder','test.txt')
console.log(absolute)