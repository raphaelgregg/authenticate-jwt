import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findbyEmail(email: string): Promise<User | null> {
    // const findUserWithSameEmail = this.users.find(user => email === user.email);
    const findUserWithSameEmail = await this.findOne({
      where: { email },
    });
    return findUserWithSameEmail || null;
  }
}

export default UsersRepository;
