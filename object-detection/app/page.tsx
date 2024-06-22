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
      <div className="max-w-[832px] mt-4 pl-12 pr-16 pt-9 pb-10">
        <h2 className="font-medium leading-6 text-xl mb-2">System check</h2>
        <p className="font-normal leading-5 text-sm tracking-[.24px] mb-[30px] text-[#4A4A68]">
          We utilize your camera image to ensure fairness for all participants,
          and we also employ both your camera and microphone for a video
          questions where you will be prompted to record a response using your
          camera or webcam, so it's essential to verify that your camera and
          microphone are functioning correctly and that you have a stable
          internet connection. To do this, please position yourself in front of
          your camera, ensuring that your entire face is clearly visible on the
          screen. This includes your forehead, eyes, ears, nose, and lips. You
          can initiate a 5-second recording of yourself by clicking the button
          below.
        </p>
        <div className="mb-10">
          <div className="bg-[#F5F3FF] w-[91px] h=[71px] rounded-[10px] px-6 pt-[9px] pb-[12px] relative">
            <div className="bg-[#755AE2] w-4 h-4 rounded-[30px] absolute top-[2px] right-[3px]"></div>
            <Image
              // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={webcam}
              alt="Webcam"
              className="m-auto mb-1"
              // width={180}
              // height={37}
              // priority
            />
            <div className="font-normal leading-3 text-[10px] tracking-[.24px]">Webcam</div>
          </div>
        </div>
      </div>
    </main>
  );
}
