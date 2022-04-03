import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
const app = express();

const server = createServer(app);

mongoose.connect(process.env.MONGO_URL);

app.use(express.static(process.cwd() + "/public"));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(socket.id);
});

export { server, io };
