import User from '../../src/models/User';

describe('user model', () => {
  it('can create new user', async () => {
    expect.hasAssertions();

    const user = new User();

    expect(user !== null).toBe(true);
  });

  it('can assign email to new user', async () => {
    expect.hasAssertions();

    const email = 'some@email.com';
    const user: User = Object.assign(new User(), { Email: email });

    expect(user.Email).toBe(email);
  });
});
