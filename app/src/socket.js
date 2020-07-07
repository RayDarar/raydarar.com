import { connect } from "socket.io-client";

const io = connect("https://ryspekov.life/");

export { io };
