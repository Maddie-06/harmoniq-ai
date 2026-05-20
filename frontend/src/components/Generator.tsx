import { useState } from "react";
import { motion } from "motion/react";
import { RefreshCw, Music } from "lucide-react";
import Waveform from "./Waveform";

export default function Generator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [style, setStyle] = useState("Classical Piano");
  const [creativity, setCreativity] = useState(75);
  const [notes, setNotes] = useState(250);

  const [progress, setProgress] = useState(0);

  const [audioUrl, setAudioUrl] = useState("");

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setIsGenerated(false);
      setProgress(10);

      console.log(import.meta.env.VITE_API_URL);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/generate`,
        {
          method: "POST",
        }
      );

      setProgress(70);

      const data = await response.json();

      console.log(data);

      setProgress(100);

      setTimeout(() => {
        setIsGenerating(false);
        setIsGenerated(true);

        localStorage.setItem("generatedMidi", data.file);

        setAudioUrl(`${import.meta.env.VITE_API_URL}${data.file}`);
      }, 500);

    } catch (error) {
      console.error(error);

      alert("Backend connection failed");

      setIsGenerating(false);
    }
  };

  return (
    <section id="generator" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold italic">
            Melody Generator
          </h2>

          <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-[10px] font-bold tracking-widest uppercase">
            Experimental
          </span>
        </div>

        <div className="glass-heavy p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">

          {!isGenerated && !isGenerating ? (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-8">

              <div className="space-y-8">

                <div className="space-y-3">
                  <label className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Music Style
                  </label>

                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-accent-cyan outline-none transition-colors appearance-none"
                  >
                    <option>Classical Piano</option>
                    <option>Soft Melody</option>
                    <option>Ambient Notes</option>
                  </select>
                </div>

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <label className="text-xs text-slate-400 font-medium uppercase">
                      Creativity Level
                    </label>

                    <span className="text-white text-xs font-mono">
                      {creativity}
                    </span>
                  </div>

                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-accent-purple to-accent-cyan"
                      animate={{ width: `${creativity}%` }}
                    />
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={creativity}
                    onChange={(e) =>
                      setCreativity(parseInt(e.target.value))
                    }
                    className="w-full opacity-0 absolute cursor-pointer"
                  />
                </div>

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <label className="text-xs text-slate-400 font-medium uppercase">
                      Generated Notes
                    </label>

                    <span className="text-white text-xs font-mono">
                      {notes}
                    </span>
                  </div>

                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-accent-purple to-accent-cyan"
                      animate={{ width: `${(notes - 100) / 4}%` }}
                    />
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="500"
                    value={notes}
                    onChange={(e) =>
                      setNotes(parseInt(e.target.value))
                    }
                    className="w-full opacity-0 absolute cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center items-center bg-black/20 border border-white/5 rounded-2xl p-8 text-center space-y-4">

                <div className="w-16 h-16 bg-linear-to-br from-accent-purple to-accent-cyan rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Music className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-sm font-bold text-white">
                  AI Neural Engine Ready
                </h3>

                <p className="text-slate-400 text-[11px] leading-relaxed">
                  The model will synthesize note sequences using your trained LSTM backend.
                </p>

              </div>

            </div>

          ) : isGenerating ? (

            <div className="py-20 flex flex-col items-center justify-center space-y-8">

              <RefreshCw className="w-12 h-12 text-accent-cyan animate-spin" />

              <div className="w-full max-w-sm">

                <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full bg-linear-to-r from-accent-purple to-accent-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>

                <p className="text-xs font-mono text-slate-500 text-center tracking-widest uppercase">
                  Generating Music...
                </p>

              </div>

              <Waveform active={true} />

            </div>

          ) : (

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 flex flex-col space-y-8"
            >

              <div className="p-8 rounded-3xl bg-black/40 border border-white/5 shadow-inner">

                <div className="space-y-6">

                  <div className="text-center text-sm text-slate-400">
                    MIDI generated successfully 🎵
                    <br />
                    Use "Export MIDI" to download and play in a MIDI player.
                  </div>

                  <div className="flex items-end justify-between h-12 gap-1.5 px-4">
                    {[...Array(32)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          isPlaying
                            ? "bg-accent-cyan opacity-80"
                            : "bg-white/10"
                        }`}
                        style={{
                          height: `${20 + Math.random() * 80}%`,
                        }}
                      />
                    ))}
                  </div>

                </div>

              </div>

              <div className="flex flex-wrap justify-center gap-4">

                <a
                  href={localStorage.getItem("generatedMidi") || "#"}
                  target="_blank"
                  className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest inline-flex items-center"
                >
                  Export MIDI
                </a>

                <button
                  onClick={() => {
                    setIsGenerated(false);
                    setIsPlaying(false);
                  }}
                  className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[#F8FAFC]"
                >
                  Compose New
                </button>

              </div>

            </motion.div>

          )}

          {!isGenerating && !isGenerated && (

            <button
              onClick={handleGenerate}
              className="w-full py-4 rounded-2xl bg-white text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
            >
              Generate Melody
            </button>

          )}

        </div>
      </div>
    </section>
  );
}