import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CurrentDateTime {
  @Field()
  date: string;

  @Field()
  time: string;
}
