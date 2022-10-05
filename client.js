const axios = require('axios')
const qs = require('qs')
let csrf

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data,
        csrf_token: csrf,
        csrf: csrf,
      })
    }
    return config
  },
  function (error) {
    return error
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    if (response.data.code !== 0) {
      console.log(`response:`, response.data)
    }
    return response
  },
  function (error) {
    console.log(error.response)
    return error.response
  }
)

const setCookies = function (cookie) {
  // TODO 处理超时
  axios.defaults.headers['cookie'] = Object.entries(cookie)
    .map(([key, value]) => `${key}=${value}`)
    .join(';')
  csrf = cookie.bili_jct
}

module.exports = {
  setCookies,
  http: axios,
}
