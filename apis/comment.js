const { http } = require('../client')

const getComment = async function (pn = 1, ps = 10) {
  let url = `https://member.bilibili.com/x/web/replies?order=ctime&filter=-1&is_hidden=0&type=1&comment_display=0&bvid=&pn=${pn}&ps=${ps}`
  let res = await http.get(url)
  return res.data
}
const replyComment = async function (comment, message) {
  let url = `https://api.bilibili.com/x/v2/reply/add`

  let res = await http.post(url, {
    oid: comment.oid,
    type: 1,
    root: comment.root || comment.id,
    parent: comment.id,
    message,
    plat: 1,
  })

  return res?.data
}
const setLike = async function ({ oid, id }) {
  let url = `https://api.bilibili.com/x/v2/reply/action`
  let res = await http.post(url, {
    oid,
    type: 1,
    rpid: id,
    action: 1,
    jsonp: 'jsonp',
    csrf: this.csrf,
  })
  return res.data
}

module.exports = {
  getComment,
  replyComment,
  setLike,
}
