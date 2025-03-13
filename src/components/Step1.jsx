import { Input } from ".";

export const Step1 = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input text={"First name"} type={"text"} />
      <Input text={"Last name"} type={"text"} />
      <Input text={"Username"} type={"text"} />
    </form>
  );
};
