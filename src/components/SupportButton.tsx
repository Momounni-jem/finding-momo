type SupportButtonProps = {
  className?: string;
};

export default function SupportButton({ className = "" }: SupportButtonProps) {
  return (
    <a
      href="https://example.com/buy-momo-a-sweet-potato"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-amber-100 px-6 py-3 text-sm font-semibold text-amber-800 shadow-sm transition hover:bg-amber-200 hover:shadow-md ${className}`}
    >
      Buy Momo a sweet potato 🍠
    </a>
  );
}
