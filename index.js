const http = require('http')

const hostname = '192.168.140.156'
const port = 3000

const server = http.createServer(function(req) {
  req.setEncoding('utf8')
  const chunks = []
  req.on('data', function(chunk) {
    chunks.push(chunk)
  })
  req.on('end', function() {
    console.log(chunks.join())
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
