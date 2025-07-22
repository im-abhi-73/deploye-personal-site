import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Student Management System",
    techStack: [{ name: "Spring Boot" }, { name: "Thymeleaf" }, { name: "MySQL" }],
    features: ["CRUD operations for students", "Bootstrap responsive UI", "Pagination & validation"],
    status: "Completed",
    diagram: "/public/Ass.jpg",
    github: "https://github.com/yourusername/student-management",
    demo: "https://student-management-demo.com",
  },
  {
    title: "Online Exam Portal",
    techStack: [{ name: "React" }, { name: "Spring Boot" }, { name: "Hibernate" }],
    features: ["Role-based access (Admin, User)", "Live timer and auto-submit exam", "Analytics with chart reports"],
    status: "Working",
    diagram: "/images/online-exam-architecture.png",
    github: "https://github.com/yourusername/online-exam",
    demo: "",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [showDiagram, setShowDiagram] = useState(false);

  const openProject = (project) => {
    setSelected(project);
    setShowDiagram(false);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-green-700 bg-green-100";
      case "working":
        return "text-yellow-800 bg-yellow-100";
      default:
        return "text-gray-700 bg-gray-200";
    }
  };

  return (
    <section className="px-4 py-16 font-mono bg-gray-100 md:px-12">
      <h2 className="mb-12 text-4xl font-bold text-center text-black">🚀 My Projects</h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 transition bg-white shadow-md cursor-pointer rounded-xl hover:shadow-xl"
            onClick={() => openProject(project)}
          >
            <h3 className="mb-3 text-lg font-bold text-gray-800">
              {index + 1}. {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="px-3 py-1 bg-gray-200 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className={`text-sm inline-block px-3 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-[90%] max-w-2xl relative max-h-[90vh] overflow-auto font-mono"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-4 text-2xl font-bold text-black">{selected.title}</h3>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                {selected.techStack.map((tech, idx) => (
                  <div key={idx} className="px-3 py-1 bg-gray-200 rounded-full">
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>

              <ul className="mb-4 text-gray-700 list-disc list-inside">
                {selected.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>

              {!showDiagram && (
                <button
                  className="mb-4 text-sm font-semibold text-gray-700 underline"
                  onClick={() => setShowDiagram(true)}
                >
                  Show Diagram
                </button>
              )}

              {showDiagram && (
                <img
                  src={selected.diagram}
                  alt="Diagram"
                  className="mb-4 border border-gray-300 rounded-lg"
                />
              )}

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-black rounded hover:bg-gray-900"
                >
                  <Github size={16} />
                  GitHub
                </a>

                {selected.status.toLowerCase() === "completed" && selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gray-700 rounded hover:bg-gray-800"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}

                {selected.status.toLowerCase() !== "completed" && (
                  <span className="px-3 py-1 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full">
                    🔧 Working Mode
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute text-lg font-bold text-gray-500 top-4 right-4 hover:text-red-500"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
