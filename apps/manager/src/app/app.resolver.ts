import { Query, Resolver, ObjectType, Field, ID, Arg } from 'type-graphql';

@ObjectType()
class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingredients: string[];
}

@Resolver(Recipe)
export class RecipeResolver {
  @Query(() => Recipe)
  async recipe(@Arg('id') id: string): Promise<Recipe> {
    return {
      id: id,
      title: 'asdfadsf',
      creationDate: new Date(),
      ingredients: [],
    };
  }
}
