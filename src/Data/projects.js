export const projects = [
  {
    title: "Plant Shop",
    features: [
      "real time cart update",
      "stripe payment integration",
      "feedback on error and sucess"
    ],
    description:
      "E-commerce web app for plants. A user can purchase product by adding to cart and making card payment online.",
    techUsed: [
      "ReactJs",
       "React router",
       "Stripe test API",
      "useReducer Hook",
      "Node Js",
      "express",
      "REST API"
    ],
    link: {
      github: "https://github.com/aviiwithu/reactPlantShop",
      site: "http://editogram.in",
    },
    image: "/image/plant-store.png",
  },
  {
    title: "Article App",
    features:[
      "animation",
      "only authenticated user can post article",
      "ask user to login if not logged in",
      "sign up and save data in database",
      "REST API",
      "password encryption"
    ],
    description:
      "Full Stack web app with CRUD operations. User can create account and start posting articles, posted articles can be seen by any user. User can only edit and delete their own posted articles.",
      techUsed: [
      "ReactJs",
      "styled-components",
      "React-router",
      "JWT Auth",
      "Framer Motion",
      "Redux",
      "NodeJs",
      "ExpressJs",
      "mongoDB"
    ],
    link: {
      github: "https://github.com/aviiwithu/fatmug",
      site: "http://fatmug.netlify.app",
    },
    image: "/image/articles.png",
  },
  {
    title: "Recipe Finder",
    features:[
      "get real time details from external source",
      "populate data in UI",
      "getting data with authentication"
    ],
    description:
      "A recipe searching app, can search any recipe and data is populated in UI. Edamam api is used to build the app",
      techUsed: [
      "ReactJs",
      "CSS3","REST API","React Hooks"
    ],
    link: {
      github: "https://github.com/aviiwithu/recipe-app",
      site: "https://recipi.netlify.app/",
    },
    image: "/image/recipe.png",
  },
  {
    title: "Tesla",
    features:[
      "scroll animation",
      "re-usable components",
      "sidebar display"

    ],
    description:
      "Tesla electric car website clone, added animation with react reveal",
      techUsed: [
      "ReactJs",
      "CSS3","Styled-Components","React Hooks","React Reveal"
    ],
    link: {
      github: "http://github.com",
      site: "https://tsla.netlify.app/",
    },
    image: "/image/tesla.png",
  },
  {
    title: "File Sharing",
    features:[
      "upload file and generate link for download",
      "auto delete files after 24 Hours",
      "drag and drop",
      "upload progress bar",
      "copy to clipboard",
      "mobile responsive",
      "scheduled crown job"
    ],
    description:
      "file sharing with generated link, link expires in 24 Hours",
      techUsed: [
      "ReactJs",
      "CSS3","React Hooks","Node Js","axios","express","multer","MongoDB","nodemailer"
    ],
    link: {
      github: "https://github.com/aviiwithu/file-sharing",
      site: "http://file.kavinash.me/",
    },
    image: "/image/file-sharing.png",
  },
];
