import {Document} from 'mongoose';

export interface ICategorie extends Document{
    readonly nom: string;
    readonly description: string;

}