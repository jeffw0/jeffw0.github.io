import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Network Monitoring Dashboard",
    description:
      "A web-based dashboard for monitoring network device status and uptime using SNMP polling. Built to help IT teams quickly identify outages.",
    tags: ["Python", "Flask", "SNMP", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Help Desk Ticketing System",
    description:
      "A simple internal ticketing system for IT support teams, allowing users to submit and track requests. Features role-based access and email notifications.",
    tags: ["React", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Active Directory Automation Scripts",
    description:
      "PowerShell scripts for automating common Active Directory tasks — user provisioning, group management, and account cleanup.",
    tags: ["PowerShell", "Active Directory", "Windows Server"],
    github: "#",
    demo: null,
  },
  {
    id: 4,
    title: "Personal Portfolio Site",
    description:
      "The site you're looking at now. Built with React and Tailwind CSS as a clean, responsive template for showcasing projects and skills.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Projects</h2>
        <div className="w-8 h-0.5 bg-sky-500 mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600, fontSize: "1rem" }}>
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-xs transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-xs transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
