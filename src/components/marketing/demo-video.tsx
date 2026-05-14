"use client";

import { useEffect, useState } from "react";
import { assignVariantInBrowser, type Variant } from "@/lib/ab";
import { DemoWalkthrough } from "./demo-walkthrough";

const EXPERIMENT = "demo-video-vs-walkthrough-2026-05";

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [variant, setVariant] = useState<Variant | null>(null);

  useEffect(() => {
    const v = assignVariantInBrowser(EXPERIMENT);
    setVariant(v);
    if (v) {
      window.plausible?.("Demo Section View", {
        props: { variant: v },
      });
    }
  }, []);

  function handlePlay() {
    setPlaying(true);
    window.plausible?.("Demo Video Play", {
      props: { variant: variant ?? "A" },
    });
  }

  return (
    <section className="border-t border-gray-100 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            60 seconds to understand how KompWatch keeps you ahead of
            competitors — no signup required.
          </p>
        </div>

        {variant === "B" ? (
          <DemoWalkthrough />
        ) : (
          <div className="mt-12">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-xl">
              {/* 16:9 aspect ratio container */}
              <div className="relative aspect-video w-full">
                {playing ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/DEMO_VIDEO_ID?autoplay=1&rel=0"
                    title="KompWatch product demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={handlePlay}
                    className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900 transition-all hover:from-brand-600 hover:to-brand-800"
                    aria-label="Play demo video"
                  >
                    {/* Play icon */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                      <svg
                        className="ml-1 h-8 w-8 text-brand-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="mt-4 text-sm font-medium text-white/80">
                      Watch the 60-second demo
                    </span>
                  </button>
                )}
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              No audio required — captions included
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
