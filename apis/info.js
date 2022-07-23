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
const getStat = async function () {
  const url = `https://api.bilibili.com/x/web-interface/nav/stat`
  const res = await this.axios.get(url)
  return res.data.data
}
const getLiveList = async function () {
  const url = `https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/FeedList?page=1&pagesize=30`
  const res = await this.axios.get(url)
  return res.data.data.list
}
const getDynamics = async function () {
  const url = `https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=15516023&type_list=8,512,4097,4098,4099,4100,4101`
  const res = await this.axios.get(url)

  return res.data.data
}
const getArchives = async function () {
  const url = `https://member.bilibili.com/x/web/archives?status=is_pubing%2Cpubed%2Cnot_pubed&pn=1&ps=10&coop=1&interactive=1`
  const res = await this.axios.get(url)
  return res.data.data.arc_audits
}
const markreadReply = async function () {
  let url = `https://api.bilibili.com/x/msgfeed/reply?platform=web&build=0&mobi_app=web`
  let res = await http.get(url)

  return res.data
}

module.exports = {
  getList,
  getUnread,
  getStat,
  getLiveList,
  getDynamics,
  getArchives,
  markreadReply,
}
