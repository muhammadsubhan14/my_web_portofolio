"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/projectCard";
import ProjectTag from "@/components/projectTag";
// data
const projectData = [
  {
    id: 1,
    title: "Pintar Lab",
    descripton:
      "a web-based e-learning platform, where students can learn. Tech: React.js , Sequelize, State management, MongoDb, tailwind, daisyUI, express.js, supertest, node.js",
    image: "/project/pintarlabs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FINAL-PROJECT-HACKTIV8-HCK67",
    previewUrl: "https://pintarlabs.web.app/",
  },
  {
    id: 2,
    title: "Hansmove (clone netflix)",
    descripton:
      "a web-based streaming service, subscribe to watch movies.Tech: React.js , Sequelize, State management, 3 Party APIs, postgresql, tailwind, daisyUI, express.js, node.js",
    image: "/project/netflix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/muhammadsubhan14/IP-HCK67",
    previewUrl: "https://muhammadsubhan14.github.io/IP-HCK67/",
  },
  {
    id: 3,
    title: "Chatapp",
    descripton:
      "Our platform is a real-time social media network enabling users to connect, chat,and interact real-time.Tech: React.js , Sequelize, State management, 3 Party APIs, postgresql, tailwind, daisyUI, express.js, node.js,soketIo",
    image: "/project/chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rt-datechat",
    previewUrl: "https://github.com/rt-datechat",
  },
  {
    id: 4,
    title: "Uniqlo Clone",
    descripton:
      "A web-based ecommerce platform specializing in clothing. Tech: React Native, Next.js, Typescript, mongodb, tailwind,",
    image: "/project/uniqlo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/H8-FSJS-P3S6/gc02-muhammadsubhan14",
    previewUrl: "https://github.com/H8-FSJS-P3S6/gc02-muhammadsubhan14",
  },
  {
    id: 4,
    title: "file share",
    descripton:
      "Our platform is a real-time social media network enabling users to connect, chat,and interact real-time.Tech: React.js , Sequelize, State management, 3 Party APIs, postgresql, tailwind, daisyUI, express.js, node.js,soketIo",
    image: "/project/fileshare.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/file-sharing-app/group-project",
    previewUrl: "https://sharefile-group-project.web.app/",
  },
];

export default function PortfolioPage() {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div className="min-h-screen bg-[#E9F3FF] ">
      <h2 className="text-3xl font-bold text-center my-8 text-Black ">
        My Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.descripton}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  );
}
