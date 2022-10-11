import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const checkIfUserExistsByUserId = this.usersRepository.findById(user_id);

    if (!checkIfUserExistsByUserId) {
      throw new Error(`User ${user_id} does not exists`);
    }

    const user = this.usersRepository.turnAdmin(checkIfUserExistsByUserId);

    return user;
  }
}

export { TurnUserAdminUseCase };
