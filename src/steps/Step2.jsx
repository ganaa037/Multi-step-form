import { Input } from "../components";
export const Step2 = () => {
  return (
    <form className="flex flex-col gap-3">
      <Input text={"Email"} type={"email"} placeholder={"Email"} />
      <Input
        text={"Phone number"}
        type={"number"}
        placeholder={"Phone number"}
      />
      <Input text={"Password"} type={"password"} placeholder={"Password"} />
      <Input
        text={"Confirm password"}
        type={"password"}
        placeholder={"Confirm password"}
      />
    </form>
  );
};
