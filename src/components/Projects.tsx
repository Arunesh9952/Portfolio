import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "PetCare Website",
      description:
        "An e-commerce platform designed for pet owners to buy food, medications, and grooming products, along with booking pet care services. Built using HTML, CSS, JavaScript, and MySQL.",
      shortDescription:
        "Pet e-commerce and services platform for dogs with product purchases and service booking",
      image:
        "https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
      features: [
        "Pet food and medication catalog",
        "Grooming and boarding service booking",
        "Shopping cart and order management",
        "User login and profile management",
        "Search and filter products",
        "Admin panel for managing products and services",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Course Assessment System",
      description:
        "A web-based academic course assessment platform built using JavaScript and MySQL to manage student records and marks with validation.",
      shortDescription:
        "Academic assessment system with student records and grade management",
      image:
        "https://cdn.theeducationhub.org.nz/wp-content/uploads/2020/03/Principles-of-assessment-scaled.jpg",
      technologies: ["JavaScript", "HTML", "CSS", "MySQL", "Bootstrap"],
      features: [
        "Student registration and login",
        "Course and subject management",
        "Marks entry with input validation",
        "Automated grade calculation",
        "Search and filter student records",
        "Admin panel for managing courses and results",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "A job portal platform developed with ASP.NET Framework and SQL Server, enabling seamless interaction between job seekers and employers.",
      shortDescription:
        ".NET-based job portal with role-based access and application tracking",
      image:
        "https://www.nocturesolutions.com/Content/img/solutionBanners/job.jpg",
      technologies: [
        "ASP.NET Framework",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Bootstrap",
      ],
      features: [
        "Role-based authentication for employers and job seekers",
        "Job postings and resume uploads",
        "Advanced job search with filters (location, skills, salary)",
        "Application tracking system for candidates",
        "Admin dashboard for managing users and job listings",
        "Email notifications for job updates and application status",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "QuickBid Auction Platform",
      description:
        "A real-time online auction platform built using the MERN stack for seamless vehicle and product bidding.",
      shortDescription:
        "MERN-based live auction system with bidding and real-time updates",
      image:
        "https://images.zenu.com.au/1200-min/piblxqbc1uloro8zw6s967gqmat1b3io.jpg",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
      ],
      features: [
        "User authentication with JWT",
        "Live bidding with real-time updates (Socket.io)",
        "Vehicle and product listings with filters",
        "Auction countdown timer",
        "Bid history and winner announcement",
        "Admin panel for managing auctions and users",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Skin Cancer Classification using Deep Learning",
      description:
        "An AI-powered system that uses deep learning models to classify skin cancer from medical images. The system analyzes moles and skin spots to assist doctors in early detection and treatment decisions, making diagnosis faster and more accurate.",
      shortDescription:
        "AI-based skin cancer detection system using deep learning image classification",
      image:
        "https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy"],
      features: [
        "Skin image preprocessing and augmentation",
        "Convolutional Neural Network (CNN) model for classification",
        "Prediction of benign vs malignant skin lesions",
        "Visualization of classification results",
        "Helps doctors with faster decision-making",
        "Supports researchers in analyzing large datasets",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProjectData.title}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProjectData.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {selectedProjectData.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProjectData.liveUrl}
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View Live Site
                </a>
                <a
                  href={selectedProjectData.githubUrl}
                  className="flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-200"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;