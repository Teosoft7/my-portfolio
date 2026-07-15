import { ArrowRight, BookOpen, Code } from "lucide-react";

const subProjects = [
  {
    title: "Customer Churn Prediction",
    type: "Project",
    icon: <Code className="w-5 h-5 text-blue-400" />,
    desc: "End-to-end ML pipeline predicting customer churn using XGBoost, deployed on AWS with Airflow scheduling.",
    link: "#"
  },
  {
    title: "Understanding Transformer Architecture",
    type: "Article",
    icon: <BookOpen className="w-5 h-5 text-purple-400" />,
    desc: "A deep dive into the math and intuition behind modern LLMs, written for junior data scientists.",
    link: "#"
  },
  {
    title: "Real-time Analytics API",
    type: "Project",
    icon: <Code className="w-5 h-5 text-blue-400" />,
    desc: "High-throughput API built with FastAPI and Redis to track and analyze user events in real-time.",
    link: "#"
  }
];

export default function SubProjects() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">More Work & Writing</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subProjects.map((item, idx) => (
          <a 
            key={idx} 
            href={item.link}
            className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-white/5">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{item.type}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
