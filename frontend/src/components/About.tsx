import Image from "next/image";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10" id="about">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Profile Image Column */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
            <Image
              src="/images/profile.jpg"
              alt="Taeho Jeon"
              loading="eager"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient Overlay for better blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Greate Seattle Area</p>
                <p className="text-sm text-neutral-400">Washington, US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio & Experience Column */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          {/* Bio Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Software Engineer & Data Scientist
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Hello! I'm Taeho. I build end-to-end data products—from ETL pipelines and ML models to the APIs and user interfaces that deliver them. My focus is taking data science out of Jupyter notebooks and turning it into scalable, production-grade software.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-lg text-neutral-400 leading-relaxed font-light">
                Data & ML: Statistical Modeling, ML Pipelines, ETL, BigQuery
              </li>
              <li className="text-lg text-neutral-400 leading-relaxed font-light">
                Backend & AI Agents: FastAPI, RESTful APIs, LLM Integration (MCP)
              </li>
              <li className="text-lg text-neutral-400 leading-relaxed font-light">
                Frontend: Next.js, Tailwind CSS, React, React Native
              </li>
            </ul>
          </div>

          {/* Quick Timeline/Resume */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              Experience & Education
            </h4>

            <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                <div className="text-sm text-blue-400 font-semibold tracking-wide mb-1">Aug 2019 - Present</div>
                <h5 className="text-lg font-bold text-white">Independent Software Engineer & Data Scientist</h5>
                <p className="text-neutral-500 font-medium mb-2">Freelance</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Design, build, and ship production-grade AI-powered applications end-to-end as a solo engineer — from system architecture and
                  backend APIs to mobile/web frontends and cloud deployment
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30"></div>
                <div className="text-sm text-neutral-500 font-semibold tracking-wide mb-1">2010 - 2017</div>
                <h5 className="text-lg font-bold text-white">Creative Technologist</h5>
                <p className="text-neutral-500 font-medium mb-2">INNOCEAN Worldwide</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Led high-impact creative technology projects and interactive experiences for Hyundai/Kia global advertising campaigns
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30"></div>
                <div className="text-sm text-neutral-500 font-semibold tracking-wide mb-1">2007 - 2010</div>
                <h5 className="text-lg font-bold text-white">Lead Software Engineer</h5>
                <p className="text-neutral-500 font-medium mb-2">G&H+</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Developed and maintained media solution applications for TV and OOH media companies
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30"></div>
                <div className="text-sm text-neutral-500 font-semibold tracking-wide mb-1">2005 - 2007</div>
                <h5 className="text-lg font-bold text-white">Software Engineer</h5>
                <p className="text-neutral-500 font-medium mb-2">Nielsen Media Research Korea</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Developed and maintained the database of ad spending on the media market of Korea
                </p>
              </div>

              {/* Timeline Item 5 (Education) */}
              <div className="relative">
                <div className="absolute -left-[37.5px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                  {/* Small icon overlay for education could go here, but a dot is cleaner */}
                </div>

                <h5 className="text-lg font-bold text-white flex items-center gap-2">
                  B.S. in Computer Science
                </h5>
                <p className="text-neutral-500 font-medium">Dankook University, Korea</p>

                <h5 className="text-lg font-bold text-white flex items-center gap-2">
                  Data Science Immersive
                </h5>
                <p className="text-neutral-500 font-medium">Flatiron School, Seattle</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
