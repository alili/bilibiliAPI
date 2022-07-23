const getComment = async function (pn = 1, ps = 20) {
  let url = `https://member.bilibili.com/x/web/replies?order=ctime&filter=-1&is_hidden=0&type=1&comment_display=0&bvid=&pn=${pn}&ps=${ps}`
  let res = await this.axios.get(url)
  return res.data.data
}
const getUnread = async function () {
  let url = 'https://api.bilibili.com/x/msgfeed/unread?build=0&mobi_app=web'
  let res = await this.axios.get(url)

  return res.data.data
}
const replyComment = async function (comment, message) {
  let url = `https://api.bilibili.com/x/v2/reply/add`
  let res = await this.axios.post(
    url,
    qs.stringify({
      oid: comment.oid,
      type: 1,
      root: comment.root || comment.id,
      parent: comment.id,
      message,
      plat: 1,
      jsonp: 'jsonp',
      csrf,
    })
  )
  return res
}
const setLike = async function ({ oid, id }) {
  let url = `https://api.bilibili.com/x/v2/reply/action`
  let res = await this.axios.post(
    url,
    qs.stringify({
      oid,
      type: 1,
      rpid: id,
      action: 1,
      jsonp: 'jsonp',
      csrf,
    })
  )
  return res
}

module.exports = {
  getComment,
  getUnread,
  replyComment,
  setLike,
}
