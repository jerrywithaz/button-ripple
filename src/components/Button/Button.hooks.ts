import { RefObject, useState, useCallback } from "react";
import { getMouseEventLocation } from "./Button.utils";
import {
  ButtonRipple,
  UseButtonRippleAnimationReturnType
} from "./Button.types";

/**
 * A hook for creating a ripple effect for html
 * buttons whenever any mouse event is triggered.
 */
export function useButtonRippleAnimation(
  button: RefObject<HTMLButtonElement>
): UseButtonRippleAnimationReturnType {
  const [ripple, setRipple] = useState<ButtonRipple | null>(null);
  const createRipple = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const key = new Date().getTime().toString();
      const { x, y } = getMouseEventLocation(e, button.current);

      setRipple({ x, y, key });
    },
    [button]
  );

  return [ripple, createRipple];
}
