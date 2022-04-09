import { ObjectId } from "mongoose";
import { ChatRoom } from "../schemas/ChatRoom";

export class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    const rooms = await ChatRoom.findOne({
      users_id: {
        $all: idUsers,
      },
    }).exec();

    return rooms;
  }
}
