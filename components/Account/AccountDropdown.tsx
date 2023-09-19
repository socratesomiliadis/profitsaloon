import { useClerk } from "@clerk/clerk-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import { PlusIcon } from "./PlusIcon.jsx";

export default function AccountDropdown() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "p-0 border-small border-divider bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50",
        arrow: "bg-default-200",
      }}
    >
      <DropdownTrigger>
        {user?.imageUrl && (
          <Image
            src={user?.imageUrl}
            width={100}
            height={100}
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        )}
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="px-3 py-2"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            // "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={user?.firstName}
              description={`@${user?.username}`}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "md",
                src: user?.imageUrl,
              }}
            />
          </DropdownItem>
          <DropdownItem onClick={() => router.push("/account")} key="account">
            Account
          </DropdownItem>
          <DropdownItem key="settings">Billing</DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem
            onClick={() => router.push("/help")}
            key="help_and_feedback"
          >
            Help & Feedback
          </DropdownItem>
          <DropdownItem onClick={() => signOut()} key="logout">
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
