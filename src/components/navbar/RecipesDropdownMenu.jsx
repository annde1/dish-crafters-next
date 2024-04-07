import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";
const RecipesDropdownMenu = () => {
  return (
    <>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem key="autoscaling">
          <Link href="/recipes/browse-recipes">Browse </Link>
        </DropdownItem>
        <DropdownItem key="usage_metrics">
          <Link href="/recipes/favorites">Favorites</Link>
        </DropdownItem>
        <DropdownItem key="usage_metrics">
          <Link href="/recipes/create-recipe">Create Recipe</Link>
        </DropdownItem>
        <DropdownItem key="usage_metrics">
          <Link href="/recipes/my-recipes">My Recipes</Link>
        </DropdownItem>
      </DropdownMenu>
    </>
  );
};
export default RecipesDropdownMenu;
