function getIPAdress() {
  let {interfaces} = require('os').networkInterfaces();　　
  console.log(interfaces)
  for (let devName in interfaces) {　　　　
      let iface = interfaces[devName];　　　　　　
      for (let i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (alias.family === 'IPv4' && !alias.internal) {
              return alias.address;
          }
      }　　
  }
}

let ip = getIPAdress()
console.log("\n--------IP地址：" + ip+ "------\n")
