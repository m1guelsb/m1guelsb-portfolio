"use client";
import { ReactSVG } from "react-svg";
import { icons } from "@/assets/icons";
import { tv, VariantProps } from "tailwind-variants";

export type IconsList = keyof typeof icons;

interface IconProps {
  iconName: IconsList;
  variants?: VariantProps<typeof iconStyles>;
}

export const Icon = ({ iconName, variants, ...props }: IconProps) => {
  return (
    <div className={`${iconStyles(variants)}`} {...props}>
      <ReactSVG src={icons[iconName].src} />
    </div>
  );
};

const iconStyles = tv({
  base: "h-16 flex items-center",
  variants: {
    size: {
      sm: "h-[2rem] w-[2rem] [&_svg]:h-[2rem] [&_svg]:w-[2rem]",
      md: "h-[3.5rem] w-[3.5rem] [&_svg]:h-[3.5rem] [&_svg]:w-[3.5rem]",
      lg: "h-[6rem] w-[6rem] [&_svg]:h-[6rem] [&_svg]:w-[6rem]",
    },
    customColor: {
      white: "[&_path]:fill-[#ffffff]",
    },
  },

  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});
