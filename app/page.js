import Image from "next/image";
import Screen from "./components/Screen";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_4px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_4px)] bg-[size:40px_40px]"></div>
      <div className="relative">
        <Screen />
      </div>
    </div>

  );
}
