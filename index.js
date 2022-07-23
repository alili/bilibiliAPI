const axios = require('axios')

const user = require('./apis/user')
const live = require('./apis/live')
const info = require('./apis/info')
const comment = require('./apis/comment')
const message = require('./apis/message')

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
