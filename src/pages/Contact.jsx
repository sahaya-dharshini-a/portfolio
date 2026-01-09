import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-10">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold mb-4">Let’s Connect</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            I'm always open to exciting opportunities, internships, collaborations,
            or just a friendly tech conversation. Feel free to reach out — I’d love
            to hear from you!
          </p>

          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />
              <span className="text-gray-300">+91 78069 82900</span>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-400" />
              <span className="text-gray-300">dharshinisahaya@gmail.com</span>
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400" />
              <span className="text-gray-300">West Mambalam, Chennai</span>
            </p>
          </div>
        </motion.div>

        {/* Right - Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-[#111] p-8 rounded-2xl shadow-xl border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">Find Me Online</h2>

          <div className="flex flex-col gap-4">

           <a
  href="https://www.linkedin.com/in/sahayadharshini"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
>

              <span className="flex items-center gap-3">
                <FaLinkedin className="text-2xl" /> LinkedIn Profile
              </span>
              <span className="text-sm">View →</span>
            </a>

           <a
  href="https://github.com/sahaya-dharshini-a"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
>

              <span className="flex items-center gap-3">
                <FaGithub className="text-2xl" /> GitHub Portfolio
              </span>
              <span className="text-sm">Explore →</span>
            </a>
<a
  href="/Sahaya_Dharshini_Resume.pdf"
  download
  className="flex items-center justify-between px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition"
>
  <span className="flex items-center gap-3">
    📄 Download My Resume
  </span>
  <span className="text-sm">Download →</span>
</a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
