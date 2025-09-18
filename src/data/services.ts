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
      "I craft engaging and high-performance mobile applications.",
    description:
      "From concept to deployment, I develop captivating mobile apps for iOS and Android. Leveraging modern technologies, I ensure seamless performance, intuitive interfaces, and robust functionality tailored to your business goals. Delivering exceptional user experiences is my priority.",
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
    shortDescription: "I create responsive and visually stunning websites.",
    description:
      "I design and develop user-friendly websites that enhance your online presence. From simple landing pages to complex e-commerce platforms, I use the latest frameworks and technologies to deliver responsive, SEO-optimized, and visually appealing solutions tailored to your needs.",
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
    shortDescription: "I optimize and manage reliable database systems.",
    description:
      "I specialize in designing, managing, and optimizing database systems for performance and scalability. With expertise in SQL and NoSQL databases, I ensure data integrity, security, and efficiency, enabling your applications to handle data seamlessly and reliably.",
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
      "I strategize to align products with business goals and user needs.",
    description:
      "I collaborate to define clear goals, target audiences, and actionable roadmaps for product success. With expertise in product ideation, market analysis, and strategic planning, I help you unlock your product's full potential and drive long-term growth.",
  },
];
export default services;
