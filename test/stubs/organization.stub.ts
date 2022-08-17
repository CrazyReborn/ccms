import { Organization } from '../../src/schemas/organization.schema';
import { UserStub } from './user.stub';

const user = UserStub();

export const OrganizationStub = (): Organization => {
  return {
    name: 'Flash',
    owner: user,
    members: [user, user],
  };
};
