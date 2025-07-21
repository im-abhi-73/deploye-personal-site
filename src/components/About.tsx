import React from 'react';
import { motion } from 'framer-motion';




const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <main className="min-h-screen px-8 py-16 font-mono text-gray-800 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Unique Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Unique Animated Container */}
          <div className="relative group">
            <div className="w-40 h-40 p-1 transition-transform duration-500 rounded-full shadow-lg bg-gradient-to-br from-indigo-400 to-purple-500 group-hover:rotate-3">
              <div className="w-full h-full p-1 bg-white rounded-full">
                <img
                  src="/Ass.jpg"
                  alt="Abhishek Ahire"
                  className="object-cover w-full h-full transition duration-500 rounded-full hover:scale-105"
                />
              </div>
            </div>

            {/* Glowing Effect */}
            <div className="absolute inset-0 transition rounded-full animate-pulse bg-gradient-to-br from-purple-300 to-indigo-200 opacity-20 blur-xl group-hover:opacity-40" />
          </div>

          {/* Name and Title */}
          <h1 className="mt-6 text-5xl font-bold text-gray-700">Abhishek Ahire</h1>
          <p className="mt-4 text-lg text-gray-600">
            Fullstack Java Developer | Problem Solver | Tech Enthusiast
          </p>
        </motion.section>

        {/* Qualification Section */}
       <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="p-8 mt-8 bg-white shadow-md rounded-2xl"
>
  <h2 className="mb-4 text-2xl font-semibold text-gray-700">🎓 Qualifications</h2>

  <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
    {[
      "Bachelor’s Degree in Computer Science",
      "Fullstack Java Developer Certification – Naresh IT, Hyderabad",
      "Hands-on experience with real-world projects",
    ].map((item, i) => (
      <motion.li
        key={i}
        custom={i}
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="pl-2"
      >
        {item}
      </motion.li>
    ))}
  </ul>
</motion.section>



        {/* Skills Section */}
       <motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="p-8 bg-white shadow-md rounded-2xl"
>
  <h2 className="mb-4 text-2xl font-semibold text-gray-700">🛠 Skills</h2>

  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
    {[
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ].map((skill, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center p-3 transition-transform bg-gray-100 rounded-xl hover:bg-gray-200"
      >
        <img src={skill.icon} alt={skill.name} className="object-contain w-12 h-12 mb-2" />
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
      </motion.div>
    ))}
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="p-8 mt-8 bg-white shadow-md rounded-2xl"
>
  <h2 className="mb-4 text-2xl font-semibold text-gray-700">🖥 Operating Systems</h2>

  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
    {[
      {
        name: "Windows",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ].map((os, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="flex flex-col items-center p-3 transition-transform bg-gray-100 rounded-xl hover:bg-gray-200"
      >
        <img
          src={os.icon}
          alt={os.name}
          className="object-contain w-12 h-12 mb-2"
        />
        <span className="text-sm font-medium text-gray-700">{os.name}</span>
      </motion.div>
    ))}
  </div>
</motion.section>



<motion.section
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="p-8 mt-8 bg-white shadow-md rounded-2xl"
>
  <h2 className="mb-4 text-2xl font-semibold text-gray-700">💻 IDEs & Tools</h2>

  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
    {[
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "Eclipse",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
      },
    ].map((tool, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1, rotate: 1 }}
        className="flex flex-col items-center p-3 transition-transform bg-gray-100 rounded-xl hover:bg-gray-200"
      >
        <img
          src={tool.icon}
          alt={tool.name}
          className="object-contain w-12 h-12 mb-2"
        />
        <span className="text-sm font-medium text-gray-700">{tool.name}</span>
      </motion.div>
    ))}
  </div>
</motion.section>


{/* Contact Section */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="p-8 mt-8 text-center bg-white shadow-md rounded-2xl"
>
  <h2 className="mb-4 text-2xl font-semibold text-gray-700">📞 Contact</h2>
  
  <p className="mb-2 text-gray-700">
    <strong>📱 Mobile:</strong>{' '}
    <a href="tel:+917378561194" className="text-blue-600 underline hover:text-blue-800">
      +91 73785 61194
    </a>
  </p>
  
  <p className="text-gray-700">
    <strong>✉️ Email:</strong>{' '}
    <a href="mailto:abheepatil2002@gmail.com" className="text-blue-600 underline hover:text-blue-800">
      abheepatil2002@gmail.com
    </a>
  </p>
</motion.section>



      </div>
    </main>
  );
};

export default About;
