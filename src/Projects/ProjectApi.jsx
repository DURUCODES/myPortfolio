import formimg from "../assets/image/form.png";
import country from "../assets/image/country.png";
import ecom from "../assets/image/shop.png";
import movie from "../assets/image/mov.png";
import capitalgold1 from "../assets/image/capitalgold1.png";
import { FaInternetExplorer } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const projectApi = [
  {
    name: "Capital Gold Bank",
    description:
      "Capital Gold - Banking UI/UX Application Developed a sleek banking UI/UX application using ReactJS and Tailwind CSS, designed for a seamless user experience. The application features a home page that displays the latest financial news, keeping users informed and engaged. Additionally, it includes an interactive stock chart for cryptocurrency, providing real-time data insights. With a focus on user-friendliness and performance, this project showcases my ability to create visually appealing and efficient applications that enhance financial management",
    url: "https://capital-gold-bank-ngum.vercel.app/",
    github: "https://github.com/DURUCODES/Capital-Gold-bank.git",
    image: capitalgold1,
    date: 2024,
    tools: ["ReactJs", "Tailwind CSS", " Framer Motion", "Api"],
    live: <FaInternetExplorer />,
    git: <FaGithub />,
  },

  {
    name: "Movie Hub",
    description:
      "I developed a dynamic movie streaming web application using ReactJS, which integrates with The Movie Database (TMDb) API to display trending and popular films and TV shows. The application features a user-friendly interface that enables users to easily search for a wide variety of movies and shows, enhancing their overall viewing experience. Emphasizing responsiveness and accessibility, this project showcases my ability to create engaging and functional web applications tailored to meet user needs",
    url: "https://moviehub-olive.vercel.app/",
    github: "https://github.com/DURUCODES/-movie-site-react",
    image: movie,
    date: 2024,
    tools: ["ReactJs", "Tailwind CSS", " (TMDb) API"],
    live: <FaInternetExplorer />,
    git: <FaGithub />,
  },
  {
    name: "Multi-step form",
    url: "https://multi-step-form-seven-roan.vercel.app/",
    date: 2024,
    github: " https://github.com/DURUCODES/multi-step-form.git",
    image: formimg,
    description:
      "Created a versatile multi-form application as part of a free project for Frontend Mentor, utilizing ReactJS and the useContext hook for efficient state management. This application streamlines user input across multiple forms, enhancing the overall user experience. The design emphasizes responsiveness and usability, demonstrating my ability to implement effective solutions that meet user needs while adhering to modern development practices.",
    tools: ["ReactJs", "Tailwind CSS", " Context Api", "React Hooks"],
    live: <FaInternetExplorer />,
    git: <FaGithub />,
  },
  {
    name: "Country Api",
    url: "https://testmy-api-n5x5.vercel.app/",
    github: "https://github.com/DURUCODES/testmyApi.git",
    image: country,
    description:
      "Country Explorer is an informative and interactive platform that brings the world’s countries to your fingertips. Built with React and powered by a dynamic API, this tool allows users to quickly access detailed, up-to-date information about any country, from geographical facts to population data, languages, and more.",
    date: 2024,
    tools: ["ReactJs", "Vanilla CSS", " Context Api"],
    live: <FaInternetExplorer />,
    git: <FaGithub />,
  },
  {
    name: "E-Shop",
    github: "https://github.com/DURUCODES/-new.-ecommerce.git",
    url: "https://new-ecommerce-green.vercel.app/",
    description:
      "E-Shop  is a sleek and user-friendly e-commerce platform designed with React.js and Tailwind CSS to provide a seamless shopping experience. With intuitive navigation, a responsive design, and fast performance, ShopEase ensures that shopping online is as enjoyable as it is easy. Whether you're browsing through the latest trends or checking out with just a few clicks, every step is optimized for convenience. ",
    image: ecom,
    date: 2024,
    tools: ["ReactJs", "Tailwind CSS", "Redux"],
    live: <FaInternetExplorer />,
    git: <FaGithub />,
  },
];
