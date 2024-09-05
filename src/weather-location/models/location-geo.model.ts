import { Field, ObjectType, Float, ArgsType } from '@nestjs/graphql';
import { Weather } from './weather.model';

@ObjectType()
@ArgsType()
export class LocationGeo {
  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field(() => Weather, { nullable: true })
  weather?: Weather;
}
