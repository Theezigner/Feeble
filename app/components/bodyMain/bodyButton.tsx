import Image from "next/image";
export default function BodyButton() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 md:mt-6 font-medium text-[14px] sm:text-[16px] md:text-[18px]">
      <button className="bg-primary py-2.5 px-5 md:py-3 md:px-6 rounded-full text-white cursor-pointer w-full sm:w-auto">
        Get Started
      </button>
      <button className="flex flex-row items-center gap-2 md:gap-3 py-2.5 px-5 md:py-3 md:px-6 rounded-full border-[0.7px] border-border-mac cursor-pointer w-full sm:w-auto justify-center">
        <Image
          src={"/assets/apple.svg"}
          alt="apple"
          width={16}
          height={20}
          className="w-[16px] md:w-[18.43px] h-auto"
        />
        <div className="w-px h-[20px] md:h-[22px] bg-border-mac"></div>
        <p>Download the Mac app</p>
      </button>
    </div>
  );
}
