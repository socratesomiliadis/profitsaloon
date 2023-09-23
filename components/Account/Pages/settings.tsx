import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { UserProfile, useUser } from "@clerk/clerk-react";
import UpdateEmail from "../UpdateEmail";

export default function AccSettings() {
  const { user, isLoaded } = useUser();
  const {
    isOpen: isOpenEmail,
    onOpen: onOpenEmail,
    onOpenChange: onOpenChangeEmail,
  } = useDisclosure();

  if (!isLoaded) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="w-full h-full flex items-center justify-center absolute"
    >
      <Modal
        scrollBehavior="inside"
        isOpen={isOpenEmail}
        onOpenChange={onOpenChangeEmail}
      >
        <ModalContent className="text-white p-4 max-w-none w-fit rounded-md bg-black border-[#818181]/20 border-[1px] bg-gradient-to-r from-[#121212]/20 via-[#232323]/20 to-[#121212]/20">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Change Email
              </ModalHeader>
              <ModalBody className=""></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col h-full py-8 w-full pr-6">
        <h2 className="text-4xl text-white font-medium pl-6">
          Account Settings
        </h2>
        <div className="w-full h-full overflow-y-auto">
          <UserProfile
            appearance={{
              elements: {
                header: "hidden",
                navbar: "hidden",
                profileSection__profile: "hidden",
                profileSection__username: "hidden",
                page: "px-6",
                card: "bg-transparent w-full text-white px-0 m-0",
                scrollBox: "py-6 w-full",
                pageScrollBox: "p-0 w-full",
                rootBox: "p-0 w-full",
              },
            }}
          />
        </div>
        {/* <div className="mt-4 flex flex-row gap-3">
          <Input
            isDisabled
            type="email"
            label="Email"
            defaultValue={user?.primaryEmailAddress?.emailAddress?.toString()}
            classNames={{
              inputWrapper: [
                "bg-gradient-to-r w-full text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
              ],
            }}
            className="w-[500px]"
          />
          <button
            onClick={onOpenEmail}
            className="text-white border-[#282828]/70 border-[1px] rounded-xl px-8 bg-gradient-to-r from-[#121212]/50 via-[#232323]/50 to-[#121212]/50"
          >
            Change Email
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}
