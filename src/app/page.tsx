import { HeroBrand } from "@/components/home/HeroBrand";
import { MissionBlock } from "@/components/home/MissionBlock";
import { AccessGapReport } from "@/components/home/AccessGapReport";
import { InventorJourney } from "@/components/home/InventorJourney";
import { BlueprintPathway } from "@/components/home/BlueprintPathway";
import { CommunityUpdates } from "@/components/home/CommunityUpdates";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { SupportMissionSection } from "@/components/home/SupportMissionSection";
import { GetInvolvedBand } from "@/components/home/GetInvolvedBand";

export default function HomePage() {
  return (
    <>
      <HeroBrand />
      <MissionBlock />
      <AccessGapReport />
      <InventorJourney />
      <BlueprintPathway />
      <GetInvolvedBand />
      <CommunityUpdates />
      <CredibilitySection />
      <HomeFinalCta />
      <SupportMissionSection />
    </>
  );
}
