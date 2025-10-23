import { LogoCloud } from "./logo-cloud";

export default function Page() {
  return (
    <div className="min-h-screen w-full place-content-center">
      <div className="w-full">
        <h2 className="mb-5 text-center">
          <span className="block font-medium text-2xl text-muted-foreground">
            Already used by
          </span>
          <span className="font-black text-2xl text-primary tracking-tight md:text-3xl">
            Best in the Game
          </span>
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
