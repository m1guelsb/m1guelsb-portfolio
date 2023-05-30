import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "px-4 gap-2 py-1.5 rounded-full hover:opacity-90 flex items-center text-base",
  variants: {
    intent: {
      primary: "bg-primary text-white text-[#ffffff]",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: VariantProps<typeof buttonStyles>;
}

export const Button = ({ variants, ...props }: ButtonProps) => {
  return <button {...props} className={buttonStyles(variants)} />;
};
