const { http } = require('../client')

const getUser = async function (mid) {
  let url = `https://api.bilibili.com/x/space/acc/info?mid=${mid}`
  let res = await http.get(url)

  return res.data.data
}
const notice = async function (mid) {
  let url = `https://api.bilibili.com/x/space/notice?mid=${mid}`
  let res = await http.get(url)

  return res.data
}

module.exports = {
  getUser,
  notice,
}
