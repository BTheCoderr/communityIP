import { HeroBrand } from "@/components/home/HeroBrand";
import { MissionBlock } from "@/components/home/MissionBlock";
import { GetInvolvedBand } from "@/components/home/GetInvolvedBand";
import { ResearchTeaser } from "@/components/home/ResearchTeaser";
import { CommunityUpdates } from "@/components/home/CommunityUpdates";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { SupportMissionSection } from "@/components/home/SupportMissionSection";

export default function HomePage() {
  return (
    <>
      <HeroBrand />
      <MissionBlock />
      <GetInvolvedBand />
      <ResearchTeaser />
      <CommunityUpdates />
      <SupportMissionSection />
      <HomeFinalCta />
    </>
  );
}
