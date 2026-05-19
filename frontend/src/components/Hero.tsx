import { motion } from "motion/react";
import { Music, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            V1.0 LSTM Project
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Harmoniq AI
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-accent-cyan">
            Neural networks learning the language of melody.
          </h2>
          <p className="text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
            Generate simple AI-composed piano melodies using deep learning. 
            This project uses an LSTM neural network trained on MIDI note sequences to generate original musical patterns.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#generator"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-accent-purple to-accent-cyan text-white font-bold text-sm shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Get Started
            </a>
            <a
              href="#workflow"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold text-sm hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative glass-heavy aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-accent-purple/10 to-accent-cyan/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-12">
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                  <span>LSTM_PATTERN_SYNC_01</span>
                  <span>ACTIVE</span>
                </div>
                <div className="flex items-end gap-1.5 h-32 w-full">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-linear-to-t from-accent-purple to-accent-cyan rounded-t-lg opacity-40"
                      animate={{ height: [`${20 + Math.random() * 20}%`, `${60 + Math.random() * 40}%`, `${20 + Math.random() * 20}%`] }}
                      transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating notes decorations */}
          <motion.div
             animate={{ y: [-10, 10, -10] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute -top-10 -right-10 glass p-4 rounded-2xl glow-cyan"
          >
             <Music className="w-8 h-8 text-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
