import { LorKamiLogoHome } from "@/components/icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-svh">
      <div className=" flex flex-col w-full justify-center bg-inherit">
        <LorKamiLogoHome className="fill-black dark:fill-white" />
      </div>
    </div>
  );
}
