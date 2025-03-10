import { Footer, Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[480px] h-[655px] p-[32px] rounded-[8px] bg-[#FFF]">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}
