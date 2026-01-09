import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg"; // put your image inside src/assets/

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white flex items-center px-10"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-gray-300 leading-relaxed">
            I’m Sahaya Dharshini A, an enthusiastic B.Tech Information Technology student at Loyola-ICAM College of Engineering and Technology, passionate about building meaningful digital solutions. With a strong foundation in Java, UI/UX design, MySQL, and MERN Stack, I enjoy transforming complex ideas into simple and user-friendly experiences.
            <br /><br />
            I’ve completed internships in UI/UX, Cybersecurity, and Artificial Intelligence, where I worked on real-world projects such as a steganography-based secure data hiding system, an AI chatbot, and an employee database management system along with many user interfaces. I’m driven by curiosity, continuous learning, and the desire to solve problems that create real impact.
          </p>
        </div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Sahaya Dharshini"
            className="w-72 h-72.5 object-cover rounded-2xl border-4 border-gray-700 shadow-lg hover:scale-105 transition"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
