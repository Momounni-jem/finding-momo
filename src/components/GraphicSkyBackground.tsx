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

export function GraphicSkyBackground() {
  return (
    <>
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

      <div
        className="pointer-events-none absolute inset-0 bg-[#d6e6f4]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-12 top-[10%] h-20 w-56 rounded-full bg-white/50 blur-[1px]" />
        <div className="absolute left-[8%] top-[14%] h-14 w-36 rounded-full bg-white/40 blur-[1px]" />
        <div className="absolute -right-16 top-[22%] h-24 w-64 rounded-full bg-white/45 blur-[1px]" />
        <div className="absolute right-[6%] top-[28%] h-16 w-44 rounded-full bg-white/35 blur-[1px]" />
        <div className="absolute -left-8 bottom-[24%] h-20 w-52 rounded-full bg-white/40 blur-[1px]" />
        <div className="absolute bottom-[18%] left-[42%] h-14 w-40 rounded-full bg-white/30 blur-[1px]" />
        <div className="absolute -right-10 bottom-[10%] h-24 w-60 rounded-full bg-white/45 blur-[1px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-16 top-24 h-48 w-48 rotate-12 rounded-[45%_55%_40%_60%] bg-lime-400 md:h-64 md:w-64" />
        <div className="absolute -left-20 top-[38%] h-24 w-72 -rotate-6 rounded-full bg-orange-400" />
        <div className="absolute right-[8%] top-[42%] h-28 w-28 rounded-full bg-cyan-400 md:h-36 md:w-36" />
        <div className="absolute -bottom-10 left-[10%] h-40 w-40 rounded-[48%_52%_58%_42%] bg-red-500 md:h-52 md:w-52" />
        <div className="absolute bottom-[22%] right-[18%] h-32 w-32 rounded-[62%_38%_55%_45%] bg-purple-500 md:h-40 md:w-40" />
        <div className="absolute -bottom-8 right-[30%] h-20 w-56 rotate-12 rounded-full bg-blue-500" />
        <div className="absolute left-[28%] top-[62%] h-20 w-24 rotate-[-20deg] rounded-[55%_45%_60%_40%] bg-pink-500" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
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
    </>
  );
}

/** Small colourful stickers for cards and popups */
export function GraphicStickerDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
      <div className="absolute -left-4 -top-4 h-10 w-10 rounded-[45%_55%_50%_50%] bg-lime-400" />
      <div className="absolute -right-3 -top-5 h-8 w-8 text-yellow-400">
        <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full rotate-12">
          <polygon points="50,5 61,38 95,38 67,59 78,92 50,72 22,92 33,59 5,38 39,38" />
        </svg>
      </div>
      <div className="absolute -bottom-4 -left-2 h-9 w-11 rounded-full bg-pink-500" />
      <div className="absolute -bottom-3 -right-4 h-8 w-14 rotate-6 rounded-full bg-orange-400" />
    </div>
  );
}

export const btnPrimary =
  "border-2 border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-lime-400 hover:text-black active:scale-[0.99]";

export const btnSecondary =
  "border-2 border-black bg-white px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-orange-400 hover:text-black active:scale-[0.99]";

export const btnSecondaryCyan =
  "border-2 border-black bg-white px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:bg-cyan-400 hover:text-black active:scale-[0.99]";

export const btnSmall =
  "shrink-0 border-2 border-black bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-cyan-400 hover:text-black";
