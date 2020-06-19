const {stdout, stdin} = process

stdout.write('好友 IP: ')

stdin.setEncoding('utf8')
stdin.on('readable', function() {
  let ip = null
  while((ip = stdin.read()) !== null) {
    ip = ip.trim()
    if(ip.length > 0) {
      stdout.write(`OK! 好友 IP: ${ip}`)
      break
    }else {
      stdout.write('请输入 IP: ')
    }
  }
  stdin.end()
})

