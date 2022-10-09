import { Class, Sex } from '../schemas/cat.schema';
import { Colony } from '../schemas/colony.schema';
export declare class CreateCatDto {
    name: string;
    age: number;
    sex: Sex;
    sterilized: boolean;
    vaccinated: boolean;
    class: Class;
    features: string[];
    parents: any[];
    descendants: any[];
    colony: Colony;
}
