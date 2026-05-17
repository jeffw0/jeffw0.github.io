const skillGroups = [
  {
    category: "Languages & Scripting",
    skills: ["Python", "PowerShell", "Bash", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Networking & Infrastructure",
    skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "Cisco IOS", "Wireshark", "VPNs"],
  },
  {
    category: "Operating Systems",
    skills: ["Windows Server", "Linux (Ubuntu/CentOS)", "macOS", "Active Directory"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "VMware", "Azure", "VS Code", "Jira"],
  },
  {
    category: "Web & Development",
    skills: ["React", "Node.js", "REST APIs", "HTML/CSS", "MySQL", "PostgreSQL"],
  },
  {
    category: "Soft Skills",
    skills: ["Technical Writing", "Troubleshooting", "Team Collaboration", "Documentation", "Client Support"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>Skills</h2>
        <div className="w-8 h-0.5 bg-sky-500 mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3
                className="text-gray-700 mb-3"
                style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-gray-200 text-gray-600 text-xs px-2.5 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
