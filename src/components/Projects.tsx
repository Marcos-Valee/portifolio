"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  FaGithub,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type Project = {
  photo: string;
  altPhoto: string;
  title: string;
  descriptionKey: string;
  gitHub?: string;
  deploy?: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    photo: "/images/projectsImages/siteAgencia.png",
    altPhoto: "Agencia Image",
    title: "Agência de Marketing",
    descriptionKey: "projects.projectDescriptions.agencia",
    deploy: "https://agencia-pinhao.vercel.app/",
    technologies: [
      "react",
      "typescript",
      "tailwindcss",
      "nextjs",
      "framerMotion",
      "nodemailer",
    ],
  },
  {
    photo: "/images/projectsImages/firebaseWeb.png",
    altPhoto: "React com Firebase Image",
    title: "React Firebase Auth",
    descriptionKey: "projects.projectDescriptions.reactFirebaseAuth",
    gitHub: "https://github.com/Marcos-Valee/react-firebase-auth-app",
    deploy: "https://react-firebase-marcos-vale.netlify.app/",
    technologies: ["react", "javascript", "tailwindcss", "firebase"],
  },
  {
    photo: "/images/projectsImages/jestImage.png",
    altPhoto: "React DevOps CI/CD Image",
    title: "React DevOps CI/CD",
    descriptionKey: "projects.projectDescriptions.reactDevOps",
    gitHub: "https://github.com/Marcos-Valee/DevOpsReact",
    technologies: [
      "react",
      "javascript",
      "tailwindcss",
      "jest",
      "githubActions",
    ],
  },
  {
    photo: "/images/projectsImages/imcCalculator.png",
    altPhoto: "IMCApp Image",
    title: "IMC Calculator",
    descriptionKey: "projects.projectDescriptions.imcCalculator",
    gitHub: "https://github.com/Marcos-Valee/IMC-Metric-and-Imperial",
    deploy: "https://imc-metric-and-imperial.netlify.app/",
    technologies: ["react", "javascript", "tailwindcss", "framerMotion"],
  },
];

const technologyIcons: Record<string, string> = {
  nextjs: "/images/imagesTecnlogies/nextJs.png",
  typescript: "/images/imagesTecnlogies/typeScript.png",
  tailwindcss: "/images/imagesTecnlogies/tailwind.png",
  react: "/images/imagesTecnlogies/react.png",
  framerMotion: "/images/imagesTecnlogies/motion.svg",
  firebase: "/images/imagesTecnlogies/firebase.svg",
  jest: "/images/imagesTecnlogies/jest.png",
  githubActions: "/images/imagesTecnlogies/gitHub.png",
  javascript: "/images/imagesTecnlogies/javascript.png",
  nodemailer: "/images/imagesTecnlogies/nodemailer.png",
};

export default function Projects() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      onSelect();

      return () => {
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:py-28 scroll-mt-7 bg-white dark:bg-gray-800 transition-colors duration-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="relative px-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100 flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.photo}
                      alt={project.altPhoto}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 2}
                    />
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {t(project.descriptionKey)}
                    </p>

                    <div>
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                        {t("projects.technologiesUsed")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(
                          (tech) =>
                            technologyIcons[tech] && (
                              <div
                                key={tech}
                                className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md"
                                aria-label={tech}
                              >
                                <Image
                                  src={technologyIcons[tech]}
                                  alt={tech}
                                  width={16}
                                  height={16}
                                  className="object-contain"
                                />
                                <span className="text-xs text-gray-700 dark:text-gray-200 capitalize">
                                  {tech.replace("-", " ")}
                                </span>
                              </div>
                            )
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition text-sm"
                      >
                        <FaGithub className="text-lg" />
                        {project.gitHub ? t("projects.code") : "Private"}
                      </a>
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                      >
                        <FiExternalLink className="text-lg" />
                        {project.deploy ? "Demo" : "Private"}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chevrons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800/90 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full shadow-md transition hover:scale-110 cursor-pointer"
            aria-label="Projetos anteriores"
          >
            <FaChevronCircleLeft className="text-2xl" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800/90 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full shadow-md transition hover:scale-110 cursor-pointer"
            aria-label="Próximos projetos"
          >
            <FaChevronCircleRight className="text-2xl" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 rounded-full transition cursor-pointer ${
                  index === selectedIndex
                    ? "bg-blue-600 dark:bg-blue-400 w-6"
                    : "bg-gray-300 dark:bg-gray-600 w-3"
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
