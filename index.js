const client = require("./client");

const user = require("./apis/user");
const live = require("./apis/live");
const info = require("./apis/info");
const comment = require("./apis/comment");
const message = require("./apis/message");
const search = require("./apis/search");
const video = require("./apis/video");

module.exports = function (cookie = "", options = {}) {
  function BAPI(cookie, options) {
    this.myId = options.id;
    this.myLiveRoomId = options.liveRoom;
    client.setCookies(cookie);

    return {
      ...this,
      user,
      live,
      info,
      comment,
      message,
      search,
      video,
    };
  }

  return new BAPI(cookie, options);
};
