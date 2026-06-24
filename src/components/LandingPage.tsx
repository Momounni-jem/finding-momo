type LandingPageProps = {
  onStart: () => void;
};

const flyingMomos = [
  {
    src: "/momo1.png",
    top: "14%",
    left: "72%",
    size: 48,
    opacity: 0.32,
    rotate: -10,
    delay: "0s",
    duration: "9s",
  },
  {
    src: "/momo2.png",
    top: "8%",
    left: "4%",
    size: 40,
    opacity: 0.28,
    rotate: 14,
    delay: "1.8s",
    duration: "10s",
  },
  {
    src: "/momo3.png",
    top: "72%",
    left: "6%",
    size: 44,
    opacity: 0.3,
    rotate: -16,
    delay: "0.6s",
    duration: "8.5s",
  },
  {
    src: "/momo4.png",
    top: "48%",
    left: "88%",
    size: 52,
    opacity: 0.26,
    rotate: 8,
    delay: "2.4s",
    duration: "11s",
  },
  {
    src: "/momo5.png",
    top: "82%",
    left: "58%",
    size: 36,
    opacity: 0.24,
    rotate: -6,
    delay: "3.2s",
    duration: "9.5s",
  },
];

function SkyBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[#d6e6f4]"
      aria-hidden="true"
    />
  );
}

function CloudLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-12 top-[10%] h-20 w-56 rounded-full bg-white/50 blur-[1px]" />
      <div className="absolute left-[8%] top-[14%] h-14 w-36 rounded-full bg-white/40 blur-[1px]" />
      <div className="absolute -right-16 top-[22%] h-24 w-64 rounded-full bg-white/45 blur-[1px]" />
      <div className="absolute right-[6%] top-[28%] h-16 w-44 rounded-full bg-white/35 blur-[1px]" />
      <div className="absolute -left-8 bottom-[24%] h-20 w-52 rounded-full bg-white/40 blur-[1px]" />
      <div className="absolute bottom-[18%] left-[42%] h-14 w-40 rounded-full bg-white/30 blur-[1px]" />
      <div className="absolute -right-10 bottom-[10%] h-24 w-60 rounded-full bg-white/45 blur-[1px]" />
    </div>
  );
}

function FlyingMomos() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {flyingMomos.map((momo) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={momo.src}
          src={momo.src}
          alt=""
          className="absolute landing-momo-drift"
          style={{
            top: momo.top,
            left: momo.left,
            width: momo.size,
            height: momo.size,
            opacity: momo.opacity,
            ["--momo-rotate" as string]: `${momo.rotate}deg`,
            animationDuration: momo.duration,
            animationDelay: momo.delay,
          }}
        />
      ))}
    </div>
  );
}

function DecorativeShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Lime blob — top right */}
      <div className="absolute -right-16 top-24 h-48 w-48 rotate-12 rounded-[45%_55%_40%_60%] bg-lime-400 md:h-64 md:w-64" />

      {/* Orange pill — left edge */}
      <div className="absolute -left-20 top-[38%] h-24 w-72 -rotate-6 rounded-full bg-orange-400" />

      {/* Cyan circle with eyes */}
      <div className="absolute right-[8%] top-[42%] flex h-28 w-28 items-center justify-center rounded-full bg-cyan-400 md:h-36 md:w-36">
        <div className="flex gap-4">
          <div className="h-4 w-4 rounded-full bg-white">
            <div className="ml-1.5 mt-1 h-2 w-2 rounded-full bg-black" />
          </div>
          <div className="h-4 w-4 rounded-full bg-white">
            <div className="ml-1.5 mt-1 h-2 w-2 rounded-full bg-black" />
          </div>
        </div>
      </div>

      {/* Red flower blob */}
      <div className="absolute -bottom-10 left-[10%] h-40 w-40 rounded-[48%_52%_58%_42%] bg-red-500 md:h-52 md:w-52" />

      {/* Yellow starburst */}
      <svg
        className="absolute left-[55%] top-[18%] h-16 w-16 text-yellow-400 md:h-24 md:w-24"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50,5 61,38 95,38 67,59 78,92 50,72 22,92 33,59 5,38 39,38" />
      </svg>

      {/* Purple irregular circle */}
      <div className="absolute bottom-[22%] right-[18%] h-32 w-32 rounded-[62%_38%_55%_45%] bg-purple-500 md:h-40 md:w-40" />

      {/* Blue pill — bottom */}
      <div className="absolute -bottom-8 right-[30%] h-20 w-56 rotate-12 rounded-full bg-blue-500" />

      {/* Pink small blob */}
      <div className="absolute left-[28%] top-[62%] h-20 w-24 rotate-[-20deg] rounded-[55%_45%_60%_40%] bg-pink-500" />
    </div>
  );
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="relative min-h-full overflow-hidden">
      <style>{`
        @keyframes landing-momo-drift {
          0%, 100% {
            transform: translate(0, 0) rotate(var(--momo-rotate));
          }
          50% {
            transform: translate(8px, -16px) rotate(var(--momo-rotate));
          }
        }
        .landing-momo-drift {
          animation: landing-momo-drift ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <SkyBackground />
      </div>

      <div className="absolute inset-0 z-[1]">
        <CloudLayer />
      </div>

      <div className="absolute inset-0 z-[2]">
        <DecorativeShapes />
      </div>

      <div className="absolute inset-0 z-[3]">
        <FlyingMomos />
      </div>

      <div className="relative z-10 flex min-h-full flex-col px-6 py-8 md:px-12 md:py-12 lg:px-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black md:text-sm">
          Finding Momo
        </p>

        <main className="mt-10 flex flex-1 flex-col justify-center pb-12 md:mt-16 md:pb-20">
          <h1 className="max-w-4xl text-[clamp(3.25rem,14vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-black">
            FINDING
            <br />
            MOMO
          </h1>

          <p className="mt-6 max-w-xl text-xl font-bold text-black md:mt-8 md:text-2xl">
            Tiny dog. Big world.
          </p>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
            Momo is hiding in iconic places around the world. Look around, find
            her, and bring her home safely.
          </p>

          <div className="mt-10 flex max-w-md flex-col gap-3 md:mt-12">
            <button
              type="button"
              onClick={onStart}
              className="w-full border-2 border-black bg-black px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition hover:bg-lime-400 hover:text-black active:scale-[0.99]"
            >
              Start Finding Momo
            </button>

            <a
              href="https://buymeacoffee.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-black bg-white px-8 py-3.5 text-center text-sm font-bold text-black transition hover:bg-orange-400 hover:text-black"
            >
              Buy Momo a sweet potato 🍠
            </a>

            <a
              href="https://www.youtube.com/@welcometojemsworld"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-black bg-white px-8 py-3.5 text-center text-sm font-bold text-black transition hover:bg-cyan-400 hover:text-black"
            >
              Watch Momo on YouTube
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
