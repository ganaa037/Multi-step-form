import { Input } from "../components";

export const Step3 = () => {
  return (
    <form className="flex flex-col gap-7 ">
      <Input text={"Date"} type={"date"} />
      <Input
        className={" h-[180px] w-full bg-gray-500 flex"}
        text={"Profile image"}
        type={"file"}
        placeholder={"fjgj"}
      ></Input>
    </form>
  );
};
