import { Input } from "../components";

export const Step3 = ({ onClick, count }) => {
  return (
    <form onClick={onClick} count={count} className="flex flex-col gap-7 ">
      <Input text={"Date"} type={"date"} />
      <Input
        className={" h-[180px] w-full bg-gray-500 flex"}
        text={"Profile image"}
        type={"file"}
      ></Input>
    </form>
  );
};
