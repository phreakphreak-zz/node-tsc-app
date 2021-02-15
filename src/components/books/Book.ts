import { title } from "process"

import {Document} from 'mongoose';
export interface Book extends Document{
    title:string;
    author:string;
    isbn:string;
}