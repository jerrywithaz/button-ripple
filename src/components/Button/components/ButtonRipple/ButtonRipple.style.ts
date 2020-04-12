import styled, { keyframes } from "styled-components";
import { BUTTON_RIPPLE_OPACITY_DELAY } from "./ButtonRipple.constants";
import { StyledButtonRippleProps } from "./ButtonRipple.types";

const rippleScaleAnimation = keyframes`
  to {
      transform: scale(10);
  }
`;

const rippleOpacityAnimation = keyframes`
  to {
      opacity: 0;
  }
`;

const ButtonRipple = styled.span<StyledButtonRippleProps>`
  position: absolute;
  transform: scale(0);
  border-radius: 24px;
  opacity: 1;
  background-color: #000;
  animation: ${rippleScaleAnimation} ${({ duration }) => duration}ms ease-in 0ms,
    ${rippleOpacityAnimation}
      ${({ duration }) => duration - BUTTON_RIPPLE_OPACITY_DELAY}ms
      cubic-bezier(0.165, 0.84, 0.44, 1) ${BUTTON_RIPPLE_OPACITY_DELAY}ms;
`;

ButtonRipple.displayName = "Styled.ButtonRipple";

export { ButtonRipple };
