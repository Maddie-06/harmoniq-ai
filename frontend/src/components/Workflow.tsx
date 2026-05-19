import { motion } from "motion/react";
import { Search, Scissors, BrainCircuit, Sparkles, Wand2, FileMusic, ChevronRight } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      title: "MIDI Collection",
      desc: "Dataset gathering of classical piano MIDI files.",
      icon: Search,
      color: "bg-accent-purple/20 text-accent-purple",
    },
    {
      title: "Note Extraction",
      desc: "Parsing sequences using the music21 library.",
      icon: Scissors,
      color: "bg-accent-cyan/20 text-accent-cyan",
    },
    {
      title: "LSTM Training",
      desc: "Training recurrent networks on note patterns.",
      icon: BrainCircuit,
      color: "bg-accent-pink/20 text-accent-pink",
    },
    {
      title: "Note Prediction",
      desc: "Generating candidate sequences from seed notes.",
      icon: Wand2,
      color: "bg-accent-purple/20 text-accent-purple",
    },
    {
      title: "Composition",
      desc: "Fine-tuning rhythm and tempo for fluidity.",
      icon: Sparkles,
      color: "bg-accent-cyan/20 text-accent-cyan",
    },
    {
      title: "MIDI Export",
      desc: "Converting digital arrays back to playable files.",
      icon: FileMusic,
      color: "bg-accent-pink/20 text-accent-pink",
    },
  ];

  return (
    <section id="workflow" className="py-24 px-6 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
           <h2 className="text-3xl font-bold italic mb-4">How It Works</h2>
           <div className="h-1 w-20 bg-linear-to-r from-accent-purple to-accent-cyan rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.slice(0, 4).map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-3xl relative z-10 hover:bg-white/5 transition-all group"
            >
              <div className="absolute left-6 top-18.5 bottom-0 w-px bg-white/5 group-hover:bg-accent-purple/20 transition-colors" />
              <div className="flex gap-4 relative">
                <div className={`w-4 h-4 rounded-full border-4 border-brand-bg z-10 shrink-0 mt-1 ${i % 2 === 0 ? 'bg-accent-purple' : 'bg-accent-cyan'}`} />
                <div>
                   <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{step.title}</h4>
                   <p className="text-[10px] text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
