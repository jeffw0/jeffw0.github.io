import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>About Me</h2>
        <div className="w-8 h-0.5 bg-sky-500 mb-10" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              I graduated with a Bachelor's degree in Information Technology and have developed a
              strong foundation in both technical and analytical skills. I'm comfortable working
              across the full IT stack — from configuring networks to writing scripts and supporting
              users.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              I'm currently looking for opportunities where I can contribute to a team, grow my
              skills, and tackle real-world technology challenges. I'm a quick learner who takes
              initiative and communicates clearly.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="text-sky-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>B.S. in Information Technology</p>
                <p className="text-gray-500 text-xs">Your University · Class of 20XX</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-sky-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>Your City, State</p>
                <p className="text-gray-500 text-xs">Open to remote or in-person roles</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-sky-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-900 text-sm" style={{ fontWeight: 500 }}>Available Now</p>
                <p className="text-gray-500 text-xs">Actively seeking full-time positions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
