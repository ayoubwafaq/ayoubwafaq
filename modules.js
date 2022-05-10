//CommonJS. every file is module (by defualt)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-flavore')
require('./7-mind-grende')


sayHi(names.ayoub)
sayHi(names.khalid)
sayHi(names.naima)