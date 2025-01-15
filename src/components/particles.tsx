"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <Particles
      className="fixed z-0 top-0 left-0"
      id="tsparticles"
      options={{
        height: "100vh",
        pauseOnBlur: true,
        background: {
          color: {
            value: "rgba(0,0,0,0,0)",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#30BD19",
          },
          links: {
            color: "#30BD19",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        fullScreen: { enable: true, zIndex: -10 },
        width: "100vw",
      }}
    ></Particles>
  );
};

export default ParticlesBackground;
