import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkIfUserExistsByUserId = this.usersRepository.findById(user_id);

    if (!checkIfUserExistsByUserId) {
      throw new Error(`User ${user_id} does not exists`);
    }
    const checkIfUserIsAdmin = checkIfUserExistsByUserId.admin;

    if (!checkIfUserIsAdmin) {
      throw new Error(`User ${user_id} are not admin`);
    }

    const users: User[] = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
