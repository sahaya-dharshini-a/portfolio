import { motion } from "framer-motion";

const skills = [
  {
    title: "Core Programming",
    items: ["Java (OOPS)", "Python", "C"],
  },
  {
    title: "Frontend & UI/UX",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Figma", "Wireframing", "Prototyping","UI/UX"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express.js", "MySQL", "DBMS"],
  },
  {
    title: "Full Stack",
    items: ["MERN Stack", "REST APIs"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Basic Data Visualization"],
  },
  {
    title: "Tools & Platforms",
    items: ["GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-10">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4">My Skillset</h1>
        <p className="text-gray-400 max-w-3xl mb-10">
          As a B.Tech Information Technology student with a strong interest in
          <span className="text-blue-400 font-semibold"> Java development</span> and
          <span className="text-pink-400 font-semibold"> UI/UX design</span>, I combine
          clean coding practices with user-centric design to build impactful digital experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111] p-6 rounded-2xl border border-gray-800 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-400">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300 hover:bg-blue-500 hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
