import { motion } from "motion/react";

export default function Waveform({ active = false }: { active?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-accent-cyan rounded-full"
          animate={
            active
              ? {
                  height: [10, 40, 15, 35, 20],
                }
              : { height: 10 }
          }
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
