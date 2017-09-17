const Gun = require("./gun/root");

/* utils */
require("./gun/type");

/* engine */
require("./gun/nts");

/* core api */
require("./gun/get");
require("./gun/put");
require("./gun/set");
require("./gun/on");
require("./gun/map");

/* extended api */
require("./gun/back");

/* ws */
require("./gun/websocket");

module.exports = Gun;