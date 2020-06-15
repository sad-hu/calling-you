process.stdout.write('好友的 IP(如：127.0.0.1)：')

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  const ip = process.stdin.read()
  process.stdout.write(`IP: ${ip.trim()}`)
  process.stdin.end()
})

