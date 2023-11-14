"use client";
import { SignIn } from "@clerk/nextjs";
import styled from "styled-components";

export default function Page() {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  margin: 40px;
  place-content: center;
`;
