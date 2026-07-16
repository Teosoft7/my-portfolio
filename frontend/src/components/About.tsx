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
              alt="Gildong Hong"
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
              Data Scientist bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Analytics & Engineering</span>
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Hello! I'm Gildong Hong. I specialize in building scalable machine learning systems and extracting actionable insights from complex datasets. My passion lies in taking data science out of Jupyter notebooks and integrating it into robust, production-ready applications.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              With a strong foundation in both statistical modeling and full-stack development, I can own the entire data lifecycle—from ETL pipelines to model deployment and interactive visualization dashboards.
            </p>
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
                <div className="text-sm text-blue-400 font-semibold tracking-wide mb-1">2021 - Present</div>
                <h5 className="text-lg font-bold text-white">Machine Learning Engineer</h5>
                <p className="text-neutral-500 font-medium mb-2">Tech Innovators Corp.</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Developed real-time recommendation engines and automated data pipelines using PySpark and Airflow. Improved model inference speed by 40% through ONNX optimization.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30"></div>
                <div className="text-sm text-neutral-500 font-semibold tracking-wide mb-1">2019 - 2021</div>
                <h5 className="text-lg font-bold text-white">Data Analyst</h5>
                <p className="text-neutral-500 font-medium mb-2">Global Retail Solutions</p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Conducted A/B testing and built interactive Tableau dashboards that drove a 15% increase in user retention.
                </p>
              </div>

              {/* Timeline Item 3 (Education) */}
              <div className="relative">
                <div className="absolute -left-[37.5px] top-1 w-3 h-3 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                  {/* Small icon overlay for education could go here, but a dot is cleaner */}
                </div>
                <div className="text-sm text-neutral-500 font-semibold tracking-wide mb-1 flex items-center gap-2">
                  2015 - 2019
                </div>
                <h5 className="text-lg font-bold text-white flex items-center gap-2">
                  B.S. in Computer Science
                </h5>
                <p className="text-neutral-500 font-medium">Seoul National University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
