import { Input } from ".";
export const Step2 = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input text={"Email"} type={"email"} />
      <Input text={"Phone number"} type={"number"} />
      <Input text={"Password"} type={"password"} />
      <Input text={"Confirm password"} type={"password"} />
    </form>
  );
};
