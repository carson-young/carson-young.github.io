// KeplerMapEmbed.tsx
// React component for Next.js to embed an exported Kepler.gl HTML map stored in /public

import React from "react";

export type KeplerMapEmbedProps = {
  /** Path relative to public/, e.g. '/kepler_map.html' or 'maps/my-map.html' */
  src?: string;
  /** CSS height value (e.g. '600px', '80vh') */
  height?: string;
  /** Allow fullscreen on the iframe */
  allowFullScreen?: boolean;
  /** Extra classes for the wrapper */
  className?: string;
};

export default function KeplerMapEmbed({
  src = "/kepler_map.html",
  height = "75vh",
  allowFullScreen = true,
  className = "",
}: KeplerMapEmbedProps) {
  // If you export kepler.gl from its exporter, put the exported HTML under /public
  // and point `src` to `/your-file.html`.

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full" style={{ height }}>
        <iframe
          src={src}
          title="Kepler.gl map"
          className="absolute inset-0 w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-popups"
          allowFullScreen={allowFullScreen}
        />
      </div>
    </div>
  );
}

