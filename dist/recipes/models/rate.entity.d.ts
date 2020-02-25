import { User } from "./user.entity";
import { Recipe } from "./recipe.entity";
import { Lazy } from "../types/lazy";
export declare class Rate {
    readonly id: number;
    value: number;
    user: Lazy<User>;
    date: Date;
    recipe: Lazy<Recipe>;
}
