// 第三步发送请求
// 设计支持已有的connection或者自己创建connection
// 收到数据传给parse
// 根据parser的状态 resolve Promise

const net = require('net')

class Request {
  constructor(opt) {
    this.method = opt.method || 'GET'
    this.host = opt.host
    this.port = opt.port || 80
    this.path = opt.path || '/'
    this.body = opt.boyd || {}
    this.headers = opt.headers || {}
    if (!this.headers['Content-Type']) {
      this.headers["Content-Type"] = 'application/x-www-form-urlencoded'
    }

    if (this.headers['Content-Type'] === 'application/json') {
      this.bodyText = JSON.stringify(this.body)
    } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`)
    }

    this.headers['Content-Length'] = this.bodyText.length
  }

  send(connection) {
    return new Promise((resolve, reject) => {
      const parser = new ResponseParser
      if (connection) {
        connection.write(this.toString())
      } else {
        connection = net.createConnection({
          host: this.host,
          port: this.port
        }, () => {
          connection.write(this.toString())
        })
      }
      connection.on('data', data => {
        console.log(data.toString())
        parser.receive(data.toString())
        if (parser.isFinished) {
          resolve(parser.response)
          connection.end()
        }
      });
      connection.on('error', err => {
        reject(err)
        connection.end()
      })
    })
  }

  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r
    ${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r\r
    ${this.bodyText}
    `
  }
}

class ResponseParser {
    constructor() {}
    receive(sting) {
      for (let i = 0; i < string.length; i++) {
        this.receiveChar(sting.chartAt(i));
      }
    }
    receiveChar(char){
  
    }
  }

void async function () {
  let request = new Request({
    method: "POST",
    host: '127.0.0.1',
    prot: '8088',
    path: '/',
    headers: {
      ['X-foo2']: 'costomed'
    },
    body: {
      name: "AQUA"
    }
  })

  let res = await request.send()
  console.log('result ====> ', res)
}()