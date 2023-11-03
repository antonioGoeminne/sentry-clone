import tinycolor from "tinycolor2";
import React from "react";
import styled from "styled-components";
import { darkenRate, lightenRate } from "./colors";

interface buttonTypes {
  styles?: any;
  children?: any;
  buttonProps?: any;
}

export const Button = ({ styles, children, ...buttonProps }: buttonTypes) => {
  return (
    <Btn {...buttonProps} $styles={styles}>
      {children}
    </Btn>
  );
};

const Btn = styled.button<{ $styles: String }>`
  ${(props) => ({ ...props.$styles })}
  border: none;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  border-radius: 0.5rem;
  user-select: none;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${(props) =>
      tinycolor(props.$styles?.["background-color"])
        .lighten(lightenRate)
        .toHexString()};
  }

  &:active {
    background-color: ${(props) =>
      tinycolor(props.$styles?.["background-color"])
        .darken(darkenRate)
        .toHexString()};
  }
`;
