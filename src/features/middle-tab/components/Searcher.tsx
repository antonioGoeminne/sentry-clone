import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

export const Searcher = () => {
  return (
    <InputWrapper>
      <Icon style={{ cursor: "pointer" }} icon="ri:search-line" />
      <Input placeholder="Search by name or bug" />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  background-color: #ddd3df;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  padding: 0.8rem 1rem;
`;

const Input = styled.input`
  border: none;
  background-color: #ddd3df;
  outline: none;
  height: 100%;
  width: 100%;
`;
