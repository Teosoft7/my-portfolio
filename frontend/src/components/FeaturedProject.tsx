import { ArrowUpRight, GitBranch } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Featured Project</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      <div className="group relative rounded-3xl bg-neutral-900/50 border border-white/10 overflow-hidden backdrop-blur-xl transition-all hover:border-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
          {/* Project Image/Visualizer Placeholder */}
          <div className="relative p-8 lg:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20">
            <div className="w-full aspect-video rounded-2xl border border-white/10 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              {/* Abstract representation of data/map */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
              <div className="text-center z-10">
                <p className="text-sm tracking-widest text-blue-400 font-mono uppercase mb-2">Interactive Map</p>
                <h4 className="text-2xl font-bold text-white">OOH Advertising Impact</h4>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Data Science</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Full Stack</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">OOHLIB: Spatial Data Analysis Platform</h3>
            
            <p className="text-neutral-400 mb-8 leading-relaxed text-lg">
              A comprehensive platform for evaluating Out-Of-Home (OOH) advertising effectiveness. 
              It ingests massive amounts of spatial data, applies custom ML scoring algorithms, 
              and serves the insights via a scalable FastAPI backend to an interactive Next.js dashboard.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Python", "FastAPI", "Next.js", "Geospatial Data", "Docker"].map((tag, i) => (
                <span key={i} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a href="#" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-neutral-200 transition-colors">
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white hover:bg-white/10 transition-colors">
                <GitBranch className="w-5 h-5" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
