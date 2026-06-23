import { motion } from "framer-motion";

const projects = [
  {
    title: "FK Consultancy Platform",
    year: "2025",
    tech: "PHP • JavaScript • MySQL • REST APIs",
    description:
      "Led end-to-end development of a production client platform serving international users. Improved load times by 40% and reduced server latency by 25% through caching and query optimization.",
    link: "https://fkconsultancy.se/",
  },
  {
    title: "Deepfake Detection System",
    year: "2024",
    tech: "PyTorch • MTCNN • FaceNet • LSTM",
    description:
      "Built a deep learning pipeline for detecting manipulated media using face detection, feature extraction, identity verification, and sequence modeling.",
  },
  {
    title: "Hotel Booking Platform (iNNjOi)",
    year: "2024",
    tech: "PHP • MySQL • JavaScript",
    description:
      "Developed a complete hotel booking solution with room search, booking management, admin dashboard, secure authentication, and responsive design.",
  },
  {
    title: "Institute Coaching Center Platform",
    year: "2024",
    tech: "React.js • Firebase",
    description:
      "Created a management system for schedules, student records, and announcements with real-time synchronization.",
    link: "https://ispace-orpin.vercel.app/",
  },
  {
    title: "Hero Running Mode ON",
    year: "2023",
    tech: "JavaScript • HTML5 Canvas",
    description:
      "Designed and developed a cross-platform 2D game with smooth controls, scoring mechanics, and engaging gameplay.",
  },
  {
    title: "ScholarGuide Website",
    year: "2023",
    tech: "WordPress • Bootstrap",
    description:
      "Built a responsive educational website focused on usability, navigation, and mobile experience.",
    link: "https://scholarsguide.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ backgroundColor: "#ff2a2a" }}
      className="py-24 px-6 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>

        <p className="text-white/80 text-lg mb-16">
          Building scalable software, AI solutions, and modern web platforms.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <span className="text-red-300 font-bold">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-red-200 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-red-200 hover:text-white"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}    tech: "JavaScript • HTML5 Canvas",
    description:
      "Designed and developed a cross-platform 2D game with smooth controls, scoring mechanics, and engaging gameplay.",
  },
  {
    title: "ScholarGuide Website",
    year: "2023",
    tech: "WordPress • Bootstrap",
    description:
      "Built a responsive educational website focused on usability, navigation, and mobile experience.",
    link: "https://scholarsguide.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 lg:px-20 bg-[#ff2a2a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black mb-4 text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-white/80 text-lg text-center mb-16 max-w-3xl mx-auto">
          Building scalable software, AI solutions, and modern web platforms.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-black/80 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <span className="text-red-300 font-bold">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-red-200 mb-4 font-medium">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-red-300 hover:text-white font-semibold transition-all duration-300"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}    tech: "JavaScript • HTML5 Canvas",
    description:
      "Designed and developed a cross-platform 2D game with smooth controls, scoring mechanics, and engaging gameplay.",
  },
  {
    title: "ScholarGuide Website",
    year: "2023",
    tech: "WordPress • Bootstrap",
    description:
      "Built a responsive educational website focused on usability, navigation, and mobile experience.",
    link: "https://scholarsguide.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-20 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>

        <p className="text-gray-400 text-lg mb-16">
          Building scalable software, AI solutions, and modern web platforms.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 backdrop-blur-lg hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <span className="text-cyan-400">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-cyan-300 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-cyan-400 hover:text-cyan-300"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
                }
