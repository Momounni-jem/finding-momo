import type { Landmark } from "@/data/landmarks";
import { btnSmall } from "@/components/GraphicSkyBackground";

type GameHeaderProps = {
  landmark: Landmark;
  currentIndex: number;
  total: number;
  isLoading: boolean;
  onBackToHome: () => void;
};

export default function GameHeader({
  landmark,
  currentIndex,
  total,
  isLoading,
  onBackToHome,
}: GameHeaderProps) {
  return (
    <div className="pointer-events-auto max-w-lg border-2 border-black bg-white/95 px-4 py-3 shadow-[4px_4px_0_0_#000] md:px-5 md:py-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-black md:text-xs">
            Finding Momo
          </p>
          <p className="mt-1 text-sm font-black uppercase tracking-tight text-black md:text-base">
            Momo {currentIndex + 1} / {total}
          </p>
          <h2 className="mt-1 text-base font-black uppercase leading-tight text-black md:text-lg">
            {landmark.name}
          </h2>
          <p className="text-[11px] font-bold uppercase tracking-wide text-neutral-500">
            {landmark.city}, {landmark.country}
          </p>
        </div>
        <button type="button" onClick={onBackToHome} className={btnSmall}>
          Home
        </button>
      </div>

      <p className="mt-2 border-t-2 border-black pt-2 text-[11px] font-bold uppercase tracking-wide text-neutral-600">
        Look around the landmark and find Momo.
      </p>

      {isLoading && (
        <p className="mt-2 animate-pulse text-[11px] font-bold uppercase tracking-wide text-black">
          Loading Street View…
        </p>
      )}
    </div>
  );
}
