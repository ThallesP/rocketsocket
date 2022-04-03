import { io } from "../http";

io.on("connect", (socket) => {
  console.log("Enviando mensagem");
  socket.emit("chat_iniciado", { message: "Oi!" });
});
