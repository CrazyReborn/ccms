import { Task } from '../../src/schemas/task.schema';
import { OrganizationStub } from './organization.stub';
import { UserStub } from './user.stub';

const user = UserStub();
console.log(user);

const organization = OrganizationStub();

export const TaskStub = (): Task => {
  const date = Date.now();
  return {
    assignedTo: user,
    date: date,
    location: [112, 112],
    organization,
    done: false,
  };
};
