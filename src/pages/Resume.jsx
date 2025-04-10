import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header with title and download button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Resume</h1>
        <a
          href="https://drive.google.com/file/d/1qGPJGd8qtX1ZOKUJ9TNJgykmr3_J2si-/view?usp=drive_link"
          download
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center"
        >
          <Download size={18} className="mr-2" />
          Download PDF
        </a>
      </div>

      {/* Display PDF in iframe */}
      <div className="w-full h-[90vh] border rounded-lg shadow">
        <iframe
          src="https://drive.google.com/file/d/1qGPJGd8qtX1ZOKUJ9TNJgykmr3_J2si-/preview"
          title="Resume PDF"
          className="w-full h-full"
          style={{border:"none"}}
        />
      </div>
    </div>
  );
};

export default Resume;
