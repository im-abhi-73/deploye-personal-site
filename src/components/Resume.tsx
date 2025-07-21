import React from 'react';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="flex items-center justify-center gap-2 text-4xl font-bold text-gray-800">
            <FileText className="text-black w-7 h-7" />
            My Resume
          </h1>
          <p className="mt-2 text-sm text-gray-500">Preview & Download PDF</p>
        </div>

        {/* PDF Preview */}
        <div className="mb-6 overflow-hidden border-2 border-gray-200 shadow-xl rounded-xl">
          <iframe
            src="/resume.pdf"
            title="Resume PDF"
            className="w-full h-[80vh]"
          ></iframe>
        </div>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-3 font-medium text-white transition bg-black rounded-lg shadow hover:bg-gray-800"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
};

export default Resume;
