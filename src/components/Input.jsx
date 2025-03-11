export const Input = ({ text, type }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-[14px] font-semibold">
        {text}
        <span className="text-[#E14942] text-[14px] font-semibold">*</span>
      </p>
      <input
        type={type}
        className="flex p-3 rounded-[8px] border border-[#0CA5E9] w-full  text-black"
        placeholder="Placeholder"
      />
    </div>
  );
};
