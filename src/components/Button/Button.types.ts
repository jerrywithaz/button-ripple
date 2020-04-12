export type MouseEventLocation = {
  x: number;
  y: number;
};

export type ButtonRipple = MouseEventLocation & {
  key: string;
};

export type UseButtonRippleAnimationReturnType = [
  ButtonRipple | null,
  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
];

export type ButtonProps = {};
