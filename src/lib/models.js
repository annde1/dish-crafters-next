import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
      max: 25,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);
const ingredientSchema = new mongoose.Schema({
  ingName: {
    type: String,
    required: true,
    max: 40,
  },
  amount: {
    type: String,
    required: true,
  },
});
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  category: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },

  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    max: 400,
  },
  servings: {
    type: Number,
    required: true,
  },
  cookTime: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
