const axios = require('axios')

const user = require('./api/user')
const live = require('./api/live')
const info = require('./api/info')
const comment = require('./api/comment')
const message = require('./api/message')

module.exports = function (app_id, app_secret) {
  function BAPI(myId, cookie, csrf) {
    this.myId = myId
    this.cookie = cookie
    this.csrf = csrf
    this.axios = axios

    this.axios.defaults.headers['cookie'] = cookie

    return {
      ...this,
      ...user,
      ...live,
      ...info,
      ...comment,
      ...message,
    }
  }

  return new BAPI(myId, app_secret)
}
