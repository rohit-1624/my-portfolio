import React from "react";

const featured = {
  title: "TeamFlow Pro",
  badge: "Featured Project",
  description:
    "Full-stack multi-tenant SaaS application with structured role-based access control (SUPER_ADMIN, ADMIN, USER). Built with secure authorization enforced at UI, middleware, and API layers.",
  points: [
    "Project & task lifecycle management with org-level data isolation",
    "Weighted workload scoring engine to detect overloaded users",
    "Admin analytics dashboard for team performance monitoring",
    "Secure authentication with NextAuth session-based access control",
    "Deployed on Vercel with NeonDB PostgreSQL integration",
  ],
  tags: ["Next.js", "TypeScript", "Prisma", "NeonDB", "NextAuth", "Tailwind CSS", "RBAC"],
  demo: "https://teamflow-pro-fawn.vercel.app/",
  github: "https://github.com/rohit-1624/teamflow-pro",
};

const projects = [
  {
    title: "Home Decor (E-commerce)",
    description:
      "Responsive e-commerce web app with furniture and home decor items, built with Next.js, Tailwind CSS, and Firebase Authentication.",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    demo: "https://home-decor-eosin.vercel.app/",
    github: "https://github.com/rohit-1624/home-decor",
  },
  {
    title: "Online Shopping (E-commerce)",
    description:
      "Responsive e-commerce site with admin panel, auth-based UI changes, and secure Razorpay payment integration.",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Razorpay"],
    demo: "https://online-shopping-beta-eight.vercel.app/",
    github: "https://github.com/rohit-1624/shopcode",
  },
  {
    title: "CodeSchool",
    description:
      "Ed-tech platform for teaching coding built with React.js and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS"],
    demo: "https://code-school-seven.vercel.app/",
    github: "https://github.com/rohit-1624/CodeSchool",
  },
  {
    title: "Currency Converter",
    description:
      "Currency converter app using live exchange rate API built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://currency-converter-using-api-inky.vercel.app/",
    github: "https://github.com/rohit-1624/Currency-converter-using-API",
  },
  {
    title: "CRUD Web App",
    description:
      "CRUD application to create, read, update, and delete records stored in a table using React.js.",
    tags: ["React.js"],
    demo: "https://crud-web-application.vercel.app/",
    github: "https://github.com/rohit-1624/CRUD-Web-application",
  },
  {
    title: "Amazon Clone",
    description:
      "Amazon homepage clone built with pure HTML and CSS.",
    tags: ["HTML", "CSS"],
    demo: "https://amazon-clone-taupe-chi.vercel.app/",
    github: "https://github.com/rohit-1624/Amazon-Clone",
  },
  {
    title: "Online Book-Store",
    description:
      "Online bookstore e-commerce website built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://bookstore-sigma-rust.vercel.app/",
    github: "https://github.com/rohit-1624/Bookstore",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game built using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "https://tic-tac-toe-game-virid-alpha.vercel.app/",
    github: "https://github.com/rohit-1624/Tic-Tac-Toe-game",
  },
];

const ProjectList = () => {
  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="flex flex-col gap-10 bg-[#02050A] px-4 md:px-13 pt-10 pb-16"
    >
      {/* Heading */}
      <h1 className="text-4xl text-white font-bold underline">Projects</h1>

      {/* ── Featured Card ── */}
      <div
        data-aos="fade-up"
        className="bg-[#0d1420] border border-indigo-500/30 rounded-2xl p-6 md:p-8 flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <i className="ri-star-fill text-xs" />
              {featured.badge}
            </span>
          </div>
          <div className="flex gap-3">
            <a
              href={featured.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-teal-400 hover:opacity-90 transition-opacity"
            >
              <i className="ri-external-link-line" />
              Live Demo
            </a>
            <a
              href={featured.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              <i className="ri-github-fill" />
              GitHub
            </a>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white">{featured.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed">{featured.description}</p>

        {/* Bullet points */}
        <ul className="flex flex-col gap-2">
          {featured.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="mt-1 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 flex items-center justify-center shrink-0">
                <i className="ri-check-line text-white text-[10px]" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {featured.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-md bg-[#151C27] border border-white/5 text-gray-400 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Other Projects Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 60}
            className="bg-[#0d1420] border border-white/5 rounded-xl p-5 flex flex-col gap-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-white font-semibold text-lg">{project.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-[#151C27] border border-white/5 text-gray-500 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-1 border-t border-white/5">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                <i className="ri-external-link-line" />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                <i className="ri-github-fill" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
