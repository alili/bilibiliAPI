const { http } = require("../client");

const getInfo = async function (bvid) {
  let url = `https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`;
  let res = await http.get(url);

  return res.data;
};

const online = async function (bvid, cid) {
  let url = `https://api.bilibili.com/x/player/online/total?bvid=${bvid}&cid=${cid}`;
  let res = await http.get(url);

  return res.data.data;
};

module.exports = {
  getInfo,
  online,
};
