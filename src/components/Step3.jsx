import { Input } from ".";

export const Step3 = () => {
  return (
    <form className="flex flex-col gap-7 ">
      <Input text={"Date"} type={"date"} />
      <Input text={"Profile image"} type={"file h-[180px]"}></Input>
    </form>
  );
};
