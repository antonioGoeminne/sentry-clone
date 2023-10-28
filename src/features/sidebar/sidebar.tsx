"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  primary,
  primaryDarker,
  primaryLighter,
  secondary,
  secondaryDarker,
} from "@ui/colors";
import styled from "styled-components";
import { usePathname, useRouter } from "next/navigation";

const menuOptions = [
  { label: "Milestones", icon: "ri:flag-2-line", link: "/milestones" },
  { label: "Bugs", icon: "ri:error-warning-line", link: "/bugs" },
  { label: "Team", icon: "ri:group-line", link: "/team" },
];

export const Sidebar = () => {
  const [open, setOpen] = useState<Boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Wrapper transition={{ duration: 0.18 }} layout $open={open}>
      <div style={{ background: primaryDarker, padding: ".8rem 1.1rem" }}>
        <Flex $justifyContent="space-between">
          <Flex style={{ gap: 5 }} $justifyContent="space-between">
            <svg
              onClick={() => setOpen(!open)}
              xmlns="http://www.w3.org/2000/svg"
              width="1.4em"
              height="1.4em"
              viewBox="0 0 24 24"
            >
              <path
                fill={secondary}
                d="M10.562 4.148a7.03 7.03 0 0 1 2.876 0l1.683-1.684l1.414 1.415l-1.05 1.05a7.031 7.031 0 0 1 2.841 3.07H21v2h-2.07c.046.327.07.661.07 1v1h2v2h-2v1c0 .34-.024.674-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7.06 7.06 0 0 1 5 15v-1H3v-2h2v-1c0-.339.024-.673.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.07l-1.05-1.05L8.88 2.464l1.683 1.684ZM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5Zm-3 8h6v2H9v-2Zm0-4h6v2H9v-2Z"
              />
            </svg>
            {open ? (
              <Title
                onClick={() => router.push("/")}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
              >
                Bug tracker
              </Title>
            ) : null}
          </Flex>
          {open ? (
            <svg
              onClick={() => setOpen(!open)}
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#9F9F9F"
                d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
              />
            </svg>
          ) : null}
        </Flex>
      </div>
      <Menu>
        {menuOptions.map((option, index) => {
          const isActive = option.link === pathname;
          return (
            <Flex
              $isActive={isActive}
              onClick={() => router.push(option.link)}
              $hover
              style={{ gap: 6 }}
              key={index}
            >
              <Icon
                style={{ paddingLeft: ".1rem" }}
                color={"inherit"}
                icon={option.icon}
              />
              {open ? (
                <MenuItem
                  $isActive={isActive}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  {option.label}
                </MenuItem>
              ) : null}
            </Flex>
          );
        })}
      </Menu>
      <div style={{ position: "absolute", bottom: 120, width: "80%" }}>
        <Divider $open={open} />
      </div>
      <div
        style={{
          position: "absolute",
          color: "white",
          bottom: 30,
          margin: 20,
          width: "100%",
          maxWidth: open ? "230px" : "80px",
        }}
      >
        <Flex
          $isActive={pathname === "/settings"}
          onClick={() => router.push("settings")}
          $hover
          style={{ gap: 6 }}
        >
          <Icon color={"inherit"} icon="ri:settings-4-line" />
          {open ? (
            <MenuItem
              $isActive={pathname === "/settings"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              Settings
            </MenuItem>
          ) : null}
        </Flex>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)<{ $open: boolean }>`
  max-width: ${(props) => (props.$open ? "250px" : "100px")};
  position: relative;
  background-color: ${primary};
  height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 20px;
  user-select: none;
  color: ${secondary};
`;

const Flex = styled.div<{
  $justifyContent?: string;
  $hover?: boolean;
  $isActive?: boolean;
}>`
  display: flex;
  min-height: 36px;
  align-items: center;
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  color: ${(props) => (props.$isActive ? "white" : primaryLighter)};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${(props) =>
    props.$hover && props.$isActive && secondaryDarker};
  &:hover {
    background-color: ${(props) => props.$hover && secondaryDarker};
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    cursor: pointer;
    color: white;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 80px 20px;
  margin-right: 0;
  gap: 20px;
`;
const MenuItem = styled(motion.li)<{ $isActive?: boolean }>`
  font-size: 1em;
  list-style: none;
  padding: 0.5rem 0.2rem;
  color: ${(props) => (props.$isActive ? "white" : primaryLighter)};
  ${Flex}:hover & {
    color: white;
  }
`;

const Divider = styled.div<{ $open: boolean }>`
  width: ${(props) => (props.$open ? "100%" : "80%")};
  height: 1px;
  background-color: ${primaryLighter};
  margin: 20px;
`;
