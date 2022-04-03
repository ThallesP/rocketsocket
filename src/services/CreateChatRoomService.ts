import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
export class CreateChatRoomService {
  async execute(users_id: string[]) {
    const room = await ChatRoom.create({ users_id });

    return room;
  }
}
