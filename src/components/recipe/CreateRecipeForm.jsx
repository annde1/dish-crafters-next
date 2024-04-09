"use client";
import { Input, Button } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
const CreateRecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const handleAddIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleChangeIngredient = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  return (
    <>
      <form>
        <Input
          name="title"
          type="text"
          label="Recipe Title"
          color="default"
          className="w-80 mt-3"
        />

        <Select
          name="servings"
          label="Category"
          placeholder="Select category"
          selectionMode="multiple"
          className="max-w-xs mt-3"
        >
          <SelectItem value="breakfast">Breakfast</SelectItem>
          <SelectItem value="lunch">Lunch</SelectItem>
          <SelectItem value="dinner">Dinner</SelectItem>
          <SelectItem value="dessert">Dessert</SelectItem>
        </Select>
        <Textarea
          name="description"
          label="Description"
          placeholder="Enter your description"
          className="max-w-xs mt-3"
        />
        <Input
          name="cookTime"
          type="number"
          label="Cook Time"
          color="default"
          step={10}
          min={0}
          className="w-90 mt-3"
        />
        <Divider className="mt-3 mb-3" />
        <p className="mb-3">Ingredients</p>
        {ingredients.map((ing, index) => (
          <Input
            key={index}
            value={ing}
            label={`Ingredient ${index + 1}`}
            placeholder="e.g. 2 cups flour"
            className="mt-3"
            onChange={(e) => {
              handleChangeIngredient(index, e.target.value);
            }}
          />
        ))}
        <Button className="mt-3" onClick={handleAddIngredient}>
          + Add Ingredient
        </Button>
      </form>
    </>
  );
};
export default CreateRecipeForm;
