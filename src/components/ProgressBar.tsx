type ProgressBarProps = {
  foundCount: number;
  total: number;
};

export default function ProgressBar({ foundCount, total }: ProgressBarProps) {
  const progress = total > 0 ? (foundCount / total) * 100 : 0;

  return (
    <div className="w-full rounded-2xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
        <span>
          Found {foundCount} / {total}
        </span>
        <span className="text-pink-400">{Math.round(progress)}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-pink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-300 to-violet-300 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
