import { Class, Sex } from '../schemas/cat.schema';
export declare class UpdateCatDto {
    name: string;
    age: number;
    sex: Sex;
    sterilized: boolean;
    vaccinated: boolean;
    class: Class;
    features: string[];
    parents: any[];
    descendants: any[];
}
