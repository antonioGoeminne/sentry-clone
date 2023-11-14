"use client";
import { errorColor } from "@ui/colors";
import { Button } from "@ui/Button";
import styled from "styled-components";
import { SignOutButton } from "@clerk/nextjs";

export default function Page() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <H2>Profile settings</H2>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Miguel</p>
            <SignOutButton>
              <Button
                styles={{
                  ["background-color"]: errorColor,
                  color: "white",
                  width: 100,
                  height: 30,
                }}
              >
                Cerrar sesión
              </Button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </div>
  );
}

const H2 = styled.h2`
  font-size: 2rem;
`;
