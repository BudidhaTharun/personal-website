
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/tharunbudidha/image/upload/v1743851128/EasyMed_vexgai.png"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">EasyMed - Appointment Booking</h2>
            <p className="text-gray-600 mb-4">
            A full-stack doctor-patient appointment booking platform built with React, Node.js, and MongoDB.
            Includes secure authentication, role-based dashboards, and Razorpay payment integration.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/BudidhaTharun/EasyMed" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://github.com/BudidhaTharun/EasyMed" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/tharunbudidha/image/upload/v1743851128/CampusFix_bxhaxb.png"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">CampusFix: College Maintenance Request Platform</h2>
            <p className="text-gray-600 mb-4">
            A web application designed to streamline campus issue reporting and resolution. 
            Built using React, Node.js, and MongoDB with real-time status tracking and role-based access for students and admins.

            </p>
            <div className="flex space-x-4">
              <a href=" https://github.com/BudidhaTharun/CampusFix" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://campusfix-budidha-tharuns-projects.vercel.app" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/tharunbudidha/image/upload/v1743851124/MessageKaro_cuw9vn.png"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Connect - Real-Time Chat Application</h2>
            <p className="text-gray-600 mb-4">A full-stack chat application enabling real-time communication between users
              . Built using React, Node.js, and Socket.io with features like user authentication, live messaging, and modern UI for seamless interaction.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/BudidhaTharun/Connect" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href=" https://letsconnect1-frontend.onrender.com/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/tharunbudidha/image/upload/v1743851127/Spotify_bpuhu1.png"
            alt="Project 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Spotify UI Clone</h2>
            <p className="text-gray-600 mb-4">
            A visually accurate clone of Spotify's user interface built using only HTML5 and CSS3. 
            Focused on layout design, responsive behavior, and styling to closely mimic the real platform’s aesthetics and user experience.

            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/BudidhaTharun/Spotify-Interface" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://budidhatharun.github.io/Spotify-Interface" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
