import User from '../models/User';

export interface UserRepositoryInterface {
  getByEmail(email: string): Promise<User>;
  put(user: User): Promise<boolean>;
}
