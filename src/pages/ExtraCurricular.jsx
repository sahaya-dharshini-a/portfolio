import { motion } from "framer-motion";

export default function ExtraCurricular() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black text-white p-10"
    >
      <h1 className="text-4xl font-bold mb-8">Extra Curricular Activities</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">
            Computer Society of India Club
          </h2>
          <p className="text-gray-400 mt-2">Executive Member</p>
          <ul className="list-disc list-inside text-gray-500 mt-3">
            <li>Organized technical events</li>
            <li>Collaborated with team members</li>
            <li>Improved leadership & coordination skills</li>
          </ul>
        </div>

        <div className="border border-gray-700 p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Science Club</h2>
          <p className="text-gray-400 mt-2">Joint Secretary</p>
          <ul className="list-disc list-inside text-gray-500 mt-3">
            <li>Handled day-to-day club duties</li>
            <li>Planned science related events</li>
            <li>Contributed innovative ideas</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
