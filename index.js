const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(function(req) {
  req.setEncoding('utf8')
  const a = []
  req.on('data', function(chunk) {
    a.push(chunk)
  })
  req.on('end', function() {
    console.log(a.join())
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

server.setTimeout(0)

setTimeout(function() {
  const req = http.request(`http://${hostname}:${port}`, {method: 'POST'})
  req.write('Hey there')
  req.end()
}, 2000)
