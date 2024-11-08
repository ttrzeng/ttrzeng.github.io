import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Talent Zeng",
  initials: "TZ",
  url: "https://talentzeng.com",
  location: "Toronto, Canada",
  description:
    "From physicist to software engineer, driven by a passion for building creative solutions with designs that make an impact.",
  summary:
    "Experienced software engineer with 7+ years in designing, prototyping, and developing robust, enterprise-level websites. Skilled in React, Redux, JavaScript/TypeScript, MUI, Styled Components, and Node.js. Specializes in creating scalable, modular web components optimized for long-term maintainability and growth.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Express.js",
    "Jest",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Material UI",
    "Styled-components",
    "Redux",
    "Sass",
    "Nest.js",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "talent.z@hotmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ttrzeng",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ttrzeng",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Okta",
      href: "https://okta.com",
      badges: [],
      location: "Remote",
      title: "Software engineer",
      logoUrl: "/okta.png",
      start: "Oct 2021",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Auth0",
      badges: [],
      href: "https://auth0.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/auth0.png",
      start: "Oct 2021",
      end: "Present",
      description:
        "Upgraded Okta/Auth0's UI library for improved scalability and maintenance, and modernized Okta's codebase with React, reducing onboarding time by 40%. Developed reusable components for Auth0's documentation, cutting future feature build time by 20%, and created custom form components, reducing form-related development by 70%.",
    },
    {
      company: "Yuhu",
      href: "https://yuhu.com",
      badges: [],
      location: "Toronto, ON",
      title: "Senior Software Engineer",
      logoUrl: "/yuhu.jpg",
      start: "January 2021",
      end: "October 2021",
      description:
        "Led a team of engineers and designers to improve client workflows, boosting payment processing and maintenance efficiency by 60%. Developed payment features in Yuhu's main app, increasing revenue by ~$2 per unit for 200k units. Reduced technical debt by 10% and optimized engineering management workflows, driving overall operational efficiency.",
    },
    {
      company: "Sandvine",
      href: "https://sandvine.com",
      badges: [],
      location: "Waterloo, ON",
      title: "Software Engineer",
      logoUrl: "/sandvine.png",
      start: "September 2017",
      end: "December 2020",
      description:
        "Developed a web app to configure 1,000+ servers simultaneously, saving 100 hours per week in configuration time. Created a tool for issuing licenses to clients across all company products, saving sales engineers 30 hours per sale. In addition, built a web framework that enables users to create dynamic dashboards without code, saving an estimated ~$3.6M in future development costs.",
    },
    {
      company: "Looka",
      href: "https://looka.com",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/looka.png",
      start: "April 2017",
      end: "September 2017",
      description:
        "Improved logo alignment accuracy to 95% by geometrically aligning fonts and icons. Accelerated the logo editor by 100x, enabling real-time editing responses. Developed a feature that aligns logos realistically on various products, such as t-shirts, banners, doors, and mugs.",
    },
    {
      company: "Skywatch",
      href: "https://skywatch.com",
      badges: [],
      location: "Waterloo, ON",
      title: "Software Engineer Intern",
      logoUrl: "/skywatch.jpeg",
      start: "August 2015",
      end: "December 2015",
      description:
        "Reduced satellite data inaccuracies by 80% by eliminating false positives. Created graphs and analytic tools for astrophysics research, supporting NASA and academic professors. Developed Skywatch's system admin to configure and monitor daily data from NASA and user activities, saving 8 hours of manual work per day.",
    },
  ],
  education: [
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Mathematical Physics (BSc)",
      logoUrl: "/waterloo.png",
      start: "2011",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "OneHouseUp",
      href: "https://github.com/ttrzeng/OneHouseUp-Frontend",
      dates: "January 2020 - September 2020",
      active: false,
      description:
        "Built a web application that analyzes real estate property data to generate comprehensive financial projections, enabling accurate investment potential assessment.",
      technologies: [
        "React.js",
        "Redux",
        "Redux saga",
        "Typescript",
        "PostgreSQL",
        "Surge",
        "Sass",
        "Bulma",
        "Stripe",
        "Digital Ocean",
        "TypeORM",
        "Express.js",
        "Passport.js",
      ],
      links: [
        {
          type: "Website (inactive)",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source code",
          href: "https://github.com/ttrzeng/OneHouseUp-Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/onehouseup_summary.png",
      video: "",
    },
    {
      title: "Quantum Design",
      href: "https://quantum.okta.design",
      dates: "April 2022 - December 2023",
      active: true,
      description:
        "Created an open source UI component library for Okta/Auth0, featuring custom branding, charts, tokens and form elements with full support for both light and dark modes.",
      technologies: [
        "React.js",
        "Typescript",
        "Storybook",
        "Material UI",
        "Styled-components",
      ],
      links: [
        {
          type: "Website",
          href: "https://quantum.okta.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source code",
          href: "https://www.npmjs.com/package/@auth0/quantum-product",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quantum.png",
      video: "",
    },
  ],
} as const;
