import { Music, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-16 px-8 flex items-center justify-between text-[10px] text-slate-500 bg-black/20 border-t border-white/5 uppercase tracking-widest font-mono">
      <div>© 2026 Harmoniq AI — Student Research Project</div>
      <div className="hidden md:flex gap-6">
        <span>TensorFlow 2.12</span>
        <span>LSTM V1.0</span>
        <span>Open MIDI Library</span>
      </div>
    </footer>
  );
}
