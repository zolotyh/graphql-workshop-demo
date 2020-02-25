import { Recipe } from "./recipe.entity";
import { Lazy } from "../types/lazy";
export declare class User {
    readonly id: number;
    email: string;
    nickname?: string;
    password: string;
    recipes: Lazy<Recipe[]>;
}
