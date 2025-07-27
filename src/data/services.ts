import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Mobile App Development",
    icons: [
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/firebase.svg",
      "/skills/java.svg",
      "/skills/ios.svg",
    ],
    shortDescription:
      "I create engaging mobile applications for your audience.",
    description:
      "I create captivating mobile apps from concept to deployment for iOS and Android. Using cutting-edge technologies, I ensure seamless performance, intuitive interfaces, and robust functionality that align with your business goals. Enjoy a flawless user experience and outstanding results.",
  },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/html.svg",
      "/skills/css.svg",
      "/skills/react.svg",
      "/skills/javascript.svg",
      "/skills/typescript.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 3,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/skills/collaboration.svg",
      "/skills/thinking.svg",
      "/skills/analytical.svg",
      "/skills/ubuntu.svg",
    ],
    shortDescription:
      "I define goals, target audiences, and roadmap for success.",
    description:
      "I collaborate to define clear goals, target audiences, and a success roadmap. My expertise in product ideation and market analysis ensures your product meets user needs and aligns with your business strategy for long-term growth and full potential realization. Drive your product's success with strategic planning.",
  },
];

export default services;
