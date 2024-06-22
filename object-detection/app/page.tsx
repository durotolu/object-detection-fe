import Image from "next/image";
import logo from "./icons/logo.svg";
import clock from "./icons/clock.svg";
import eye from "./icons/eye.svg";
import webcam from "./icons/webcam.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="flex w-full justify-between pt-4 pb-2 px-14 bg-[#FFFFFF]">
        <div className="flex">
          {/* <div> */}
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={logo}
            alt="Logo"
            // width={180}
            // height={37}
            // priority
          />
          {/* </div> */}
          <div className="ml-3 m-auto">
            <h1 className="font-dm-sans text-[20px] font-medium leading-[26.04px] tracking-[-0.24px] text-left">
              Frontend developer
            </h1>
            <span className="font-dm-sans text-[14px] font-normal leading-[18.23px] tracking-[-0.24px] text-left text-[#8C8CA1]">
              Skill assessment test
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-lg bg-[#ECE8FF] flex p-3 items-center text-[#755AE2] font-['DM_Sans']">
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              className="mr-[10px]"
              src={clock}
              alt="Clock"
              width={24}
              height={24}
              // priority
            />
            <time className="mr-[4px] font-bold text-lg leading-6">29:10</time>
            <span className="font-medium text-sm leading-3">time left</span>
          </div>
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={eye}
            alt="Check"
            className="ml-[10px]"
            // width={180}
            // height={37}
            // priority
          />
        </div>
      </header>
    </main>
  );
}
