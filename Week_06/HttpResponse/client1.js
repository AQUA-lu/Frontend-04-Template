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
        // .....
    });
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

// 第一步 HTTP请求总结
// 设计一个HTTP请求的类
// content type 是一个必要的字段，要有默认值
// body是KTV格式
// 不同的content-type影响body的格式