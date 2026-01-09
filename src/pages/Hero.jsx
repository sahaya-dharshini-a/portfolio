import { motion } from "framer-motion";
import ParticlesBg from "../components/ParticlesBg";

export default function Hero(){
  return(
    <motion.div
      initial={{opacity:0,y:80}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-80}}
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <ParticlesBg/>
      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl font-bold">Sahaya Dharshini A</h1>
        <p className="text-gray-400 mt-2">UI/UX Designer • MERN Developer • Cybersecurity Enthusiast</p>
        <p className="mt-6 text-sm text-gray-300">
        Motivated and enthusiastic BTech IT student with passion for dynamic world of technology and innovation.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
          <div>
            <h2 className="font-semibold mb-2">Technical Skills</h2>
            <ul className="text-gray-400 space-y-1">
              <li>Java (OOPS)</li><li>MySQL DBMS</li><li>MERN Stack</li>
              <li>Python, C</li><li>PowerBI, Figma</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Education</h2>
            <p className="text-gray-400">BTech IT – LICET (2023–2027)</p>
            <p className="text-gray-400">XII – 85.4% | X – 93.6%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
