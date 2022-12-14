import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

// https://freeicons.io/icon-list/iconly-essential-icons

const StyledSVGIcon = styled(ReactSVG)`
  svg {
    fill: black;
    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `}
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

const Icon = props => {
  return (
    <StyledSVGIcon
      src={`/icons/${props.name}.svg`}
      color={props.color}
      size={props.size}
      transform={props.transform}
    />
  );
};

export default Icon;
