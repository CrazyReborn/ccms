import { Cat, Class, Sex } from '../../src/schemas/cat.schema';

export const CatStub = (): Cat => {
  return {
    name: 'snow',
    age: 12,
    sex: Sex.Male,
    sterilized: true,
    vaccinated: true,
    class: Class.Feral,
    features: [],
    parents: [],
    descendants: [],
  }
}