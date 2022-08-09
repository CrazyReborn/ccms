import { Role, User } from '../../src/schemas/user.schema';

export const UserStub = (): User => {
  return {
    firstName: 'John',

    lastName: 'Doe',

    username: 'jaydee',

    email: 'jaydee@mail.com',

    password: 'pass123',

    colonies: [],

    role: Role.Caretaker,
  };
};
