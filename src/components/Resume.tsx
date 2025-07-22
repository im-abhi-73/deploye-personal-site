import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FileText } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(600); // Default width
  const containerRef = useRef<HTMLDivElement>(null);

  // Get container width for responsiveness
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setPageWidth(containerWidth - 40); // Add some padding
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-10 bg-white">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-800">
          <FileText className="w-6 h-6 text-black" />
          My Resume
        </h1>
        <p className="text-sm text-gray-500">Preview & Download</p>
      </div>

      {/* PDF Viewer */}
      <div
        className="w-full max-w-4xl p-4 mb-6 border shadow rounded-xl bg-gray-50"
        ref={containerRef}
      >
        <Document
          file="/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error('PDF load error:', err)}
          className="flex flex-col items-center"
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 text-sm font-medium text-white bg-black rounded-lg shadow hover:bg-gray-800"
      >
        Download Resume
      </a>
    </main>
  );
};

export default Resume;
