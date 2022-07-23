const qs = require('qs')

const sendMessage = async function (receiver_id, content) {
  let url = 'https://api.vc.bilibili.com/web_im/v1/web_im/send_msg'
  let res = await this.axios.post(
    url,
    qs.stringify({
      msg: {
        sender_uid: this.myId,
        receiver_id: receiver_id,
        receiver_type: 1,
        msg_type: 1,
        msg_status: 0,
        content: JSON.stringify({ content }),
        timestamp: now(),
        new_face_version: 0,
        dev_id: '23333333-A963-4C6F-859C-7CDF71AE1E2C',
      },
      from_firework: 0,
      build: 0,
      mobi_app: 'web',
      csrf_token: this.csrf,
      csrf: this.csrf,
    })
  )
}

module.exports = {
  sendMessage,
}
