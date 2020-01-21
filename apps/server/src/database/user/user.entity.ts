import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { AdvancedOptions } from 'type-graphql/dist/decorators/types';

function RequiredField(opts?: AdvancedOptions) {
  return Field({ nullable: false, ...opts });
}

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @RequiredField()
  @Column({ length: 100 })
  username: string;

  @RequiredField()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
