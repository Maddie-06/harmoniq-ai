import { motion } from "motion/react";
import { Piano, Brain, Music4 } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "AI Melody Generation",
      desc: "Creates unique note sequences using trained neural patterns, ensuring every composition is original.",
      icon: Piano,
      color: "accent-purple",
    },
    {
      title: "Deep Learning Based",
      desc: "Built using TensorFlow and LSTM recurrent neural networks to understand long-term dependencies in music.",
      icon: Brain,
      color: "accent-cyan",
    },
    {
      title: "MIDI Music Output",
      desc: "Generated melodies are exported as industry-standard MIDI files, ready for any DAW or sequencer.",
      icon: Music4,
      color: "accent-pink",
    },
  ];

  return (
    <section id="features" className="py-32 px-6 bg-slate-950/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`glass p-10 rounded-[2.5rem] group hover:bg-slate-900/60 transition-all shadow-2xl relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-white/5 to-transparent blur-2xl" />
              <div className={`w-14 h-14 rounded-2xl bg-${feature.color}/10 flex items-center justify-center mb-8 border border-${feature.color}/5 group-hover:scale-110 transition-transform shadow-lg shadow-${feature.color.split('-')[1]}-500/10`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
