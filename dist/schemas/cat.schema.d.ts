import mongoose, { Document } from 'mongoose';
export declare type CatDoc = Cat & Document;
export declare enum Sex {
    Male = 0,
    Female = 1
}
export declare enum Class {
    Feral = 0,
    Stray = 1
}
export declare class Cat {
    name: string;
    age: number;
    sex: Sex;
    sterilized: boolean;
    vaccinated: boolean;
    class: Class;
    features: string[];
    parents: Cat[];
    descendants: Cat[];
}
export declare const CatSchema: mongoose.Schema<Cat, mongoose.Model<Cat, any, any, any, any>, {}, {}, {}, {}, "type", Cat>;
