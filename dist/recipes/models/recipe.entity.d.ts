import { User } from './user.entity';
import { Lazy } from '../types/lazy';
import { Rate } from 'src/recipes/models/rate.entity';
export declare class Recipe {
    readonly id: number;
    title: string;
    description?: string;
    ratings: Lazy<Rate[]>;
    author: Lazy<User>;
}
