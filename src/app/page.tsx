import VendorCard from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-2xl m-6 bg-slate-50  p-24">
      <h1 className="uppercase font-bold text-black-900 bg-blend-darken text-[5vw] text-center m-5">Buy Here get it at home</h1>
      <div className="flex items-center justify-between flex-nowrap">
      <VendorCard/>
      <VendorCard/>
      <VendorCard/>
      <VendorCard/>
      </div>
    </main>
  );
}
