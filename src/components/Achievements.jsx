// Achievements.jsx

import { motion } from "framer-motion";

const achievements = [
  "Finalist (Top 60 Teams) - Google Agentic AI Hackathon 2025",
  "Participant - GDSC CodeSprint Hackathon (UI/UX Design)",
  "Campus Coordinator - Placement Cell (2023-24)",
  "UiPath Studio - Built workflow automation solutions using RPA",
  "Developed AI, Cloud, and Full-Stack applications across multiple domains",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 lg:px-20 bg-zinc-950 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12"
        >
          Achievements
        </motion.h2>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 transition-all"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
