import { MouseEventLocation } from "./Button.types";

/**
 * Gets x and y coordinates of the mouse event relative to the button.
 */
export function getMouseEventLocation(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  button: HTMLButtonElement | null
): MouseEventLocation {
  if (button) {
    const { pageX, pageY } = e;
    const { left: buttonLeft, top: buttonTop } = button.getBoundingClientRect();

    const x = pageX - buttonLeft;
    const y = pageY - buttonTop;

    return { x, y };
  }
  return { x: 0, y: 0 };
}
