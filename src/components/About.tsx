"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsTags from "./MicroComponents/SkillsTags";
import { useTranslation } from "react-i18next";

const skills = [
  {
    name: "TypeScript",
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    color: "bg-cyan-400",
    hoverColor: "hover:bg-cyan-500",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    color: "bg-black",
    hoverColor: "hover:bg-neutral-800",
    link: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    color: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    link: "https://tailwindcss.com/",
  },
  {
    name: "HTML",
    color: "bg-orange-400",
    hoverColor: "hover:bg-orange-600",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    name: "CSS",
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-600",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    name: "Node.js",
    color: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    link: "https://nodejs.org/",
  },
  {
    name: "Git",
    color: "bg-orange-600",
    hoverColor: "hover:bg-orange-700",
    link: "https://git-scm.com/",
  },
  {
    name: "Docker",
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
    link: "https://www.docker.com/",
  },
  {
    name: "MySQL",
    color: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
    link: "https://www.mysql.com/",
  },
  {
    name: "MongoDB",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    link: "https://www.mongodb.com/",
  },
  {
    name: "UI/UX",
    color: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    link: "https://www.interaction-design.org/literature/topics/ui-design",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-400",
    hoverColor: "hover:bg-yellow-500",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Jest",
    color: "bg-pink-600",
    hoverColor: "hover:bg-pink-700",
    link: "https://jestjs.io/",
  },
  {
    name: "Testing Library",
    color: "bg-red-400",
    hoverColor: "hover:bg-red-500",
    link: "https://testing-library.com/",
  },
  {
    name: "GitHub Actions",
    color: "bg-gray-700",
    hoverColor: "hover:bg-gray-800",
    link: "https://docs.github.com/en/actions",
  },
  {
    name: "Figma",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    link: "https://www.figma.com/",
  },
  {
    name: "APIs REST",
    color: "bg-emerald-600",
    hoverColor: "hover:bg-emerald-700",
    link: "https://restfulapi.net/",
  },
  {
    name: "Scrum",
    color: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    link: "https://www.scrum.org/resources/what-is-scrum",
  },
  {
    name: "Kanban",
    color: "bg-yellow-600",
    hoverColor: "hover:bg-yellow-700",
    link: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban",
  },
  {
    name: "Estrutura de Dados",
    color: "bg-zinc-700",
    hoverColor: "hover:bg-zinc-800",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 py-36 mt-28 px-6 md:scroll-mt-15 scroll-mt-1 transition-colors duration-200"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Texto - animação vindo da esquerda */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              {t("about.greeting")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t("about.description")}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
              {skills.map((skill) => (
                <SkillsTags
                  key={skill.name}
                  name={skill.name}
                  color={skill.color}
                  hoverColor={skill.hoverColor}
                  link={skill.link}
                />
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 mb-8"></div>

            <motion.a
              href="/caminho/para/seu/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium inline-block hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("about.openCV")}
            </motion.a>
          </motion.div>

          {/* Imagem - animação vindo da direita */}
          <motion.div
            className="md:w-1/2 flex justify-center hover:scale-105 duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-950 rounded-xl transform rotate-3 z-0 transition-colors duration-200"></div>
              <div className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg transition-colors duration-200">
                <Image
                  src="/images/FotodePerfilTamanhoCorreto.png"
                  alt={t("about.imageAlt")}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
