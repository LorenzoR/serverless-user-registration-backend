import User from '../../src/models/User';
import UserService from '../../src/service/UserService';
import UserRepositoryDynamoDB from '../../src/repositories/UserRepositoryDynamoDB';

const userRepositoryDynamoDB = new UserRepositoryDynamoDB('local');
const userService = new UserService(userRepositoryDynamoDB);

const email = `something+test${new Date().getTime()}@email.com`;
const newUser = Object.assign(new User(), {
  Email: email,
  Name: 'A name',
  password: 'A password',
});

describe('user model', () => {
  it('can register a user', async () => {
    expect.hasAssertions();

    const response = await userService.register(newUser);

    expect(response).toBe(true);
  });

  it('can get a user', async () => {
    expect.hasAssertions();

    const user = await userService.get(email);

    expect(user).toHaveProperty('Name');
    expect(user.Name).toBe(newUser.Name);
  });

  it('can not register a user with same email than before', async () => {
    expect.hasAssertions();

    const errorMsg = `There is already an user with email ${email}`;
    await expect(async () => userService.register(newUser)).rejects.toThrow(errorMsg);
  });
});
