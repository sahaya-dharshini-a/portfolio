import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";

const texts = [

  "Highly motivated and Eager to learn.",
  "Always learning, Always evolving.",
  "Turning ideas into impactful user experiences.",
  "Driven by creativity, powered by technology.",
  "Striving to become better with every project I build."
];

export default function Home() {

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.05 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Sahaya Dharshini A
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            B.Tech IT Student | UI/UX Designer | Python Developer
          </p>

          {/* Typing text */}
          <p className="mt-6 text-gray-300 max-w-md leading-relaxed text-xl">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Sahaya Dharshini"
            className="w-65 h-65 object-cover rounded-full border-4 border-gray-700"
          />
        </motion.div>

      </div>
    </section>
  );
}
