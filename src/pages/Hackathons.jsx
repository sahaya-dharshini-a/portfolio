import { motion } from "framer-motion";

const hackathons = [
  {
    name: "Smart India Hackathon 2025",
    desc: "Built a student innovation project to detect malicious links"
  },
  {
    name: "Smart India Hackathon 2024",
    desc: "Created a Justice Bot using AI"
  },
  {
    name: "EDII Hackathon 2023",
    desc: "Selected till Level 3"
  }
];

export default function Hackathons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-10"
    >
      <h1 className="text-4xl font-bold mb-8">Hackathons</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {hackathons.map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="border border-gray-700 p-6 rounded-xl"
          >
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
