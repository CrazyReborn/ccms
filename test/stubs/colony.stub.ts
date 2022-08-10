import { Colony } from '../../src/schemas/colony.schema';

export const ColonyStub = (): Colony => {
  return {
    name: 'Gorki 2',
    size: 12,
    caretakers: [],
    location: [123, 123],
    radius: 500,
  };
};
