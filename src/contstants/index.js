export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, lo1calization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".Net",
        path: "assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "Ef Core",
        path: "assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Travel Advisor",
    description: "A dynamic concierge app providing nearby restaurant and hotel suggestions.",
    subDescription: [
      "Built with React, Google Maps API, and Rapid APIs, this scalable app offers users a seamless experience to discover and explore local amenities based on their location, using a modern, enterprise-ready structure."
    ],
    href: "",
    logo: "",
    image: "assets/projects/travel-advisor.png",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Google Maps API", path: "assets/logos/google-maps.svg" },
      { id: 3, name: "Rapid APIs", path: "assets/logos/api.svg" },
      { id: 4, name: "Material UI", path: "assets/logos/material-ui.svg" }
    ]
  },
  {
    id: 2,
    title: "Muse 1.0",
    description: "Local live music discovery app utilizing Google APIs and full-stack tech.",
    subDescription: [
      "A full-stack React and MongoDB application that displays live music events near you.",
      "Integrated with Google Calendar and Places APIs, secured with JWT, and developed collaboratively using GitHub, it enhances local music discovery with real-time data and interactive maps."
    ],
    href: "",
    logo: "",
    image: "assets/projects/muse1.png",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "MongoDB", path: "assets/logos/mongo-db.svg" },
      { id: 3, name: "Google APIs", path: "assets/logos/google.svg" },
      { id: 4, name: "JWT", path: "assets/logos/jsonwebtoken.svg" }
    ]
  },
  {
    id: 3,
    title: "Member Snapshot",
    description: "A React/TypeScript app for credit union member management.",
    subDescription: [
      "Led development of a full-featured landing page with custom RBAC permissions for REV Federal Credit Union.",
      "Managed tech stack setup, version control, onboarding, and project management to enhance member experience across multiple branches and teams."
    ],
    href: "",
    logo: "",
    image: "assets/projects/rev-member-snapshot.png",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "TypeScript", path: "assets/logos/typescript.svg" },
      { id: 3, name: "Tailwind CSS", path: "assets/logos/tailwind.svg" },
      { id: 4, name: "Jira", path: "assets/logos/jira.svg" }
    ]
  },
  {
    id: 4,
    title: "Muse 2.0",
    description: "A scalable microservices platform for nightlife and local culture.",
    subDescription: [
      "Built as a community-powered platform with AWS, Next.js, Kafka, and 15 microservices.",
      "Muse connects local talent with venues, brands, and audiences through media, booking, and automation, revolutionizing nightlife management at scale."
    ],
    href: "",
    logo: "",
    image: "assets/projects/muse2.png",
    tags: [
      { id: 1, name: "AWS", path: "assets/logos/aws.svg" },
      { id: 2, name: "Next.js", path: "assets/logos/nextjs.svg" },
      { id: 3, name: "Kafka", path: "assets/logos/kafka.svg"},
      { id: 4, name: "PostgreSQL", path: "assets/logos/postgresql.svg" }
    ]
  }

];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/davidson-fong/",
    icon: "assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/muse.chs",
    icon: "assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Mediterranean Shipping Co.",
    date: "Jul. - Oct. 2022 ",
    contents: [
      "Work alongside senior devs in a project-drive Agile environment",
      "Design intuitive user interfaces for internal departments. These UIs allowed various departments in the company to interact with the massive databases.",
      "✅ Use industry-leading tools like SSMS, Teams, Azure Dev Ops, Visual Studio and more",
      "✅ Assess and document code, review PRs, discover and present project objectives and accomplishments.",
    ],
  },
  /*{
    title: "Full Stack Developer",
    job: "Select Quote Insurance",
    date: "Oct. 2023 - Jan. 2025",
    contents: [
      "Work in a large internation dev shop, within a speficied team.",
      "Follow industry best practices for working in a large and established team.",
      "✅ Write testable code, create unit tests, review PRs, and contribute documentation.",
      "✅ Assist in solution meetings and devops tasks like deployments, rollbacks, etc.",
    ],
  },*/
  {
    title: "Full Stack Developer",
    job: "REV Federal Credit Union",
    date: "Oct. 2022 - present",
    contents: [
      "Work alongside senior devs in a startup dev shop environment.",
      "Collaborate with project managers in Agile & Scrum format to maximize effeciency throughout the software development life cylce.",
      "✅ Write testable code, create unit tests, review PRs, and contribute documentation",
      "✅ Utilize a variety of tools and languages including Java, C# MySQL, SSMS, IBM DB2, React, Typescript, Redux, Docker, Microsoft, Azure and many more...",
      "✅ Build a cross-department landing page to better serve customers. This project included industry-leading tools and methods like Redux Toolkit state management, Ajax, custom RBAC permissions, React, and much more...",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const skills = [
  // Languages
  {name:"Java",icon:"assets/logos/java.png",},
  {name:"JavaScript",icon:"assets/logos/javascript.svg",},
  {name:"TypeScript",icon:"",},
  {name:"C#",icon:"assets/logos/csharp.svg",},
  {name:"Python",icon:"",},
  {name:"MySQL",icon:"",},
  {name:"IBM DB2",icon:"",},
  {name:"HTML5",icon:"assets/logos/html5.svg",},
  {name:"CSS3",icon:"assets/logos/css3.svg",},
  // Frameworks & Libraries
  {name:"DotNet",icon:"",},
  {name:"React",icon:"assets/logos/react.svg",},
  {name:"Tailwind",icon:"assets/logos/tailwindcss.svg",},
  {name:"NextJs",icon:"",},
  {name:"Vite",icon:"assets/logos/vitejs.svg",},
  {name:"ThreeJs",icon:"assets/logos/threejs.svg",},
  {name:"Django",icon:"",},
  // Tools
  {name:"Jira",icon:"assets/logos/jira.svg",},
  {name:"Confluence",icon:"",},
  {name:"Microsoft",icon:"assets/logos/microsoft.svg",},
  {name:"SSMS",icon:"",},
  {name:"Azure",icon:"assets/logos/azure.svg",},
  {name:"GitHub",icon:"assets/logos/github.svg",},
  {name:"Docker",icon:"",},
  {name:"Microsoft SQL Server",icon:"assets/logos/microsoftsqlserver.svg",},
  {name:"VS Code",icon:"assets/logos/visualstudiocode.svg",},
  {name:"MongoDb",icon:"assets/logos/mongodb.svg",},
  {name:"Stripe",icon:"assets/logos/stripe.svg",},
]


// Portfolio Tutorial from https://www.youtube.com/watch?v=S9UQItTpwUQ&t=405s