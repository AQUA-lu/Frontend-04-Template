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

  send() {
    return new Promise((resolve, reject) => {
      const parse = new ResponseParser;
      resolve("");
    });
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

  console.log('response')
}();

// 第二步 HTTP请求总结
// 在Request的构造器中收集必要的信息
// 在设计send函数，把请求真实发送到服务器
// send函数应该是异步的，所以返回Promise