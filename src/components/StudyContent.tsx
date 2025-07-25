import React from 'react';
import { motion } from 'framer-motion';

const topics = [
  { title: 'Java', color: 'text-orange-600', pdf: 'https://www.dropbox.com/scl/fi/yaws1rxt2pgcn4lbpiu73/java.pdf?rlkey=0c7iaadlin5l9tkmmydx700rv&st=q96gpl1i&dl=0' },
  { title: 'Spring', color: 'text-green-600', pdf: 'https://www.dropbox.com/scl/fi/zxa2li66llquv9pfkqsvo/spring-framework-1.pdf?rlkey=xbsbfxfuosk2b13jm9j0cipei&st=x3h75mmy&dl=0' },
  { title: 'Spring Boot', color: 'text-amber-600', pdf: 'https://www.dropbox.com/scl/fi/ivzvbfclwu5v6muz3lcgz/spring-boot-reference-1.pdf?rlkey=eif5zkkp82qc4yz2jllw2dcl2&st=u0kr6nkv&dl=0' },
  { title: 'Hibernate', color: 'text-teal-600', pdf: 'https://www.dropbox.com/scl/fi/vqb37ht372dtb0j2xswhz/Hibernate-ORM-User-Guide-1.pdf?rlkey=c6vuwtp4v4ksrpyxqcss589qi&st=ht7u7258&dl=0' },
  { title: 'HTML', color: 'text-red-500', pdf: 'https://www.dropbox.com/scl/fi/kwj6s6dtyd7fpizcedb66/html_tutorial-1.pdf?rlkey=3p818zuq49pjv8rghn9j7hdnr&st=fsjbe4qu&dl=0' },
  { title: 'CSS', color: 'text-blue-500', pdf: 'https://www.dropbox.com/scl/fi/zjl1f2cam5ac83kd36f10/css_tutorial-1.pdf?rlkey=m8mofpcibg2ld0afszqaswpee&st=z7yy1jdg&dl=0' },
  { title: 'JavaScript', color: 'text-yellow-500', pdf: 'https://www.dropbox.com/scl/fi/e0kuycljo64akql5569hy/javascript_tutorial-3.pdf?rlkey=yzw95fjxcaxo8vlfem029tnzp&st=jv1tr568&dl=0' },
  { title: 'React', color: 'text-cyan-600', pdf: 'https://www.dropbox.com/scl/fi/dh0uodw6ltt1x9wvjqe26/React-FAQ.pdf?rlkey=zn176f7063ca1kw3riovihh60&st=yj0g46fa&dl=0' },
  { title: 'RestAPI', color: 'text-fuchsia-600', pdf: 'https://www.dropbox.com/scl/fi/cfzozzto5gx5wjs5ru9jg/OpenAPI-Specification-Version-3.1.0-_-Swagger.pdf?rlkey=9srmjaow86ar8whmve2tu7k5f&st=xtzhzq3c&dl=0' },
  { title: 'Oracle Database', color: 'text-lime-600', pdf: 'https://www.dropbox.com/scl/fi/xh6eryleulndzvy2jt6pk/oracle.pdf?rlkey=ul1467vejylc5j00q35zvtjc1&st=frb4obrx&dl=0' },
  { title: 'C Basic', color: 'text-rose-600', pdf: 'https://www.dropbox.com/scl/fi/i82stn97hqxhch79mho3j/DECAP010_PROGRAMMING_IN_C-1.pdf?rlkey=xuhwsy07sswtn57rarnouyvrf&st=x98qcddo&dl=0' },
  { title: 'Git', color: 'text-teal-600', pdf: 'https://www.dropbox.com/scl/fi/shwch3pxlypvqtjxz8ki1/git.pdf?rlkey=huzw62siv3t1x3g7asjuq2lr7&st=8061xel2&dl=0' },
  { title: 'Bootstrap', color: 'text-gray-600', pdf: 'https://www.dropbox.com/scl/fi/oqli207rhgfvhnbhylj6d/Bootstrap.pdf?rlkey=1w8cfwq3g2f4yzrtpgqn19753&st=22c5x7m0&dl=0' },
    { title: 'Aptitude', color: 'text-yellow-900', pdf: 'https://www.dropbox.com/scl/fi/0myg6wics35xhmuivk265/100-Aptitude-Shortcuts-1.pdf?rlkey=qvostq3rcsqbeyyhfcpu7ctex&st=b3zc4wfh&dl=0' },

  
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
