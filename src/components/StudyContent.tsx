import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  { title: 'Java', color: 'text-orange-600', pdf: '/public/Java.pdf' },
  { title: 'Spring', color: 'text-green-600', pdf: '/pdfs/spring.pdf' },
  { title: 'Spring Boot', color: 'text-amber-600', pdf: '/pdfs/springboot.pdf' },
  { title: 'Hibernate', color: 'text-teal-600', pdf: '/pdfs/hibernate.pdf' },
  { title: 'HTML', color: 'text-red-500', pdf: '/public/html-tags-chart.pdf' },
  { title: 'CSS', color: 'text-blue-500', pdf: '/pdfs/css.pdf' },
  { title: 'JavaScript', color: 'text-yellow-500', pdf: '/pdfs/javascript.pdf' },
  { title: 'React', color: 'text-cyan-600', pdf: '/pdfs/react.pdf' },
  { title: 'RestAPI', color: 'text-fuchsia-600', pdf: '/pdfs/restapi.pdf' },
  { title: 'Oracle Database', color: 'text-lime-600', pdf: '/public/ORACLE_JOB(9AM).txt.pdf' },
  { title: 'C Basic', color: 'text-rose-600', pdf: '/pdfs/c-basic.pdf' },
  { title: 'Git', color: 'text-teal-600', pdf: '/public/Git.pdf' }
];

const StudyContent = () => {
  return (
    <main className="min-h-screen px-6 py-12 font-mono text-gray-800 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-extrabold text-gray-800"
        >
          📘 Study Topics
        </motion.h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.a
              key={topic.title}
              href={topic.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`block px-6 py-4 text-lg font-semibold transition transform bg-white border border-gray-300 rounded-lg shadow hover:shadow-md hover:scale-105 ${topic.color}`}
            >
              {topic.title}
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StudyContent;
