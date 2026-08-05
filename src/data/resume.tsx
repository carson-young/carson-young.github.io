import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon, Plane } from "lucide-react";

export const DATA = {
  name: "Carson Young",
  initials: "CY",
  url: "https://carson-young.github.io",
  location: "Melbourne",
  locationLink: "https://www.google.com/maps/place/melbourne",
  description:
    "Data Scientist with 3+ years building and deploying machine learning and forecasting models across economic modelling, public policy and healthcare projects, including production pipelines on Westpac transaction data. I've contributed to over 40 projects across Australia, applying causal inference techniques such as propensity score matching, instrumental variables, and Bayesian counterfactual predictions. Experienced in ETL pipelines and technologies like AWS and DuckDB for large-scale mobility datasets.",
  summary:
    "Born and raised in Hong Kong, Carson has called Melbourne home for the past seven years. He studied Mathematical Physics at the University of Melbourne, touching on epidemiological modelling along the way, before finding his way into Data Science through a Master's degree. He is currently a Data Scientist at a Melbourne based consultancy, specialising in spatio-temporal statistics and mobility data analytics. Carson has contributed to over 40 projects across Australia, spanning economic development, transport planning, and state government policy, with over three years building, evaluating, and deploying machine learning and forecasting models, including production pipelines on Westpac transaction data. He applies causal inference techniques such as propensity score matching, instrumental variables, and Bayesian time series models.",
  avatarUrl: "/cy-small_sq.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/travel", icon: Plane, label: "Travel" },
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

  professionalExperience: [
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
        "Built and operate the production pipelines behind Spendmapp, a SaaS platform delivering real time economic insights to 100+ local governments, powered by Westpac DataX transaction data",
        "Work with Geografia's in-house economics team on inferential methods, including propensity score matching and instrumental variables, applied to state government education and transport policy and to consumer spending behaviour",
        "Led the migration of a legacy Python expenditure forecasting framework to the Nixtla ecosystem, cutting processing time by approximately 80%",
        "Prepare and cleanse large transactional and spatial datasets; optimise SQL in DuckDB (spatial joins, H3 indexing) for large scale analysis",
        "Built Australia's first sub-national Human Development Index, owning the measurement design from index construction through to validation against UN benchmarks"
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
        "Led a consulting engagement with Gosford and Wyong Hospitals on surgical demand and theatre utilisation, working with senior hospital management to bring modern data-driven methods to legacy planning processes",
        "Analysed 4+ years of surgical waitlist and theatre scheduling data to identify specialty-level trends, with a focus on Orthopaedic and General Surgery",
        "Built triage classification and patient clustering models, plus surgery duration and waitlist forecasts (ARIMA, Prophet), to support forward planning"
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
        {
          type: "Nixtla",
          href: "https://nixtla.io",
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
        {
          type: "DuckDB",
          href: "https://duckdb.org",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "LinkedIn Post",
          href: "https://www.linkedin.com/posts/carson-young-954187222_geospatial-mobilitydata-datascience-ugcPost-7480413238094979072-5SRs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfpKJABTEXAw9c53pQOUuPpwJyWhLvLciU",
          icon: <Icons.linkedin className="size-3" />,
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
  travel: {
    trips: [
      {
        destination: "Hong Kong",
        countryCode: "hk",
        dates: "2 Jan 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Penang",
        countryCode: "my",
        dates: "26 Jan 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Wellington",
        countryCode: "nz",
        dates: "7 Mar 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Sydney",
        countryCode: "au",
        dates: "28 Mar 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Taipei",
        countryCode: "tw",
        dates: "1 Apr 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "London",
        countryCode: "gb",
        dates: "26 Apr 2026",
        description: "",
        status: "cancelled" as const,
      },
      {
        destination: "Adelaide",
        countryCode: "au",
        dates: "9 May 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Auckland",
        countryCode: "nz",
        dates: "20 May 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Seoul",
        countryCode: "kr",
        dates: "6 Jun 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Hong Kong",
        countryCode: "hk",
        dates: "10 Jun 2026",
        description: "",
        status: "completed" as const,
      },
      {
        destination: "Falls Creek",
        countryCode: "au",
        dates: "19 Jun 2026",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Jakarta",
        countryCode: "id",
        dates: "19 Sep 2026",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Adelaide",
        countryCode: "au",
        dates: "11 Oct 2026",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Berlin & Munich",
        countryCode: "de",
        dates: "1 Nov 2026",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Kaohsiung",
        countryCode: "tw",
        dates: "29 Dec 2026",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Nadi",
        countryCode: "fj",
        dates: "23 Jan 2027",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Busan",
        countryCode: "kr",
        dates: "6 Mar 2027",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Sheffield",
        countryCode: "gb",
        dates: "18 Apr 2027",
        description: "",
        status: "upcoming" as const,
      },
      {
        destination: "Amsterdam",
        countryCode: "nl",
        dates: "1 Nov 2027",
        description: "",
        status: "upcoming" as const,
      },
    ],
    photos: [
      {
        src: "/travel/taipei-jiantan.jpg",
        location: "劍潭山, Taipei",
        caption: "Taipei skyline and Taipei 101 from Jiantan Mountain, April 2026",
      },
      {
        src: "/travel/sydney-harbour.jpg",
        location: "Sydney",
        caption: "Sydney Harbour, on final approach to Kingsford Smith Airport, March 2026",
      },
      {
        src: "/travel/hongkong-harbour.jpg",
        location: "Victoria Harbour, Hong Kong",
        caption: "Iconic night view of Hong Kong Island, December 2024",
      },
      {
        src: "/travel/wellington-cablecar.jpg",
        location: "Wellington",
        caption: "Wellington Cable Car, March 2026",
      },
    ],
  },
} as const;


