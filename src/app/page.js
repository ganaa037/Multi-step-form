import { Footer, Header, Input } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] bg-[#FFF] flex flex-col justify-between">
        <div className="flex flex-col gap-7">
          <Header></Header>
          <div className="flex flex-col gap-3">
            <Input text={"Email"} type={"email"}></Input>
            <Input text={"Phone number"} type={"number"}></Input>
            <Input text={"Password"} type={"password"}></Input>
            <Input text={"Confirm password"} type={"password"}></Input>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
