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
      <section className="mb-section-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Causual Inference with Bayesian structural time-series. <br />
              Built with <code className="font-mono">R</code>,{" "} and{" "}
              <a
                href="https://github.com/google/CausalImpact"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-mono "
              >
                CausalImpact
            </a>.
          </p>
          {/* Option 1: simple <img> */}
          <img
            src="/causual_impact_example.svg"
            alt="Causal Impact Example"
            className="max-w-4xl w-full h-auto"
          />
        </div>
      </section>
            <section className="mb-section-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Street network and walking catchment analysis. <br />
            <span className="text-sm md:text-base lg:text-sm xl:text-base">
              Shows how far you can walk in 5, 10, and 20 minutes from the origin node before and after the construction of a new road in a town.
            </span>
            <br />
            Built with <code className="font-mono">Python</code> and{" "}
            <a
              href="https://osmnx.readthedocs.io/en/stable/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-mono"
            >
              OSMnx
            </a>.
          </p>
        {/* Before Construction */}
        <img
          src="/osmnx_example_before.png"
          alt="Walking catchment before road construction"
          className="max-w-4xl w-full h-auto"
        />

        {/* After Construction */}
        <img
          src="/osmnx_example_after.png"
          alt="Walking catchment after road construction"
          className="max-w-4xl w-full h-auto"
        />
        </div>
      </section>
    </main>
  );
}
