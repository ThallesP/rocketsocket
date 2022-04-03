import { injectable } from "tsyringe";
import { User } from "../schemas/User";

interface ICreateUserDTO {
  email: string;
  name: string;
  socket_id: string;
  avatar: string;
}

@injectable()
export class CreateUserService {
  async execute({ avatar, email, name, socket_id }: ICreateUserDTO) {
    const userExists = await User.findOne({ email }).exec();

    if (userExists) {
      const userUpdated = await User.findOneAndUpdate(
        { _id: userExists._id },
        {
          $set: {
            socket_id,
            avatar,
            name,
          },
        },
        {
          new: true,
        }
      );

      return userUpdated;
    }

    const user = await User.create({
      avatar,
      email,
      name,
      socket_id,
    });

    return user;
  }
}
