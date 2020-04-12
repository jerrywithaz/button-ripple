import React, { FunctionComponent } from "react";
import {
  BUTTON_RIPPLE_DURATION,
  BUTTON_RIPPLE_WIDTH,
  BUTTON_RIPPLE_HEIGHT
} from "./ButtonRipple.constants";
import { ButtonRippleProps } from "./ButtonRipple.types";

import * as Styled from "./ButtonRipple.style";

const ButtonRipple: FunctionComponent<ButtonRippleProps> = ({ ripple }) => {
  if (!ripple) return null;

  const { key, x, y } = ripple;

  const style = {
    top: `${y - BUTTON_RIPPLE_HEIGHT / 2}px`,
    left: `${x - BUTTON_RIPPLE_WIDTH / 2}px`,
    width: `${BUTTON_RIPPLE_WIDTH}px`,
    height: `${BUTTON_RIPPLE_HEIGHT}px`
  };

  return (
    <Styled.ButtonRipple
      key={key}
      className="button-ripple"
      duration={BUTTON_RIPPLE_DURATION}
      style={style}
    />
  );
};

export default ButtonRipple;
