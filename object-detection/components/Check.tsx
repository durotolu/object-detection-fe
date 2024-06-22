import Image from "next/image";
// import logo from "./icons/logo.svg";
// import clock from "./icons/clock.svg";
// import eye from "./icons/eye.svg";
// import webcam from "./icons/webcam.svg";
// import ObjectDetection from "../components/ObjectDetection";

export default function Check({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <div className="bg-[#F5F3FF] w-[91px] h-[71px] rounded-[10px] text-center pt-[9px] pb-[12px] relative mr-4">
      <div className="bg-[#755AE2] w-4 h-4 rounded-[30px] absolute top-[2px] right-[3px]"></div>
      <Image
        // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src={icon}
        alt={label}
        className="m-auto mb-1"
        // width={180}
        // height={37}
        // priority
      />
      <div className="font-normal leading-3 text-[10px] tracking-[.24px]">
        {label}
      </div>
    </div>
  );
}
