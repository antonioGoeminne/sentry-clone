"use client";
import { primaryLighter2 } from "@ui/colors";
import styled from "styled-components";
import { Searcher } from "./Searcher";
import { useParams } from "next/navigation";
import { useGetAllProjects } from "../api/use-projects";
import { Project } from "../types";
import Link from "next/link";

export const MiddleTab = () => {
  const params = useParams();
  const currentParam = params?.project?.[0];
  const [projects] = useGetAllProjects();

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
        <Link href={`/bugs/allProjects`}>
          <MenuItem $project={"allProjects"} $link={currentParam}>
            <p>All Projects</p>
          </MenuItem>
        </Link>
        {(projects || []).map((project: Project) => (
          <Link href={`/bugs/${project.id}`}>
            <MenuItem
              $project={project.id}
              $link={Number(currentParam)}
              key={project.id}
            >
              <p>{project.name}</p>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${primaryLighter2};
  height: 100vh;
  min-width: 300px;
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

const MenuItem = styled.li<{
  $link?: Number | String;
  $project?: Number | String;
}>`
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
