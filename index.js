const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  console.log('req', req.body)
  console.log('res', res.body)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

setTimeout(function() {
  const req = http.request(`http://${hostname}:${port}`)
  req.write('Hey there')
  req.end()
}, 2000)
