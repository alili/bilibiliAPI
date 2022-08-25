const axios = require('axios')

const user = require('./apis/user')
const live = require('./apis/live')
const info = require('./apis/info')
const comment = require('./apis/comment')
const message = require('./apis/message')
const search = require('./apis/search')

module.exports = function (cookie, options) {
  function BAPI(cookie, options) {
    this.myId = options.id
    this.myLiveRoomId = options.liveRoom
    this.csrf = cookie.bili_jct
    http = axios

    http.defaults.headers['cookie'] = Object.entries(cookie)
      .map(([key, value]) => `${key}=${value}`)
      .join(';')

    return {
      ...this,
      user,
      live,
      info,
      comment,
      message,
      search,
    }
  }

  return new BAPI(cookie, options)
}
