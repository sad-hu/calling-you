process.stdout.write('输入好友的主机（如：http://127.0.0.1:3000）：')

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
  // let chunk;
  // Use a loop to make sure we read all available data.
  // chunk !== null, chunk.length => 2
  // while ((chunk = process.stdin.read()) !== null) {
  //   console.log('typeof chunk', typeof chunk, chunk.trim().length)
  //   process.stdout.write(`data: ${chunk}`);
  // }
  const str = process.stdin.read()
  process.stdout.write(str + ' ' + str.length)
  process.stdin.end()
  
})

