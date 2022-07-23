const getUser = async function (mid) {
  let url = `https://api.bilibili.com/x/space/acc/info?mid=${mid}`
  let res = await this.axios.get(url)

  return res.data.data
}

module.exports = {
  getUser,
}
