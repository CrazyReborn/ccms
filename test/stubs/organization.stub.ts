import { Organization } from '../../src/schemas/organization.schema';
import { UserStub } from './user.stub';

export const OrganizationStub = (): Organization => {
  return {
    name: 'Flash',
    owner: UserStub(),
    members: [UserStub(), UserStub()],
  };
};
