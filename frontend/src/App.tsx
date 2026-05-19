/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Generator from "./components/Generator.tsx";
import Workflow from "./components/Workflow";
import Features from "./components/Features.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white selection:bg-accent-purple/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Generator />
        <Workflow />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

