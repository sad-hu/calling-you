const {createServer} = require('http')
const {stdout} = process

const hostname = '127.0.0.1'
const port = 3000

const server = createServer(function(req, res) {
  req.setEncoding('utf8')
  const a = []
  req.on('data', function(chunk) {
    a.push(chunk)
  })
  req.on('end', function() {
    stdout.write(`${a.join()}\n`)
    res.end()
  })
})

server.listen(port, hostname, () => {
  stdout.write(`Server running at http://${hostname}:${port}/\n`)
})
