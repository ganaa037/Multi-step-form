import { Input } from "../components";

export const Step1 = ({ onclick, count }) => {
  return (
    <form onClick={onclick} count={count} className="flex flex-col gap-3">
      <Input text={"First name"} type={"text"} placeholder={"Fitst name"} />
      <Input text={"Last name"} type={"text"} placeholder={"Last name"} />
      <Input text={"Username"} type={"text"} placeholder={"Username"} />
    </form>
  );
};
