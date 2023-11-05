"use client";
import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { motion } from "framer-motion";

interface modalProps {
  open: Boolean;
  setOpenModal: () => void;
  trigger?: ReactNode;
  children: ReactNode;
}

export const Modal = ({
  open,
  setOpenModal,
  trigger,
  children,
}: modalProps) => (
  <Dialog.Root open={open} onOpenChange={setOpenModal}>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Content forceMount>{children}</Content>
      </motion.div>
    </Dialog.Portal>
  </Dialog.Root>
);

const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
`;
