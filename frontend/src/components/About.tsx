import { motion } from "motion/react";
import { Database, Cpu, Layers, Music } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Dataset", value: "Classical MIDI Files", icon: Database, color: "text-accent-purple" },
    { label: "Model", value: "LSTM Neural Network", icon: Cpu, color: "text-accent-cyan" },
    { label: "Training Epochs", value: "30", icon: Layers, color: "text-accent-pink" },
    { label: "Notes Learned", value: "11,000+", icon: Music, color: "text-white" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-4">Research Specs</h2>
            <p className="text-sm text-accent-cyan font-medium mb-6 uppercase tracking-wider">Academic AI Project</p>
            <p className="text-xs text-slate-400 leading-relaxed mb-8 max-w-sm">
              Generate simple AI-composed piano melodies using deep learning. This project uses an LSTM neural network trained on MIDI note sequences.
            </p>
            <div className="space-y-3 pt-6 border-t border-white/5">
              <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-3 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-accent-purple shadow-[0_0_8px_rgba(139,92,246,0.6)]"></div>
                <span className="text-[11px] text-slate-400 font-medium font-mono uppercase">TensorFlow 2.12</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-3 border border-white/5">
                <div className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
                <span className="text-[11px] text-slate-400 font-medium font-mono uppercase">music21 backend</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl hover:bg-slate-900/60 transition-all group"
              >
                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">{stat.label}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-sans">Specifications</span>
                  <span className="text-xs font-mono text-white bg-white/5 px-3 py-1 rounded-full">{stat.value}</span>
                </div>
                <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-linear-to-r from-accent-purple to-accent-cyan"
                    initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
