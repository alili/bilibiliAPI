const qs = require('qs')

const updateLiveRoomName = async function (name) {
  let url = 'https://api.live.bilibili.com/room/v1/Room/update'
  let res = await this.axios.post(
    url,
    qs.stringify({
      room_id: this.myLiveRoomId,
      title: name,
      csrf: this.csrf,
      csrf_token: this.csrf,
    })
  )
}

const stopLive = async function () {
  let url = 'https://api.live.bilibili.com/room/v1/Room/stopLive'
  let res = await this.axios.post(
    url,
    qs.stringify({
      room_id: this.myLiveRoomId,
      platform: 'pc',
      csrf: this.csrf,
      csrf_token: this.csrf,
    })
  )

  return res.data
}

const startLive = async function (area = 372) {
  const url = `https://api.live.bilibili.com/room/v1/Room/startLive`
  console.log(`this.csrf:`, {
    room_id: this.myLiveRoomId,
    platform: 'pc',
    area_v2: area,
    csrf: this.csrf,
    csrf_token: this.csrf,
  })
  let res = await this.axios.post(
    url,
    qs.stringify({
      room_id: this.myLiveRoomId,
      platform: 'pc',
      area_v2: area,
      csrf: this.csrf,
      csrf_token: this.csrf,
    })
  )

  return res.data
}

const getRoomId = async function (roomId) {
  const url = `https://api.live.bilibili.com/room/v1/Room/room_init?id=${roomId || this.myLiveRoomId}`
  let res = await this.axios.get(url)
  return res.data.data
}
const getLiveName = async function (roomId) {
  let url = `https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByUser?room_id=${
    roomId || this.myLiveRoomId
  }&from=0`
  let res = await this.axios.get(url)
  return res.data.data?.medal.up_medal?.medal_name
}

const sendDanmu = async function (roomId, msg) {
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
        roomId: roomId || this.myLiveRoomId,
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
  startLive,
  updateLiveRoomName,
  stopLive,
}
