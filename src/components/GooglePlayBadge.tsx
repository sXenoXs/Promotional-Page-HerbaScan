import { GOOGLE_PLAY_URL } from "@/lib/config";
import badgeImage from "@/assets/get-it-on-google-play.png";

type Props = {
  className?: string;
  height?: number;
};

export function GooglePlayBadge({ className = "", height = 56 }: Props) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      aria-label="Get HerbaScan on Google Play"
    >
      <img
        src={badgeImage}
        alt="Get it on Google Play"
        height={height}
        className="h-auto max-h-14 w-auto object-contain"
        style={{ minHeight: 40 }}
      />
    </a>
  );
}
