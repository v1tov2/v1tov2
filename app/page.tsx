import {
  ExampleWorkflows,
  FinalCta,
  Footer,
  Hero,
  Navbar,
  Packages,
  PainPoints,
  Process,
  SourcexpressProof,
  V1V2Comparison,
  WhatWeBuild,
} from "@/components/home-v2";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <V1V2Comparison />
        <PainPoints />
        <WhatWeBuild />
        <ExampleWorkflows />
        <Packages />
        <SourcexpressProof />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
