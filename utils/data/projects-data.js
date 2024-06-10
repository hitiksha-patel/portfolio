import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Real Estate Web App",
    description:
      "I've developed a comprehensive full-stack web app for Real Estate, offering seamless user registration, property search, profile management, and interaction through posts and chats. Users register with ease using a username, email, and password, accessing their accounts upon login. The property search feature simplifies finding properties via a search bar on the main page. Users can manage profiles, upload images, and add posts with ease, with saved posts for future reference. Additionally, the platform features a direct chat function for user interaction. Experience our platform for efficient real estate management",
    tools: [
      "Express",
      "MongoDB",
      "NodeJS",
      "ReactJS",
      "Cloudinary",
      "Vercel",
      "Git",
      "Socket.io.",
      "Prisma",
      "JWT",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "BlogFame",
    description:
      "Built a full-stack blog app with Django, focusing on user authentication, CRUD operations, and secure password management. This project deepened my understanding of Django, web development, and cloud deployment. I implemented secure user registration, login, email verification, and CRUD functionalities for managing blog posts. Also, integrated a secure password reset feature triggered by email notifications",
    tools: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap", "Heroku"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "BookShelf",
    description:
      "Developed a MERN stack web app for educational resource exploration with user authentication, utilizing React, Node.js, Express.js, and MongoDB. The app includes secure login, signup, and logout functionalities, with a free books section available without login. It offers additional course exploration post-login",
    tools: ["React", "NodeJS", "MongoDB", "Express", "JWT", "Vercel"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
