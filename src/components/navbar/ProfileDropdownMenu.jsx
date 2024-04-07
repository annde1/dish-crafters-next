import { DropdownMenu, DropdownItem } from "@nextui-org/react";
import Link from "next/link";
const ProfileDropdownMenu = () => {
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
          <Link href="/account/my-account">My Account</Link>
        </DropdownItem>
        <DropdownItem key="usage_metrics">
          <Link href="/account/edit-account">Edit Account</Link>
        </DropdownItem>
      </DropdownMenu>
    </>
  );
};
export default ProfileDropdownMenu;
