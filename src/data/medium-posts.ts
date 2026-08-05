export interface MediumPost {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  isExternal?: boolean;
}

export const mediumPosts: MediumPost[] = [
  {
    title: "Forecasting Christmas Spending: A Rough Holiday Season Ahead for Australian Cities",
    url: "https://www.linkedin.com/pulse/forecasting-christmas-spending-rough-holiday-season-ahead-young-ecm3c",
    publishedAt: "2024-10-22",
    summary: "Our latest analysis, using seasonal ARIMA and Prophet time series models, predicts a dip in Christmas spending across Australia's capital cities in 2024. Inflation at 3.8% and high interest rates are squeezing household budgets, with some expected to see declines.",
    tags: ["Forecasting", "ARIMA", "Prophet"],
    isExternal: true
  },
  {
    title: "Verifying our Forecasts: Surprise Christmas Spending Winners in 2024",
    url: "https://www.linkedin.com/pulse/verifying-our-forecasts-surprise-christmas-spending-winners-young-t5z9c",
    publishedAt: "2025-01-23",
    summary: "Sequel to my October article:  Adelaide and Perth stood out with surprising spending growth (both exceeding 5% after inflation). While easing inflation offered some relief, cost-of-living pressures kept spending tight elsewhere. With rate cuts expected in 2025, could we see a shift in consumer sentiment?",
    tags: ["Forecasting", "ARIMA", "Prophet"],
    isExternal: true
  },
  {
    title: "Cost of Living Crisis: Is Moving to a Regional Area the Answer?",
    url: "https://www.linkedin.com/pulse/cost-living-crisis-moving-regional-area-answer-carson-young-lygtf/?trackingId=Jvv6M5G27oa70Tw4LyAqAg%3D%3D",
    publishedAt: "2025-09-11",
    summary: "On essentials, metro households are slipping in real terms. Since 2022, staples spend per person is up 0.7% in the cities while CPI rose 12.3%. Regional areas lifted staples by 10.2% over the same period- still tight, but closer to keeping pace with inflation.",
    tags: ["Inflation", "Cost of Living", "Spendmapp"],
    isExternal: true,
  },
  {
    title: "Beyond the Pedestrian Counter: Tracing Real Journeys with a Mobility Data Lake",
    url: "https://www.linkedin.com/posts/carson-young-954187222_geospatial-mobilitydata-datascience-ugcPost-7480413238094979072-5SRs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfpKJABTEXAw9c53pQOUuPpwJyWhLvLciU",
    publishedAt: "2026-07-08",
    summary: "A pedestrian counter tells you how many people walked past, not where they came from. Our Data & GIS team at Geografia built a datalake tracing real journeys from suburb to national scale, from Sydney pedestrian movement to Bangkok MRT commutes, using H3 indexing and DuckDB to query billions of points in seconds.",
    tags: ["Geospatial", "Mobility Data", "Data Science", "H3", "DuckDB"],
    isExternal: true,
  }
];

export function getMediumPosts(): MediumPost[] {
  return mediumPosts;
} 