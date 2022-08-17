import { Role, User } from '../../src/schemas/user.schema';
import { OrganizationStub } from './organization.stub';

const organization = OrganizationStub();

export const UserStub = (): User => {
  return {
    firstName: 'John',

    lastName: 'Doe',

    username: 'jaydee',

    email: 'jaydee@mail.com',

    password: 'pass123',

    colonies: [],

    role: Role.Caretaker,

    organization,
  };
};
