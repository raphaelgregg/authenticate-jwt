import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/User';

import UsersRepository from '../repositories/UsersRepository';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async excute({ name, email, password }: RequestDTO): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const findUserWithSameEmail = await usersRepository.findbyEmail(email);

    if (findUserWithSameEmail) {
      throw Error('this email is already being used');
    }

    const hashPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
