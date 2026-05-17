import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-400 text-sm mb-3 tracking-widest uppercase">
          Welcome
        </p>
        <h1 className="text-gray-900 mb-4" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.2 }}>
          Hi, I'm <span className="text-sky-500">Your Name</span>
        </h1>
        <h2 className="text-gray-500 mb-6" style={{ fontSize: "1.25rem", fontWeight: 400 }}>
          IT Professional · Problem Solver · Lifelong Learner
        </h2>
        <p className="text-gray-600 max-w-xl mb-8 leading-relaxed text-sm">
          I'm an IT graduate with a passion for building reliable systems, solving technical
          challenges, and learning new technologies. I enjoy working across networking,
          development, and infrastructure to deliver practical solutions.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2.5 rounded-md text-sm hover:bg-sky-600 transition-colors"
          >
            <Mail size={15} />
            Get in Touch
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-md text-sm hover:border-gray-400 transition-colors"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>

        <div className="flex gap-4 mt-8">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:you@example.com" className="text-gray-400 hover:text-gray-700 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
