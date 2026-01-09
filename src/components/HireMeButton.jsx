import { motion } from "framer-motion";

export default function HireMeButton(){
  return(
    <motion.button
      whileHover={{scale:1.1,boxShadow:"0 0 20px #00f7ff"}}
      className="mt-8 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-full"
    >
      Hire Me
    </motion.button>
  )
}
