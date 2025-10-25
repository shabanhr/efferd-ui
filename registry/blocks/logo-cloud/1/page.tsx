import { LogoCloud } from "./logo-cloud";

export default function Page() {
  return (
    <div className="min-h-screen w-full place-content-center p-4">
      <div className="w-full space-y-5">
        <h2 className="text-center font-medium text-lg tracking-tight md:font-semibold md:text-2xl">
          <span className="text-muted-foreground">
            Your favorite companies are
          </span>{" "}
          <span className="text-primary">our partners.</span>
        </h2>
        <LogoCloud logos={logos} />
      </div>
    </div>
  );
}

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];
