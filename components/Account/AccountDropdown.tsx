import { useClerk } from "@clerk/clerk-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AccountDropdown() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <Dropdown
      showArrow
      radius="sm"
      className="bg-black"
      classNames={{
        base: "p-0 border-small border-divider bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20",
        arrow: "bg-[#232323]",
      }}
    >
      <DropdownTrigger>
        {user?.imageUrl && (
          <Image
            src={user?.imageUrl}
            width={100}
            height={100}
            alt=""
            className="w-9 h-9 rounded-full cursor-pointer"
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
          <DropdownItem
            key="billing"
            onClick={() => router.push("/account?tab=billing")}
          >
            Billing
          </DropdownItem>
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
