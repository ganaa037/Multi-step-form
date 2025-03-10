import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
export const Footer = () => {
  return (
    <div className="flex gap-2">
      <button className="text-[16px] font-medium leading-[24px] text-[#202124] flex py-[10px] px-[12px] bg-[#FFF] border-[#CBD5E1] border rounded-[6px] w-[128px] justify-center">
        <FiChevronLeft className="size-[24px]" />
        Back
      </button>
      <button className="text-[16px] font-medium text-[#FFF] leading-[24px] bg-black py-[10px] px-[12px] w-[280px] rounded-[6px] flex justify-center ">
        Continue 2/3
        <FiChevronRight className="size-6" />
      </button>
    </div>
  );
};
