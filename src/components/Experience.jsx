import React from "react";

const experiences = [
  {
    role: "Full Stack Next.js Developer Intern",
    company: "Cosmo Clan",
    duration: "Start Month 2025 – Feb 2026",
    type: "Internship",
    bullets: [
      "Built and delivered multiple production-grade platforms using Next.js, React, TypeScript, and Tailwind CSS, including admin, marketing, and analytics dashboards plus business web applications.",
      "Implemented end-to-end features from UI to backend — API integration, server-side logic, form workflows, validation, and error handling for reliable user-facing modules.",
      "Designed and managed data architecture with Prisma + PostgreSQL and Supabase, covering schema design, migrations, seeding, and query optimization for dashboard performance.",
      "Developed secure authentication and access flows using NextAuth/Auth adapters, role-based access control, protected routes, and credential management patterns.",
      "Integrated third-party services including Stripe (payments), Resend/SendGrid (email), UploadThing (file uploads), and Recharts (reporting/charting) to support core product workflows.",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "NextAuth", "Stripe", "Recharts"],
    icon: "ri-code-s-slash-line",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#09101A]">
      <section
        id="experience"
        data-aos="fade-up"
        className="min-h-screen flex flex-col gap-5 px-4 md:px-13 py-10"
      >
        {/* Heading */}
        <h1 className="text-4xl text-white font-bold underline">Experience</h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-2xl">
          My professional journey building real-world products from day one.
        </p>

        {/* Timeline */}
        <div className="relative mt-6">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-teal-400 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative flex flex-col md:flex-row gap-6 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 shadow-lg shadow-indigo-500/30 z-10">
                  <i className={`${exp.icon} text-white text-lg`}></i>
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#151C27] border border-indigo-900/40 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-500/50 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                        {exp.role}
                      </h2>
                      <div className="flex items-center gap-2 mt-1">
                        <i className="ri-building-line text-teal-400 text-sm"></i>
                        <span className="text-teal-400 font-semibold text-sm">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        <i className="ri-calendar-line"></i>
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/30">
                        <i className="ri-briefcase-line"></i>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-indigo-500/30 via-teal-500/20 to-transparent mb-4" />

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3 mb-5">
                    {exp.bullets.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center">
                          <i className="ri-arrow-right-s-line text-white text-xs"></i>
                        </span>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#09101A] border border-gray-700 text-gray-400 hover:text-indigo-300 hover:border-indigo-500/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" className="mt-4 flex justify-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            <i className="ri-code-box-line text-lg"></i>
            See My Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Experience;
