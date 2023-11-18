"use client";
import { BugForm, Table, useGetBugs } from "@features/bugs";
import { useToggleVisibility } from "@hooks/use-toggle-visibility";
import { Button } from "@ui/Button";
import { Modal } from "@ui/Modal";
import { primary, secondary } from "@ui/colors";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function Page() {
  const [openAddBug, toggleVisibility] = useToggleVisibility();
  const params = useParams();
  const project_id = params?.project?.[0];

  const [bugs] = useGetBugs(project_id);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          display: "flex",
          padding: "1rem 1.1rem",
          width: "80%",
          margin: "20px auto",
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
          <BugForm toggleModal={toggleVisibility} />
        </Modal>
      </div>
      <WrapperTable>
        <Table data={bugs} />
      </WrapperTable>
    </div>
  );
}

const Title = styled.h2`
  font-size: 1.5rem;
`;

const WrapperTable = styled.div`
  height: 750px;
  padding-left: 20px;
  margin: 20px 0 auto;
  width: 80%;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccc;
  }
  &::-webkit-scrollbar-button {
    background-color: #ccc;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: ${primary};
  }
`;
