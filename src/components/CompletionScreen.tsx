import {
  btnPrimary,
  btnSecondary,
  btnSecondaryCyan,
  GraphicSkyBackground,
} from "@/components/GraphicSkyBackground";

type CompletionScreenProps = {
  onStartOver: () => void;
};

export default function CompletionScreen({ onStartOver }: CompletionScreenProps) {
  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GraphicSkyBackground />
      </div>

      <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg border-2 border-black bg-white/95 p-8 shadow-[8px_8px_0_0_#000] md:p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/momo5.png"
            alt="Momo"
            className="mx-auto mb-6 h-20 w-20 border-2 border-black object-cover"
          />

          <h2 className="text-center text-[clamp(2rem,8vw,3.5rem)] font-black uppercase leading-[0.9] tracking-tight text-black">
            All Momos
            <br />
            Found
          </h2>

          <p className="mt-4 text-center text-base font-medium leading-relaxed text-neutral-700 md:text-lg">
            Momo travelled the world and came home safely.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <button type="button" onClick={onStartOver} className={`w-full ${btnPrimary}`}>
              Start over
            </button>

            <a
              href="https://buymeacoffee.com/findingmomo"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full ${btnSecondary}`}
            >
              Buy Momo a sweet potato 🍠
            </a>

            <a
              href="https://www.youtube.com/@welcometojemsworld"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full ${btnSecondaryCyan}`}
            >
              Watch Momo on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
