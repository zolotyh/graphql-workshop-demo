import { Field, InputType } from 'type-graphql';

@InputType()
class UserInput {
  @Field()
  readonly username: string;
}

export default UserInput;
