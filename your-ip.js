
const interfaces = require('os').networkInterfaces()

let ip = ''

for(const k in interfaces) {
  for(const v of interfaces[k]) {
    if(v.family.toLowerCase() === 'ipv4' && !v.internal) {
      ip = v.address
      break
    }
  }
  if(ip) break
}

process.stdout.write(`Your IP: ${ip}`)

