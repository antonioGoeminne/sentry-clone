"use client";
import React from "react";
import * as Av from "@radix-ui/react-avatar";
import styled from "styled-components";
import { primary } from "./colors";

interface avatarProps {
  image: string;
  alt: string;
  fallback?: string;
}

export const Avatar = ({
  image = "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
  alt = "Colm Tuite",
  fallback,
}: avatarProps) => {
  return (
    <Root>
      <Image src={image} alt={alt} />
      <Fallback delayMs={600}>{fallback || alt?.at(0)?.toUpperCase()}</Fallback>
    </Root>
  );
};

const Root = styled(Av.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: var(--black-a3);
`;

const Image = styled(Av.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const Fallback = styled(Av.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primary};
  color: white;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
`;
