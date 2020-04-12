import React, { useRef, FunctionComponent } from "react";
import { useButtonRippleAnimation } from "./Button.hooks";
import { ButtonProps } from "./Button.types";
import * as Styled from "./Button.style";
import ButtonRipple from "./components/ButtonRipple";

const Button: FunctionComponent<ButtonProps> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripple, createRipple] = useButtonRippleAnimation(buttonRef);

  return (
    <Styled.Button className="button" ref={buttonRef} onMouseUp={createRipple}>
      <Styled.ButtonText className="button-text">Button</Styled.ButtonText>
      <ButtonRipple ripple={ripple} />
    </Styled.Button>
  );
};

export default Button;
