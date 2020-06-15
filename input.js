// function on(...args) {
//   process.stdin.on(...args)
// }
const {stdin, stdout} = process
stdin.setEncoding('utf8')
stdin.on('readable', () => {
  let data = null
  data = stdin.read()
  stdout.moveCursor(0, -1, function() {
    stdout.clearLine(0, function() {
      // stdout.moveCursor(0, -1)
      // stdout.write('Hey!!!')
      stdout.write(`[ME]: ${data}`)
    })
  })
  // while((data = process.stdin.read()) !== null) {
  //   process.stdin.pause()
  //   process.stdout.write(`[ME]: ${data}`)
  //   const w = process.stdout.getWindowSize()
  //   process.stdout.cursorTo(0, w[1] - 1, function() {
  //     // process.stdout.clearLine(0)
  //   })
  // }
})


// console.log(process.stdout.getWindowSize())
