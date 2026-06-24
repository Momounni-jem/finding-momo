import {
  btnPrimary,
  btnSecondary,
  GraphicStickerDecor,
} from "@/components/GraphicSkyBackground";

type FoundPopupProps = {
  image: string;
  foundText: string;
  isLast: boolean;
  onNext: () => void;
  onBackToHome: () => void;
};

export default function FoundPopup({
  image,
  foundText,
  isLast,
  onNext,
  onBackToHome,
}: FoundPopupProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="relative w-full max-w-sm">
        <GraphicStickerDecor />

        <div
          className="relative animate-[pop-in_0.3s_ease-out] border-2 border-black bg-white p-6 shadow-[6px_6px_0_0_#000] md:p-8"
          role="dialog"
          aria-labelledby="found-title"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt="Momo"
            className="mx-auto mb-4 h-20 w-20 border-2 border-black object-cover"
          />

          <h2
            id="found-title"
            className="mb-2 text-center text-2xl font-black uppercase tracking-tight text-black md:text-3xl"
          >
            Found Momo
          </h2>

          <p className="mb-6 text-center text-sm font-medium leading-relaxed text-neutral-700 md:text-base">
            {foundText}
          </p>

          <div className="flex flex-col gap-3">
            <button type="button" onClick={onNext} className={`w-full ${btnPrimary}`}>
              {isLast ? "Finish" : "Next Momo"}
            </button>
            <button
              type="button"
              onClick={onBackToHome}
              className={`w-full ${btnSecondary}`}
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
