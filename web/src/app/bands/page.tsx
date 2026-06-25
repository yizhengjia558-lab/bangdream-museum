import { HeroCinematicBackground } from "@/components/effects/CinematicBackground";
import { BandsPageView } from "@/components/bands/BandsPageView";

export default function BandsPage() {
  return (
    <div className="museum-page relative min-h-screen pb-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <HeroCinematicBackground />
      </div>
      <BandsPageView />
    </div>
  );
}
