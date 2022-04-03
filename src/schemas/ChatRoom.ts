import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";
import { v4 as uuidV4 } from "uuid";

type ChatRoom = Document & {
  users_id: User[];
  chat_room_id: String;
};

const ChatRoomSchema = new Schema({
  users_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  chat_room_id: {
    type: String,
    default: uuidV4(),
  },
});

export const ChatRoom = mongoose.model<ChatRoom>("ChatRooms", ChatRoomSchema);
