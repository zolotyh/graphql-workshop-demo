import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.entity';
import { Repository } from 'typeorm';
export declare class RecipesService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<Recipe>);
    create(data: NewRecipeInput): Promise<Recipe>;
    findOneById(id: string): Promise<Recipe>;
    findAll(recipesArgs: RecipesArgs): Promise<Recipe[]>;
    remove(id: string): Promise<boolean>;
}
