import { injectable } from "tsyringe";
import { User } from "../schemas/User";

@injectable()
export class GetUserBySocketIdService {
  async execute(socket_id: string) {
    const user = await User.findOne({ where: { socket_id } });

    return user;
  }
}
