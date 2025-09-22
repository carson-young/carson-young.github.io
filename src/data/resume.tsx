import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Carson Young",
  initials: "CY",
  url: "https://carson-young.github.io",
  location: "Melbourne",
  locationLink: "https://www.google.com/maps/place/melbourne",
  description:
    "A Data Scientist specialising in spatio-temporal analytics and economic modelling. I have contributed to over 30 projects across Australia and internationally. Projects I worked on include event impact analysis, mobility data mapping, and machine learning surgical demand modelling. Experienced in maintaining ETL pipelines and processing large-scale mobility datasets.",
  summary:
    "Born and raised in Hong Kong, Carson has called Melbourne home for the past seven years. He studied Applied Mathematics and Physics at the University of Melbourne. Initially drawn to a career in research, he found greater fulfilment in Data Science. He is currently a Data Scientist at a Melbourne-based consultancy, specializing in Spatio-Temporal Statistics and mobility data analytics. Carson has contributed to over 30 projects across Australia, spanning economic development, transport planning, and state government policy. He is experienced in time series forecasting, economic impact assessment, COVID-19 modelling, and processing large-scale mobility datasets",
  avatarUrl: "/cy-small_sq.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "haileycheng@proton.me",
    tel: "+852-XXX-XXX-XXX",
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
        url: "mailto:haileycheng@proton.me",
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
        "Curated real-time expenditure insights to 100+ local governments through Spendmapp, a subscription-based SaaS platform powered by card transaction data",
        "Co-developed the first-ever methodology to measure the Human Development Index at the sub-national level for Australian local government areas",
        "Collaborated with an international team to build and maintain big data pipelines (DuckDB, H3) to ingest mobile ping data for advanced spatial analytics, supporting government policy-making."
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
        "Worked with senior hospital management to introduce modern data-driven methods over outdated systems.",
        "Analysed 4 years of surgical waitlist and theatre schdule data to identify specialty-level trends. In particular, focusing on Orthopaedic and General Surgery.",
        "Built ML models predicting surgery duration. Forecasted patient waitlists using ARIMA and Prophet."
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
      title: "MEQ-Bench",
      href: "https://github.com/heilcheng/MEQ-Bench",
      dates: "2024 - Present",
      active: true,
      description:
        "The first benchmark designed to evaluate an LLM's ability to generate audience-adaptive medical explanations for diverse stakeholders, including physicians, nurses, and patients.",
      technologies: [
        "Python",
        "LLM",
        "Medical AI",
        "Benchmarking",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/MEQ-Bench",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gemma Benchmark Suite",
      href: "https://github.com/heilcheng/gemma-benchmark",
      dates: "2024 - Present",
      active: true,
      description:
        "An evaluation suite for Google's Gemma models across academic LLM benchmarks, with quantization support and efficiency profiling.",
      technologies: [
        "Python",
        "LLM",
        "Benchmarking",
        "Quantization",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/gemma-benchmark",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "DeepChem Drug Formulation Tutorial",
      href: "https://github.com/heilcheng/deepchem-drug-formulation",
      dates: "2024 - Present",
      active: true,
      description:
        "A tutorial using DeepChem for predicting key pharmaceutical properties and visualizing molecular behaviors for drug discovery.",
      technologies: [
        "Python",
        "DeepChem",
        "Drug Discovery",
        "Molecular Biology",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/deepchem-drug-formulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Truth or Dare (Cantonese)",
      href: "https://github.com/heilcheng/Truth-or-Dare-Canto",
      dates: "2024 - Present",
      active: true,
      description:
        "A Truth or Dare question generator web app built in Cantonese, using React for webapp and React Native for Apps.",
      technologies: [
        "React",
        "React Native",
        "JavaScript",
        "Cantonese",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/heilcheng/Truth-or-Dare-Canto",
          icon: <Icons.github className="size-3" />,
        },
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


