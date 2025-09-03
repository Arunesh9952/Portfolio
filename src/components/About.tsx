import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User Focused",
      description: "Creating intuitive experiences that users love"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                I am a passionate Information Technology undergraduate (B.Tech,
                2026) with skills in full-stack web development and
                problem-solving.
              </p>

              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I enjoy working on team projects where I can contribute to
                  both frontend and backend, ensuring seamless and responsive
                  user experiences. With certifications in JavaScript, React,
                  MongoDB, and Java, I continuously enhance my technical
                  expertise.
                </p>
                <p>
                  Beyond coding, I bring strong communication, teamwork, and
                  time management skills, proven through hackathon participation
                  and paper presentations. I am driven to apply my knowledge to
                  solve real-world problems and grow as a software developer in
                  dynamic environments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative">
              <div className="relative z-10">
                <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                        JD
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Professional Photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;