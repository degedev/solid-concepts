import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const searchedUserById = this.usersRepository.findById(user_id);

    if (!searchedUserById) {
      throw new Error(`User ${user_id} does not exists`);
    }

    return searchedUserById;
  }
}

export { ShowUserProfileUseCase };
