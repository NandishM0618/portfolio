import Screen from "./components/Screen";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_3px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_3px,transparent_1px)] bg-[size:200px_200px]"></div>
      <div className="relative">
        <Screen />
      </div>
    </div>
  );
}
