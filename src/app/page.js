import { Footer, Header, Input, Step1, Step2 } from "@/components";
import { Step3 } from "@/components/Step3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] bg-[#FFF] flex flex-col justify-between">
        <div className="flex flex-col gap-7">
          <Header></Header>

          <Step3></Step3>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
