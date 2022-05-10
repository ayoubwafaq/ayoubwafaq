const os = require('os')

//Info about current User

const user = os.userInfo()
console.log(user)


// Method returns the system uptime in seconds


const currentOs = {
    name: os.type(),
    realese: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)
