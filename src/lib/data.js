import { Recipe } from "./models";
import { connectToDb } from "./utils";
export const getRecipes = async () => {
  try {
    await connectToDb();
    const recipes = await Recipe.find({});
    return recipes;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
