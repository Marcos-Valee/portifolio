"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function HeroBanner() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
      ref={ref}
      className="w-full py-20"
    >
      <section className="bg-white dark:bg-gray-800 px-6 scroll-mt-40 transition-colors duration-200" id="heroBanner">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center min-h-[60vh]">
          {/* Texto à esquerda */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Marcos do Vale
            </h1>
            <h2 className="text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              {t("hero.subtitle")}
            </h2>
            <hr className="border-blue-600 dark:border-blue-400 w-72 mx-auto md:mx-0" />
            
            {/* Links sociais */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <Link
                href="https://github.com/Marcos-Valee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-lg font-semibold hover:border-blue-400 dark:hover:border-blue-400"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/marcos-do-vale-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-lg font-semibold hover:border-blue-400 dark:hover:border-blue-400"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Imagem à direita com animação pulsante */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full max-w-[500px] aspect-square rounded-lg overflow-hidden p-1 transition-colors duration-200">
              <Image
                src="/images/banner.svg"
                alt={t("hero.imageAlt")}
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
