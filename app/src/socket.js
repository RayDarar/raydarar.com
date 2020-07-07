import IO from "socket.io-client";
import config from "@/config";

const io = IO(
  config.isProd ? "https://162.243.165.83:3000/" : "http://localhost:3000",
  { secure: config.isProd }
);

export { io };
