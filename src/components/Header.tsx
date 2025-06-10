"use client";

import "@/lib/i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    name: "Português",
    flag: "/images/flagBrazil.png",
  });

  useEffect(() => {
    setMounted(true);

    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang === "en") {
      setCurrentLanguage({
        name: "English",
        flag: "/images/flagUnitedKingdom.png",
      });
    } else {
      setCurrentLanguage({
        name: "Português",
        flag: "/images/flagBrazil.png",
      });
    }
  }, []);

  const { theme, setTheme } = useTheme();

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageOpen(false);
  };

  const changeLanguage = (language: { name: string; flag: string }) => {
    setCurrentLanguage(language);
    setIsLanguageOpen(false);
    setIsMobileMenuOpen(false);

    if (language.name === "Português") {
      i18n.changeLanguage("pt");
      localStorage.setItem("i18nextLng", "pt");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("i18nextLng", "en");
    }
  };

  const languages = [
    { name: "Português", flag: "/images/flagBrazil.png" },
    { name: "English", flag: "/images/flagUnitedKingdom.png" },
  ];

  const { t, i18n } = useTranslation();

  if (!mounted || !i18n.isInitialized) return null;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-sm z-50 p-5 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo/Nome */}
        <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
          <span className="text-blue-600 dark:text-blue-400">&lt;</span>
          Marcos
          <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#heroBanner"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.home")}
          </Link>
          <Link
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.about")}
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.projects")}
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {t("header.contact")}
          </Link>

          {/* Toggle de Tema */}
          <button
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema"
          >
            {theme === "dark" ? (
              <IoSunnySharp className="text-yellow-300" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>

          {/* Seletor de Idioma */}
          <div className="relative ml-4 border border-gray-300 dark:border-gray-600 h-10 p-2 rounded transition-colors">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <Image
                src={currentLanguage.flag}
                alt={currentLanguage.name}
                width={20}
                height={15}
                className="w-6 h-4"
              />
              <span>{currentLanguage.name}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-600"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => changeLanguage(lang)}
                      className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left transition-colors cursor-pointer"
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={15}
                        className="w-6 h-4 mr-2"
                      />
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Botão para menu mobile */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 text-3xl"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Menu Mobile com AnimatePresence */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-17 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6 z-40"
            >
              <div className="flex flex-col space-y-6">
                <Link
                  href="#heroBanner"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {t("header.home")}
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {t("header.about")}
                </Link>
                <Link
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {t("header.projects")}
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={toggleMobileMenu}
                >
                  {t("header.contact")}
                </Link>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Toggle de Tema Mobile */}
                  <button
                    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Alternar tema"
                  >
                    {theme === "dark" ? (
                      <IoSunnySharp className="text-yellow-300" />
                    ) : (
                      <FaMoon className="text-gray-700" />
                    )}
                  </button>

                  {/* Seletor de Idioma Mobile */}
                  <div className="relative border border-gray-300 dark:border-gray-600 h-10 p-2 rounded transition-colors">
                    <button
                      onClick={toggleLanguageMenu}
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      <Image
                        src={currentLanguage.flag}
                        alt={currentLanguage.name}
                        width={20}
                        height={15}
                        className="w-6 h-4"
                      />
                      <span>{currentLanguage.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isLanguageOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isLanguageOpen && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-600"
                        >
                          {languages.map((lang) => (
                            <button
                              key={lang.name}
                              onClick={() => {
                                changeLanguage(lang);
                              }}
                              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left transition-colors cursor-pointer"
                            >
                              <Image
                                src={lang.flag}
                                alt={lang.name}
                                width={20}
                                height={15}
                                className="w-6 h-4 mr-2"
                              />
                              {lang.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}