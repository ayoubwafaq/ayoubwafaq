const { readFileSync,writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/secode.txt','utf8')

writeFileSync('./content/result-Sync-txt','Here is the result',{flag: 'a'})