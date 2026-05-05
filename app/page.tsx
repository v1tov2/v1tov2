import {
  FinalCTA,
  Hero,
  HowItWorks,
  SiteHeader,
  WhatV1V2Means,
  WhatWeDo,
  WhoItsFor,
  WhyV1toV2,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhatV1V2Means />
        <WhoItsFor />
        <WhatWeDo />
        <WhyV1toV2 />
        <HowItWorks />
        <FinalCTA />
      </main>
    </div>
  );
}
