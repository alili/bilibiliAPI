const client = require("./client");

const user = require("./apis/user");
const live = require("./apis/live");
const info = require("./apis/info");
const comment = require("./apis/comment");
const message = require("./apis/message");
const search = require("./apis/search");
const video = require("./apis/video");

module.exports = function (options = {}) {
  function BAPI(options) {
    this.myId = options.id;
    this.myLiveRoomId = options.liveRoom;
    if(options.cookie) {
      client.setCookies(options.cookie);
    }
    if(options.proxy) {
      client.setProxy(options.proxy);
    }
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

  return new BAPI(options);
};
