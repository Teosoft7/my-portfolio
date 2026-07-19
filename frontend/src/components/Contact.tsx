import { Mail, MessageSquare, Send } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative z-10" id="contact">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">amazing</span> together.
          </h3>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10 font-light">
            Whether you have a question about my projects, are looking for a data scientist to join your team, or just want to connect, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href="mailto:hello@example.com" className="group flex items-center gap-4 text-neutral-300 hover:text-white transition-colors w-fit">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                <Mail className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              </div>
              <span className="text-lg font-medium">hello@example.com</span>
            </a>

            <div className="flex items-center gap-4 pt-6">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:-translate-y-1 transition-all">
                <GithubIcon className="w-5 h-5 text-neutral-300" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/30 hover:-translate-y-1 transition-all group">
                <LinkedinIcon className="w-5 h-5 text-neutral-300 group-hover:text-[#0A66C2] transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2]/20 hover:border-[#1DA1F2]/30 hover:-translate-y-1 transition-all group">
                <TwitterIcon className="w-5 h-5 text-neutral-300 group-hover:text-[#1DA1F2] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-3xl bg-neutral-900/50 border border-white/10 p-8 md:p-10 backdrop-blur-xl">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-400">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="group w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-xl font-bold text-lg hover:bg-neutral-200 transition-colors mt-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
