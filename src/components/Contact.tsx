"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </motion.div> */}

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                {t("contact.contactInfo.title")}
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t("contact.contactInfo.email")}
                    </h4>
                    <a
                      href="mailto:marcosvini1009@gmail.com"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      marcosvini1009@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t("contact.contactInfo.whatsapp")}
                    </h4>
                    <a
                      href="https://wa.me/41998464689"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                      +55 (41) 99846-4689
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <FaLinkedin className="text-blue-700 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t("contact.contactInfo.linkedin")}
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/marcos-do-vale-/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/marcos-do-vale-/
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full mr-4">
                    <FaGithub className="text-gray-800 dark:text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t("contact.contactInfo.github")}
                    </h4>
                    <a
                      href="https://github.com/Marcos-Valee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white transition-colors"
                    >
                      github.com/Marcos-Valee
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                  {t("contact.contactInfo.socials")}
                </h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaLinkedin />,
                      url: "https://www.linkedin.com/in/marcos-do-vale-/",
                      color: "text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900"
                    },
                    {
                      icon: <FaGithub />,
                      url: "https://github.com/Marcos-Valee",
                      color: "text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    },
                    {
                      icon: <FaWhatsapp />,
                      url: "https://wa.me/41998464689",
                      color: "text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900"
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
