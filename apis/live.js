const qs = require('qs')

const getRoomId = async function (roomId) {
  const url = `https://api.live.bilibili.com/room/v1/Room/room_init?id=${roomId}`
  let res = await this.axios.get(url)
  return res.data.data
}
const getLiveName = async function (roomId) {
  let url = `https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=${roomId}&from=0`
  let res = await this.axios.get(url)
  return res.data.data?.medal.up_medal?.medal_name
}

const sendDanmu = async function (roomid, msg) {
  let url = 'https://api.live.bilibili.com/msg/send'
  try {
    let res = await this.axios.post(
      url,
      qs.stringify({
        bubble: 0,
        msg,
        color: '16738408',
        mode: 1,
        fontsize: '25',
        rnd: Math.round(new Date().getTime() / 1000).toString(),
        roomid,
        csrf: this.csrf,
        csrf_token: this.csrf,
      })
    )
    return res.data
  } catch (error) {
    console.log(`error:`, error)
  }
}

module.exports = {
  getRoomId,
  getLiveName,
  sendDanmu,
}
