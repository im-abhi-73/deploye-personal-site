import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Full Stack Java Developer",
    issuer: "Naresh IT, Hyderabad",
    imageUrl: "https://i.postimg.cc/yxCmfHHy/Nareshit.jpg",
  },
  {
    id: 2,
    title: "DSA with Java",
    issuer: "Apna College",
    imageUrl: "https://i.postimg.cc/VL19nm4Y/Apanacollege.png",
  },
  {
    id: 3,
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    imageUrl: "https://i.postimg.cc/TYr7vtNP/IMG-9197.jpg",
  },
];

const CertificatePage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-6 py-16 bg-gray-100"
    >
      <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">
        🎓 My Certifications
      </h2>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden transition-all duration-300 bg-white border shadow-sm cursor-pointer rounded-2xl hover:shadow-lg"
            onClick={() => setSelected(cert)}
          >
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="object-contain w-32 h-32 mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Viewing Certificate */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 shadow-2xl w-[90%] max-w-3xl"
            >
              <h3 className="mb-4 text-xl font-bold text-center text-gray-800">
                {selected.title}
              </h3>
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full border rounded-lg"
              />
              <div className="mt-6 text-right">
                <button
                  className="px-4 py-2 text-sm font-medium text-white transition bg-red-600 rounded hover:bg-red-700"
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificatePage;
