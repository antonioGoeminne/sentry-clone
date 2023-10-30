"use client";
import { BugForm } from "@features/bugs";
import { useToggleVisibility } from "@hooks/use-toggle-visibility";
import { Button } from "@ui/Button";
import { Modal } from "@ui/Modal";
import { secondary } from "@ui/colors";
import styled from "styled-components";

export default function Page() {
  const [openAddBug, toggleVisibility] = useToggleVisibility();

  return (
    <div
      style={{
        display: "flex",
        padding: "1rem 1.1rem",
        width: "60%",
        height: 100,
        justifyContent: "space-between",
      }}
    >
      <Title>Bugs</Title>
      <Button
        styles={{
          ["background-color"]: secondary,
          color: "white",
          width: 100,
          height: 50,
        }}
        onClick={toggleVisibility}
      >
        Add Bug
      </Button>
      <Modal open={openAddBug} setOpenModal={toggleVisibility}>
        <BugForm />
      </Modal>
    </div>
  );
}

const Title = styled.h2`
  font-size: 1.5rem;
`;
