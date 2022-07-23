const getList = async function (ts) {
  let url = `https://api.vc.bilibili.com/session_svr/v1/session_svr/new_sessions?begin_ts=${ts}000000&build=0&mobi_app=web`
  let res = await this.axios.get(url)
  return res.data.data.session_list
}
const getUnread = async function () {
  let url = 'https://api.bilibili.com/x/msgfeed/unread?build=0&mobi_app=web'
  let res = await this.axios.get(url)

  return res.data.data
}

exports = {
  getList,
  getUnread,
}
