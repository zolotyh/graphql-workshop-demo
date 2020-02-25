import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

import { Recipe } from "./recipe.entity";
import {ObjectType, Field, ID} from "type-graphql";
import {Lazy} from "../types/lazy";

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nickname?: string;

  @Column()
  password: string;

  @OneToMany(type => Recipe, recipe => recipe.author, { lazy: true })
  @Field(type => [Recipe])
  recipes: Lazy<Recipe[]>;
}
