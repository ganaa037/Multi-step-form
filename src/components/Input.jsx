export const Input = ({ text, type, className }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#334155] text-[14px] font-semibold">
        {text}
        <span className="text-[#E14942] text-[14px] font-semibold ">*</span>
      </label>
      <input
        type={type}
        className={
          "flex p-3 rounded-[8px] border border-[#0CA5E9] w-full  text-black " +
          className
        }
      ></input>
    </div>
  );
};
