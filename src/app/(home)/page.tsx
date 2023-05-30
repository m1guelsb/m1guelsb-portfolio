import { tv } from "tailwind-variants";
import { Icon } from "@/components/display";
import { Button } from "@/components/form";

export default function Home() {
  return (
    <div className={CardWrapper()}>
      <div className={TopItems()}>
        <div className={TitlesWrapper()}>
          <h1 className={Title1()}>Miguel S. Barbosa</h1>
          <h2 className={Title2()}>Fullstack developer</h2>
        </div>

        <div className={LogoWrapper()}>
          <Icon iconName="logo" variants={{ size: "lg" }} />
        </div>
      </div>

      <div className={BottomItems()}>
        <div className={Contacts()}>
          <Icon iconName="linkedin" />
          <Icon iconName="github" />
        </div>
        <div>
          <Button>
            Projetos
            <Icon iconName="chevronRight" variants={{ customColor: "white" }} />
          </Button>
        </div>
      </div>
    </div>
  );
}

const {
  CardWrapper,
  TopItems,
  TitlesWrapper,
  Title1,
  Title2,
  LogoWrapper,
  BottomItems,
  Contacts,
} = tv({
  slots: {
    CardWrapper:
      "z-10 p-[3rem] pb-[2rem] flex flex-col gap-[6rem] bg-background-1 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-2 border-bg-gradient-1 rounded-3xl",

    TopItems: "flex gap-[15rem] justify-between",
    TitlesWrapper:
      "flex flex-col p-[0.75] backdrop-filter backdrop-blur-3xl rounded-lg",
    Title1: "text-primary text-4xl font-bold",
    Title2: "text-text1 text-3xl font-bold",
    LogoWrapper: "h-[6.25rem] w-[6.25rem]",

    BottomItems: "flex justify-between",
    Contacts:
      "flex items-center gap-[1rem] p-[0.75rem] backdrop-filter backdrop-blur-3xl rounded-lg",
  },
})();
