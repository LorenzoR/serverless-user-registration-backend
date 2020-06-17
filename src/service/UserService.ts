import bcrypt from 'bcrypt';

import { UserRepositoryInterface } from '../repositories/UserRepositoryInterface';

import User from '../models/User';

// For bcrypt
const BCRYPT_ROUNDS = 10;

class UserService {
  private repository: UserRepositoryInterface;

  public constructor(repository: UserRepositoryInterface) {
    this.repository = repository;
  }

  public async get(email: string): Promise<User> {
    if (!email) {
      throw new Error('Email can not be empty');
    }

    return this.repository.getByEmail(email);
  }

  public async register(user: User): Promise<boolean> {
    // Validate attributes
    if (!user) {
      throw new Error('User can not be empty');
    }

    if (!user.Email) {
      throw new Error('Email can not be empty');
    }

    if (!user.Name) {
      throw new Error('Name can not be empty');
    }

    if (!user.password) {
      throw new Error('Password can not be empty');
    }

    // Hash password
    const hash = await UserService.generateHash(null, user.password);

    return this.repository.put({ ...user, password: hash.hash });
  }

  // Generates hash to store instead of plain password
  private static generateHash(salt, password): Promise<{ salt: string; password: string; hash: string }> {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, BCRYPT_ROUNDS, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          resolve({ salt, password, hash });
        }
      });
    });
  }
}

export default UserService;
