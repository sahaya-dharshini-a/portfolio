import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-10"
    >
      <h1 className="text-4xl font-bold mb-8">Education</h1>

      <div className="space-y-6">
        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">
            Loyola ICAM College of Engineering and Technology
          </h2>
          <p className="text-gray-400">B.Tech – Information Technology</p>
          <p className="text-gray-500">2023 – 2027 | CGPA: 8.65</p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">
            Sree Narayana Mission Senior Secondary School (CBSE)
          </h2>
          <p className="text-gray-400">XII – 85.4%</p>
          <p className="text-gray-500">2009 – 2023</p>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">X – 93.6%</h2>
        </div>
      </div>
    </motion.div>
  );
}
