"use client";
import { MiddleTab } from "@features/projects";
import { Sidebar } from "@features/sidebar";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MiddleTab />
      </div>
    </main>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;
