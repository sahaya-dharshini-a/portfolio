import { motion } from "framer-motion";

const internships = [
  {
    company: "HCL GUVI",
    role: "UI/UX Design Intern",
    period: "Dec 2025 – Present",
    highlights: [
      "Conducted user research and usability analysis for product improvement",
      "Created wireframes & interactive prototypes using Figma",
      "Applied UI accessibility and interface design best practices",
    ],
    certificate: "/certificates/hcl-uiux.pdf",
  },
  {
    company: "IBM SkillBuild",
    role: "Cyber Security Intern",
    period: "Jan 2025 – Feb 2025",
    highlights: [
      "Developed Image Steganography based secure data hiding system",
      "Understood encryption, authentication and cyber risk fundamentals",
    ],
    certificate: "/certificates/ibm-cybersecurity.pdf",
  },
  {
    company: "ACTE & Shell",
    role: "Artificial Intelligence Intern",
    period: "Dec 2024 – Jan 2025",
    highlights: [
      "Built NLP based AI chatbot using Python",
      "Learned machine learning concepts & real-world AI applications",
    ],
    certificate: "/certificates/ai-chatbot.pdf",
  },
];

export default function Internships() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4">Internship Experience</h1>
        <p className="text-gray-400 mb-10 max-w-3xl">
          Hands-on industry exposure across <span className="text-blue-400">UI/UX Design</span>, 
          <span className="text-green-400"> Cyber Security</span> and 
          <span className="text-purple-400"> Artificial Intelligence</span>, with verified certifications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] border border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-blue-400">{item.company}</h2>
              <p className="text-gray-300">{item.role}</p>
              <p className="text-xs text-gray-500 mb-4">{item.period}</p>

              <ul className="list-disc ml-5 text-gray-400 space-y-1 mb-6">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={item.certificate}
                target="_blank"
                className="inline-block px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition"
              >
                🎓 View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
