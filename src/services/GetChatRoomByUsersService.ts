import { ObjectId } from "mongoose";
import { ChatRoom } from "../schemas/ChatRoom";

export class GetChatRoomByUsersService {
  async execute(users_id: ObjectId[]) {
    const rooms = await ChatRoom.findOne({
      users_id: {
        $all: users_id,
      },
    }).exec();

    return rooms;
  }
}
