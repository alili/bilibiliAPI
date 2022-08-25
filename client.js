const axios = require('axios')
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
    return response
  },
  function (error) {
    return error.response
  }
)

const setCookies = function (token) {
  // TODO 处理超时
  axios.defaults.headers['cookie'] = Object.entries(cookie)
    .map(([key, value]) => `${key}=${value}`)
    .join(';')
  csrf = cookie.bili_jct
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

module.exports = {
  setCookies,
  http: axios,
}
