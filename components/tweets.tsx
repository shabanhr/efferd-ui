import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";
import { SITE_NAME } from "@/config/site";
import { cn } from "@/lib/utils";

const tweets = [
  "1981412008407798168",
  "1978900531226563043",
  "1979001377830408448",
  "1981737610201485542",
  "1981771047621079195",
  "1978906218522358142",
  "1981436525502963910",
  "1980628962452922513",
  "1980837234724204942",
  "1980754546067685862",
  "1980343157910061388",
  "1980288960271446281",
  "1980314957737844799",
];

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

const Tweet = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    return <TweetNotFound error={error} />;
  }
};

export const Tweets = () => (
  <div className="grid gap-16 py-16">
    <div className="mx-auto grid max-w-3xl gap-2 text-center">
      <h2 className="font-heading font-semibold text-3xl tracking-tight sm:text-4xl">
        What the community is saying
      </h2>
      <p className="text-balance text-lg text-muted-foreground sm:text-xl">
        We're proud to have a community of users who love using {SITE_NAME}.
      </p>
    </div>
    <div className="cpx lg:columns-2 xl:columns-3">
      {tweets.map((tweet) => (
        <Suspense fallback={<TweetSkeleton />} key={tweet}>
          <div
            className={cn(
              "[&_.react-tweet-theme]:shadow! [&_.react-tweet-theme]:mt-0! [&_.react-tweet-theme]:mb-4! [&_.react-tweet-theme]:bg-card! dark:[&_.react-tweet-theme]:bg-card/50!",
              "[&_.react-tweet-theme]:border-border!"
            )}
          >
            <Tweet id={tweet} />
          </div>
        </Suspense>
      ))}
    </div>
  </div>
);
