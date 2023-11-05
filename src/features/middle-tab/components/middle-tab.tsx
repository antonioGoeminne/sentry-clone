"use client";
import { primaryLighter2 } from "@ui/colors";
import styled from "styled-components";
import { Searcher } from "./Searcher";
import { useParams } from "next/navigation";

export const MiddleTab = () => {
  const params = useParams();
  const project = params?.project?.[0] || "allProjects";

  return (
    <Wrapper>
      <div
        style={{
          padding: "1rem 1.1rem",
        }}
      >
        <Searcher />
      </div>
      <Title>Projects</Title>
      <Menu>
        <MenuItem $project={project} $link={"allProjects"}>
          <p>All projects</p>
          <p>34</p>
        </MenuItem>
        <MenuItem $project={project} $link={"asd"}>
          <p>All projects</p>
          <p>34</p>
        </MenuItem>
        <MenuItem $project={project} $link={"asd"}>
          <p>All projects</p>
          <p>34</p>
        </MenuItem>
        <MenuItem $project={project} $link={"asd"}>
          <p>All projects</p>
          <p>34</p>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${primaryLighter2};
  height: 100vh;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  margin-left: 10px;
  padding: 0rem 1rem;
  margin-top: 10px;
`;

const Menu = styled.ul`
  list-style: none;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MenuItem = styled.li<{ $link?: String; $project?: String }>`
  display: flex;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) =>
    props.$link === props.$project ? "white" : "inherit"};
  &: hover {
    background-color: white;
  }
`;
