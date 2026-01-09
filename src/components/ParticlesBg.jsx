import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

export default function ParticlesBg() {
  const particlesInit = async (engine) => await loadFull(engine);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 70 },
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff" },
          move: { enable: true, speed: 0.6 },
          size: { value: 2 }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } }
        }
      }}
    />
  );
}
 
