import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class Weather {
  @Field()
  description: string;

  @Field(() => Float)
  temp: number;

  @Field(() => Float)
  max_temp: number;

  @Field(() => Float)
  min_temp: number;

  @Field(() => Float)
  feels_like: number;
}
