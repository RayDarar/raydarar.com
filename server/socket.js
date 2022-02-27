const SocketIo = require("socket.io");
let io;
let users = 0;

module.exports = {
  configure(httpServer) {
    io = SocketIo(httpServer);

    io.on("connection", (socket) => {
      users += 1;

      socket.on("disconnect", () => {
        users--;
      });
    });
  },
  getUsers() {
    return users;
  },
};
