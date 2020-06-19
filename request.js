const {request: r} = require('http')
const {stdin} = process

const hostname = '127.0.0.1'
const port = 3000

stdin.setEncoding('utf8')
stdin.on('readable', function() {
  let input = null
  while((input = stdin.read()) !== null) {
    r(`http://${hostname}:${port}`, {method: 'POST'}).end(input.trim())
  }
  stdin.end()
})
