import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Carson Young",
  initials: "CY",
  url: "https://carson-young.github.io",
  location: "Melbourne",
  locationLink: "https://www.google.com/maps/place/melbourne",
  description:
    "A Data Scientist specialising in spatio-temporal data analysis and economic modelling. I have contributed to over 30 projects across Australia and internationally. Projects I worked on include event impact analysis, mobility data mapping, and machine learning surgical demand modelling. Experienced in maintaining ETL pipelines and processing large-scale mobility datasets.",
  summary:
    "Born and raised in Hong Kong, Carson has called Melbourne home for the past seven years. He studied Applied Mathematics and Physics at the University of Melbourne. Initially drawn to a career in research, he found greater fulfilment in Data Science. He is currently a Data Scientist at a Melbourne-based consultancy, specializing in Spatio-Temporal Statistics and mobility data analytics. Carson has contributed to over 30 projects across Australia, spanning economic development, transport planning, and state government policy. He is experienced in time series forecasting, economic impact assessment, COVID-19 modelling, and processing large-scale mobility datasets",
  avatarUrl: "/cy-small_sq.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "carsonyoungks@proton.me",
    tel: "+61 x xxxx xxxx",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/carson-young",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carson-young-954187222/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:carsonyoungks@proton.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Geografia",
      href: "https://geografia.com.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Data Scientist",
      logoUrl: "/Geografia-BrandMark.png",
      start: "Jan 2023",
      end: "Present",
      bullets: [
        "Curated real-time expenditure insights for 100+ local governments through Spendmapp, a subscription-based SaaS platform powered by card transaction data",
        "Co-developed the first methodology to measure the Human Development Index at the sub-national level for Australian local government areas",
        "Collaborated with an international team to build and maintain big data pipelines (DuckDB, H3) for ingesting mobile ping data, enabling advanced spatial analytics to support government policy-making"
      ],
    },
      {
      company: "The University of Melbourne & Central Coast Local Health District",
      href: "https://www.cclhd.health.nsw.gov.au/",
      badges: [],
      location: "Melbourne, Australia",
      title: "Capstone Project Student Lead",
      logoUrl: "/nsw_health_logo.jpg",
      start: "Mar 2023",
      end: "Nov 2023",
      bullets: [
        "Worked with senior hospital management to introduce modern data-driven methods over outdated systems",
        "Analysed four years of surgical waitlist and theatre schedule data to identify specialty-level trends, with a focus on Orthopaedic and General Surgery",
        "Built ML models to predict surgery duration and forecasted patient waitlists using ARIMA and Prophet"
      ],
    },

  ],
  education: [
      {
      school: "The University of Melbourne",
      href: "https://www.unimelb.edu.au/",
      degree: "Master of Data Science",
      logoUrl: "/unimelb_logo.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "The University of Melbourne",
      href: "https://www.unimelb.edu.au/",
      degree: "Bachelor of Science in Mathematical Physics",
      logoUrl: "/unimelb_logo.jpg",
      start: "2019",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Expenditure Forecasting",
      href: "",
      dates: "2023 - Present",
      active: true,
      description:
        "Monthly consumer expenditure forecasting for Australian LGAs using seasonal ARIMA and Prophet.",
      technologies: [
        "R",
        "ARIMA",
        "Prophet",
        "tsibble",
      ],
      links: [
        {
          type: "Article",
          href: "https://www.linkedin.com/pulse/forecasting-christmas-spending-rough-holiday-season-ahead-young-ecm3c",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "",
      video: "",
    },
    {
      title: "Mobility Data Indexing and Query",
      href: "/showcase",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed a mobility data pipeline and indexing system using H3 and DuckDB, enabling efficient spatial queries and visualisation with kepler.gl.",
      technologies: [
        "H3",
        "DuckDB",
        "kepler.gl",
        "Python",
      ],
      links: [        
        {
          type: "Interactive Map",
          href: "/showcase",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "H3 Tools",
          href: "https://github.com/sabman/h3-utils",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bayesian Event Impact Analysis",
      href: "",
      dates: "2023 - Present",
      active: true,
      description:
        "Measuring event impacts with Google’s CausalImpact by generating counterfactual predictions.",
      technologies: [
        "R",
        "Bayesian",
        "CausalImpact",
      ],
      links: [
      ],
      image: "",
      video: "",
    },
    {
      title: "Spendmapp Pipeline",
      href: "",
      dates: "2023 - Present",
      active: true,
      description:
        "A data pipeline for a subscription-based SaaS product that ingests, processes, and validates monthly data, built with Python and orchestrated using Prefect.",
      technologies: [
        "Python",
        "Prefect",
        "CartoDB",
        "AWS S3",
      ],
      links: [
      ],
      image: "",
      video: "",
    },
  ],
  books: [
    {
      theme: "Popular Science",
      books: [
        {
          title: "In Pursuit of the Unknown: 17 Equations That Changed the World",
          author: "Ian Stewart",
          number: 1,
        },
        {
          title: "The Man Who Loved Only Numbers (Paul Erdős)",
          author: "Paul Hoffman",
          number: 2,
        },
        {
          title: "The Mathematics of Love",
          author: "Hannah Fry",
          number: 3,
        },
        {
          title: "A Brief History of Time",
          author: "Stephen Hawking",
          number: 4,
        },
      ],
    },
    {
      theme: "Contemporary Fiction",
      books: [
        {
          title: "A Gentleman in Moscow",
          author: "Amor Towles",
          number: 5,
        },
      ],
    },
    {
      theme: "Classics",
      books: [
        {
          title: "Adventures of Huckleberry Finn",
          author: "Mark Twain",
          number: 6,
        },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          number: 7,
        },
        {
          title: "The Reader",
          author: "Bernhard Schlink",
          number: 8,
        },
      ],
    },
    {
      theme: "Contemporary Chinese Literature",
      books: [
        {
          title: "你是我最熟悉的陌生人",
          author: "Middle",
          number: 9,
        },
        {
          title: "想把餘生的溫柔都給你",
          author: "不朽",
          number: 10,
        },
      ],
    },
  ],
} as const;


