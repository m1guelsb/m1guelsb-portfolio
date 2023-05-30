"use client";
import { NavItem } from "./core";
import { Icon } from "@/components/display";

export const Nav = () => {
  return (
    <nav className="z-10 flex p-[0.5rem] bg-primary rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <NavItem
        icon={<Icon iconName="home" variants={{ size: "sm" }} />}
        href="/"
      />
      <NavItem
        icon={<Icon iconName="rocket" variants={{ size: "sm" }} />}
        href="/projects"
      />
    </nav>
  );
};
