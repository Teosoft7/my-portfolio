import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Background gradients */}
      <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-sm font-medium text-neutral-300">Available for new opportunities in the US</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-neutral-600 drop-shadow-sm">
          From raw data  <br className="hidden md:block" />
          To <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">production</span> software
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Data scientist and engineer building ML pipelines, APIs, and the products on top of them.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="#projects" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95">
            View Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="group flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 backdrop-blur-sm">
            <Terminal className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
