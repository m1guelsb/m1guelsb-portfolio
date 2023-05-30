"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";

interface NavItemProps {
  icon: ReactNode;
  title?: string;
  href: string;
}

export const NavItem = ({ icon, title, href }: NavItemProps) => {
  const pathname = usePathname();

  let isActive = false;
  if (pathname === href) {
    isActive = true;
  }

  return (
    <Link href={href}>
      <motion.button className={Container()}>
        <div className={IconWrapper()}>
          {icon}
          {title}
        </div>
        {isActive && (
          <motion.span layoutId="shadow" className={ActiveIconShadow()} />
        )}
      </motion.button>
    </Link>
  );
};

const { Container, IconWrapper, ActiveIconShadow } = tv({
  slots: {
    Container:
      "w-[5rem] py-[0.5rem] gap-[0.5rem] relative flex flex-col items-center justify-center",
    IconWrapper: "z-10",
    ActiveIconShadow:
      "absolute inset-0 z-0 bg-primary rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20",
  },
})();
