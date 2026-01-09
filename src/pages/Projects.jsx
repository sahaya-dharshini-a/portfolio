import { motion } from "framer-motion";

const projects = [
  {
    title: "Image Steganography",
    desc: "Secure data hiding inside images using encryption",
    link: "https://github.com/sahaya-dharshini-a/project_Steganography",
  },
  {
    title: "NLP Chatbot",
    desc: "Built a chatbot using NLP,Streamlit and Python",
    link: "https://github.com/sahaya-dharshini-a/chatbot_nlp",
  },
   {
    title: "Employee Database Management System",
    desc: "Built using Python, Tkinter and MySQL to manage employee records.",
    link: "https://github.com/sahaya-dharshini-a/employee_management",
  },
   {
    title: "Movie Recommendation System",
    desc: "Full-stack web application for movie search and browsing..",
    link: "https://github.com/sahaya-dharshini-a/movie-app",
  },
  {
    title: "Snowsa Foodz Delicacy App -UI/UX Design Project",
    desc: "Foods For Foodies -Figma prototype for food app",
    link: "https://www.figma.com/proto/cs8E71QckAWcbxt2SyBAKI/Snowsa-Foodz-Delicacy-App?node-id=0-1&t=HKaYeAsbPUCXPGYL-1",
  },
   {
    title: "ChitChat App -UI/UX Design Project",
    desc: "Figma prototype for secure and private messaging app",
    link: "https://www.figma.com/proto/wKN7im8EonvKgLbD5Y6crh/ChitChat?node-id=2-114&starting-point-node-id=2%3A114&t=OGFnjR5xxvePqaVF-1",
  },
  {
    title: "Dashboard Design",
    desc: "Dashboard created using Figma",
    link: "https://www.figma.com/design/c9Hl90Szx0WqHyPBCbppyz/Screen-3?node-id=0-1&p=f&t=HA6I989Q0islEAI8-0",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen p-10 bg-black text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Projects
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-8 max-w-5xl"
      >
        {projects.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 p-6 rounded-2xl
                       hover:border-white hover:text-white transition-colors cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </motion.main>
  );
}
