import Image from "next/image";

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
        src={icon}
        alt={label}
        className="m-auto mb-1"
      />
      <div className="font-normal leading-3 text-[10px] tracking-[.24px]">
        {label}
      </div>
    </div>
  );
}
