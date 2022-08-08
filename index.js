const axios = require('axios')

const user = require('./apis/user')
const live = require('./apis/live')
const info = require('./apis/info')
const comment = require('./apis/comment')
const message = require('./apis/message')

module.exports = function (cookie, options) {
  function BAPI(cookie, options) {
    this.myId = options.id
    this.myLiveRoomId = options.liveRoom
    this.csrf = cookie.bili_jct
    this.axios = axios

    this.axios.defaults.headers['cookie'] = Object.entries(cookie)
      .map(([key, value]) => `${key}=${value}`)
      .join(';')

    return {
      ...this,
      ...user,
      ...live,
      ...info,
      ...comment,
      ...message,
    }
  }

  return new BAPI(cookie, options)
}
