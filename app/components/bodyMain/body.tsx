import ArrowDown from "../iconAndSvg/arrowDown";
import BodyButton from "./bodyButton";
import MessageIcon from "../iconAndSvg/messageIcon";

export default function Body() {
  return (
    <section className="flex flex-col items-center justify-between gap-3 md:gap-3 lg:gap-6 min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-120px)] lg:min-h-screen px-4 md:px-8 lg:px-0">
      <div className="flex flex-col items-center gap-3 md:gap-3 lg:gap-6 mt-4 md:mt-2 lg:mt-0">
        {/* Badge */}
        <div className="bg-background-white flex flex-row gap-2 justify-between items-center shadow-navbar text-primary py-[4px] px-[8px] rounded-full w-fit">
          <MessageIcon />
          <p className="font-medium text-[14px] md:text-[16px] leading-[120%] tracking-[-0.02em]">
            #1 iMessage Automation Tool
          </p>
        </div>

        {/* Heading */}
        <h1 className="font-bold text-[28px] sm:text-[40px] md:text-[64px] lg:text-[64px] text-center leading-[110%] md:leading-[120%] tracking-[-0.02em] md:w-[80%] lg:w-[50%] max-w-[80vw] md:max-w-full">
          <span className="text-primary">iMessage</span> Automation for Teams
          and AI Workflows.
        </h1>

        {/* description */}
        <p className="text-[13px] sm:text-[16px] md:text-[18px] text-center leading-[120%] md:leading-[130%] tracking-[-0.02em] max-w-[80vw] md:max-w-[600px] lg:max-w-full">
          Coup lets you, your team, or AI workflows send iMessages directly from{" "}
          <span className="hidden lg:inline">
            <br />
          </span>
          your phone number, running securely on your Mac or Mac Mini.
        </p>

        {/* button */}
        <div className="mt-2 md:mt-2 lg:mt-4 lg:mb-[314.94px]">
          <BodyButton />
        </div>
      </div>

      {/* scroll */}
      <div className="flex flex-col items-center font-medium mt-auto gap-2 mb-6 md:mb-6 lg:mb-16">
        <p className="text-[14px] md:text-[16px]">Scroll to learn more</p>
        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </section>
  );
}
