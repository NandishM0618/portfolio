"use client";
import { useState } from "react";
import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

export default (first) => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "experinces":
        return <Experiences />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-4 space-y-3 md:space-y-0 md:space-x-5">
          <div>
            <h2 className="ml-0 md:ml-3 text-black text-3xl md:text-4xl font-extrabold">
              Nandish M
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              "Full-Stack & Cloud Engineer skilled in DevOps, scalable systems,
              and building impactful digital solutions."
            </p>
          </div>
        </div>

        <div className=" ml-3 mr-3 mx-auto border-2 border-black/20 "></div>
        <div className="flex flex-col items-center justify-start p-8">
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 w-full sm:text-left">
            <div className="w-full">
              <button
                onClick={() => setActiveTab("about")}
                className={`mb-2 sm:mb-3 font-medium transition cursor-pointer ${
                  activeTab === "about"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                About me
              </button>
              <div
                className={`mx-auto border-2 transition ${
                  activeTab === "about" ? "border-black" : "border-black/20"
                }`}
              ></div>
            </div>

            <div className="w-full">
              <button
                onClick={() => setActiveTab("experinces")}
                className={`mb-2 sm:mb-3 font-medium transition cursor-pointer ${
                  activeTab === "experinces"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Experiences
              </button>
              <div
                className={`mx-auto border-2 transition ${
                  activeTab === "experinces"
                    ? "border-black"
                    : "border-black/20"
                }`}
              ></div>
            </div>

            <div className="w-full">
              <button
                onClick={() => setActiveTab("skills")}
                className={`mb-2 sm:mb-3 font-medium transition cursor-pointer ${
                  activeTab === "skills"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Skills & Works
              </button>
              <div
                className={`mx-auto border-2 transition ${
                  activeTab === "skills" ? "border-black" : "border-black/20"
                }`}
              ></div>
            </div>

            <div className="w-full">
              <button
                onClick={() => setActiveTab("contact")}
                className={`mb-2 sm:mb-3 font-medium transition cursor-pointer ${
                  activeTab === "contact"
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                Contact
              </button>
              <div
                className={`mx-auto border-2 transition ${
                  activeTab === "contact" ? "border-black" : "border-black/20"
                }`}
              ></div>
            </div>
          </nav>
          <div className="mt-8 w-full select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};
