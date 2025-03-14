"use client";
import { Footer, Header, Step1, Step2 } from "@/components";
import { Step3 } from "@/steps/Step3";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(1);
  const CurrentStep = [Step1, Step2, Step3][count];
  const stepCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] bg-[#FFF] flex flex-col justify-between ">
        <div className="flex flex-col gap-7">
          <Header />
          <CurrentStep></CurrentStep>
        </div>

        <Footer onClick={stepCount} count={count + 1} />
      </div>
    </div>
  );
}
