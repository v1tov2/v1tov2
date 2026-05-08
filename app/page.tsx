import {
  ExampleWorkflows,
  FinalCta,
  Hero,
  Packages,
  PainPoints,
  Process,
  SourcexpressProof,
  V1V2Comparison,
  WhatWeBuild,
} from "@/components/home-v2";
import { SiteFooter } from "@/components/shared/footer";
import { SiteNavbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNavbar />
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
      <SiteFooter />
    </div>
  );
}
