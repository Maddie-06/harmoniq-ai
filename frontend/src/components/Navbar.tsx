import { motion } from "motion/react";
import { Music } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Generator", href: "#generator" },
    { name: "Workflow", href: "#workflow" },
    { name: "Features", href: "#features" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 bg-slate-900/40 backdrop-blur-lg border-b border-white/5"
    >
      <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight text-white">
        <span className="w-8 h-8 rounded-lg bg-linear-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-sm shadow-lg shadow-purple-500/20">
          🎵
        </span>
        Harmoniq AI
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>

      <button className="hidden sm:block text-xs font-semibold px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
        Student Project
      </button>
    </motion.nav>
  );
}
