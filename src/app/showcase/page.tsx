import dynamic from "next/dynamic";

const KeplerMapEmbed = dynamic(() => import("@/components/KeplerMapEmbed"), {
  ssr: false,
});

export default function ShowcasePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] py-section-md">
      <section className="mb-section-lg">
        <div className="space-y-content-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Showcase
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Heatmap showing activity in George Street Precinct, Sydney.
              <br />
              Built with <code className="font-mono">kepler.gl</code>,{" "}
              <code className="font-mono">H3</code> and{" "}
              <code className="font-mono">DuckDB</code>.
            </p>
          </div>
          <KeplerMapEmbed src="/sydney_george_st_h3_heatmap.html" height="80vh" />
        </div>
      </section>
    </main>
  );
}