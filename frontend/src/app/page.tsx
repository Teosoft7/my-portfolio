import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import SubProjects from "@/components/SubProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-blue-500/30 font-sans">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-t from-purple-900/10 to-transparent"></div>
        {/* Subtle grid pattern for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-12 pb-24">
        {/* 1. 영웅 영역 (Hero Section) */}
        <Hero />
        
        {/* 1.5. About Section */}
        <About />
        
        {/* 2. 핵심 기술 스택 (Core Tech Stack Highlight) */}
        <TechStack />
        
        {/* 3. 대표 프로젝트 (Featured Project - OOHLIB) */}
        <FeaturedProject />
        
        {/* 4. 부가 프로젝트 & 아티클 (Sub-projects & Writing) */}
        <SubProjects />
        
        {/* 5. 연락처 (Contact) */}
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Data Science Portfolio. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
