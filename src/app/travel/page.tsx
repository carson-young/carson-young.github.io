"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { DATA } from "@/data/resume";
import "flag-icons/css/flag-icons.min.css";

const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => mod.default), { ssr: false });
const WorldMap = dynamic(() => import("@/components/world-map").then(mod => mod.WorldMap), { ssr: false });

const BLUR_FADE_DELAY = 0.04;

const STATUS_STYLES = {
  upcoming: "bg-green-500/10 text-green-700 dark:text-green-400",
  planning: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  completed: "bg-muted/50 text-muted-foreground",
  cancelled: "bg-red-500/10 text-red-700 dark:text-red-400 line-through",
} as const;

const STATUS_LABELS = {
  upcoming: "Upcoming",
  planning: "Planning",
  completed: "Completed",
  cancelled: "Cancelled",
} as const;

export default function TravelPage() {
  const { trips, photos } = DATA.travel;

  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section className="max-w-3xl mx-auto px-4 w-full">

        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="mb-16 text-center">
            <h1 className="font-semibold text-4xl mb-3 tracking-tight">Travel</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upcoming trips, places visited, and photos from along the way.
            </p>
          </div>
        </BlurFade>

        {/* World Tour */}
        {trips.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="mb-16">
              <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-2">
                <Calendar className="size-5 text-muted-foreground" />
                World Tour
              </h2>
              <div className="space-y-3">
                {(trips as unknown as Array<{ destination: string; countryCode: string; dates: string; description: string; status: keyof typeof STATUS_STYLES }>).map((trip, index) => (
                  <BlurFade key={`${trip.destination}-${trip.dates}`} delay={BLUR_FADE_DELAY * 3 + index * 0.03}>
                    <div className="px-5 py-4 rounded-xl border border-border/50 hover:border-border transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <span className={`fi fi-${trip.countryCode} rounded-sm flex-shrink-0`}
                          style={{ width: '1.5rem', height: '1.125rem', display: 'inline-block' }} />
                        <span className="font-medium tracking-tight flex-1">{trip.destination}</span>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <time className="text-sm text-muted-foreground tabular-nums">
                            {trip.dates}
                          </time>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_STYLES[trip.status]}`}>
                            {STATUS_LABELS[trip.status]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Photo Gallery */}
        {photos.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="mb-16">
              <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-2">
                <MapPin className="size-5 text-muted-foreground" />
                Photos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(photos as unknown as Array<{ src: string; location: string; caption?: string }>).map((photo, index) => (
                  <BlurFade key={photo.src} delay={BLUR_FADE_DELAY * 5 + index * 0.04}>
                    <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-border transition-all duration-300 aspect-[2/3]">
                      <Image
                        src={photo.src}
                        alt={photo.caption ?? photo.location}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white font-medium text-sm leading-snug">{photo.location}</p>
                        {photo.caption && (
                          <p className="text-white/75 text-xs mt-0.5">{photo.caption}</p>
                        )}
                      </div>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>
        )}

        {/* Empty state for photos */}
        {(photos as unknown as unknown[]).length === 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="mb-16">
              <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-2">
                <MapPin className="size-5 text-muted-foreground" />
                Photos
              </h2>
              <div className="text-center py-16 rounded-2xl border border-dashed border-border/50">
                <p className="text-muted-foreground">
                  Photos coming soon — add images to <code className="text-xs bg-muted/50 px-1.5 py-0.5 rounded">/public/travel/</code> and update the data in <code className="text-xs bg-muted/50 px-1.5 py-0.5 rounded">resume.tsx</code>.
                </p>
              </div>
            </div>
          </BlurFade>
        )}

        {/* World Map */}
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-8 flex items-center gap-2">
              <MapPin className="size-5 text-muted-foreground" />
              Countries Visited
            </h2>
            <WorldMap delay={BLUR_FADE_DELAY * 7} />
          </div>
        </BlurFade>

      </section>
    </main>
  );
}
