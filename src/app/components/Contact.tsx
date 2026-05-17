import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Contact</h2>
        <div className="w-8 h-0.5 bg-sky-500 mb-10" />

        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
          I'm actively looking for new opportunities. Whether you have a role in mind,
          a project to collaborate on, or just want to connect — feel free to reach out.
          I'll do my best to get back to you quickly.
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <Mail size={16} className="text-sky-500 shrink-0" />
            you@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <Linkedin size={16} className="text-sky-500 shrink-0" />
            linkedin.com/in/yourhandle
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <Github size={16} className="text-sky-500 shrink-0" />
            github.com/yourhandle
          </a>
          <span className="inline-flex items-center gap-3 text-gray-500 text-sm">
            <MapPin size={16} className="text-sky-500 shrink-0" />
            Your City, State
          </span>
        </div>
      </div>
    </section>
  );
}
