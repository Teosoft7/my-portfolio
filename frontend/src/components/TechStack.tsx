import { Database, LineChart, Code2, Cpu } from "lucide-react";

const stacks = [
  {
    category: "Machine Learning",
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    items: ["PyTorch", "Scikit-Learn", "XGBoost", "Hugging Face"],
    description: "Building predictive models and fine-tuning LLMs."
  },
  {
    category: "Data Engineering",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    items: ["SQL", "Pandas", "PySpark", "Airflow"],
    description: "Designing robust data pipelines and ETL processes."
  },
  {
    category: "Backend & API",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    items: ["Python", "FastAPI", "Docker", "AWS"],
    description: "Deploying models as scalable microservices."
  },
  {
    category: "Data Visualization",
    icon: <LineChart className="w-6 h-6 text-orange-400" />,
    items: ["Next.js", "React", "Plotly", "Tailwind"],
    description: "Creating interactive dashboards for stakeholders."
  }
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10" id="tech-stack">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Tech Stack</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((stack, idx) => (
          <div 
            key={idx} 
            className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 backdrop-blur-md overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 shadow-inner border border-white/5">
              {stack.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3">{stack.category}</h3>
            <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
              {stack.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {stack.items.map((item, i) => (
                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/40 text-neutral-300 border border-white/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
