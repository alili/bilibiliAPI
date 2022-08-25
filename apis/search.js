const { http } = require('../client')

const videos = async function (keyword, { pn = 1, ps = 42, order } = {}) {
  let url = `https://api.bilibili.com/x/web-interface/search/type`
  let res = await http.get(url, {
    params: {
      page: pn,
      page_size: ps,
      order, // click/pubdate/dm/stow
      platform: 'pc',
      highlight: 0,
      single_column: 0,
      search_type: 'video',
      dynamic_offset: page * page_size - page_size,
      keyword,
    },
  })

  return res.data.data
}

const newList = async function (rid, { type = 0, ps = 30, pn = 1 } = {}) {
  let url = `https://api.bilibili.com/x/v2/reply/new?pn=${pn}&ps=${ps}&type=${type}&oid=${rid}`
  let res = await http.get(url)

  return res.data.data
}

const userVideo = async function (mid, { pn = 1, ps = 30, order = 'pubdate' } = {}) {
  let url = `https://api.bilibili.com/x/space/arc/search?mid=${mid}&pn=${pn}&ps=${ps}&order=${order}&jsonp=jsonp`
  let res = await http.get(url)

  return res.data.data
}

module.exports = {
  videos,
  newList,
  userVideo,
}
