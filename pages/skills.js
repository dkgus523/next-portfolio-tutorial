/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const allSkills = [
  {
    id: "html5",
    name: "HTML5",
    bgColor: "#f06529",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "css3",
    name: "CSS3",
    bgColor: "#2965f1",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "javascript",
    name: "JavaScript",
    bgColor: "#f0db4f",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    bgColor: "#007acc",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "sass",
    name: "Sass",
    bgColor: "#cc6699",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    bgColor: "#38bdf8",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "jquery",
    name: "jQuery",
    bgColor: "#0769ad",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    bgColor: "#000000",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "react",
    name: "React",
    bgColor: "#61dbfb",
    color: "#ffffff",
    category: "Frontend",
  },
  {
    id: "nodejs",
    name: "Node.js",
    bgColor: "#3c873a",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "java",
    name: "Java",
    bgColor: "#5382a1",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "csharp",
    name: "C#",
    bgColor: "#4a148c",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "php",
    name: "PHP",
    bgColor: "#8993be",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "mysql",
    name: "MySQL",
    bgColor: "#ff9100",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "restapi",
    name: "RESTful API",
    bgColor: "#38bdf8",
    color: "#ffffff",
    category: "Backend",
  },
  {
    id: "aws",
    name: "AWS",
    bgColor: "#f79b26",
    color: "#ffffff",
    category: "DevOps",
  },
  {
    id: "vercel",
    name: "Vercel",
    bgColor: "#000000",
    color: "#ffffff",
    category: "DevOps",
  },
  {
    id: "docker",
    name: "Docker",
    bgColor: "#2468ee",
    color: "#ffffff",
    category: "DevOps",
  },
  {
    id: "jira",
    name: "Jira",
    bgColor: "#2f74c0",
    color: "#ffffff",
    category: "Developer Tools",
  },
  {
    id: "notion",
    name: "Notion",
    bgColor: "#000000",
    color: "#ffffff",
    category: "Developer Tools",
  },
  {
    id: "slack",
    name: "Slack",
    bgColor: "#3eb991",
    color: "#ffffff",
    category: "Developer Tools",
  },
  {
    id: "git",
    name: "Git",
    bgColor: "#000000",
    color: "#ffffff",
    category: "Developer Tools",
  },
  {
    id: "vscode",
    name: "VS Code",
    bgColor: "#007acc",
    color: "#ffffff",
    category: "Developer Tools",
  },
];

const categories = ["Frontend", "Backend", "DevOps", "Developer Tools"];
const categoryImages = {
  Frontend: "/frontend.png",
  Backend: "/backend.png",
  DevOps: "/devops.png",
  "Developer Tools": "/developer_tools.png",
};

export default function Skills() {
  const [skills, setSkills] = useState(
    categories.map((category) => ({ category, items: [] }))
  );
  const [removedSkills, setRemovedSkills] = useState(allSkills);

  const addSkillToCategory = (skill) => {
    setSkills((prevSkills) =>
      prevSkills.map((category) =>
        category.category === skill.category
          ? { ...category, items: [...category.items, skill] }
          : category
      )
    );
    setRemovedSkills((prev) => prev.filter((item) => item.id !== skill.id));
  };

  return (
    <Layout>
      <Head>
        <title>A Hyeon's Portfolio</title>
        <meta name="description" content="오늘도 빡코딩!" />
        <link rel="icon" href="/fox-favicon.png" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* All Skills Section */}
          <div className="text-center mb-10">
            <h2 className="sm:text-2xl text-xl font-medium title-font text-gray-900 mb-4">
              All Skills
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              제가 직접 다루어본 기술 스택입니다. 클릭하면 각 카테고리로
              이동합니다.
            </p>
            <br />
            <div className="flex flex-wrap gap-2 justify-center">
              <AnimatePresence>
                {removedSkills.map((item) => (
                  <motion.div
                    key={item.id}
                    className="rounded-full px-3 py-1 text-sm font-semibold cursor-pointer"
                    style={{
                      backgroundColor: item.bgColor,
                      color: item.color,
                    }}
                    onClick={() => addSkillToCategory(item)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-wrap -m-4">
            {skills.map((category) => (
              <div
                key={category.category}
                className="p-4 lg:w-1/4 sm:w-1/2 w-full"
              >
                <div className="flex items-center mb-4">
                  {/* Category Image */}
                  <img
                    src={categoryImages[category.category]}
                    alt={category.category}
                    className="w-8 h-8 mr-2"
                  />
                  {/* Category Title */}
                  <h2 className="font-medium title-font tracking-widest text-gray-900 mb-2 mt-2 text-sm sm:text-left text-center">
                    {category.category}
                  </h2>
                </div>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  <ul className="flex flex-wrap gap-2">
                    <AnimatePresence>
                      {category.items.map((item) => (
                        <motion.li
                          key={item.id}
                          className="rounded-full px-3 py-1 text-sm font-semibold"
                          style={{
                            backgroundColor: item.bgColor,
                            color: item.color,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {item.name}
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}