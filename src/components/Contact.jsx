import React from "react";

const contacts = [
  {
    icon: "ri-mail-line",
    label: "Email",
    value: "rohitsharmasharma4689@gmail.com",
    href: "mailto:rohitsharmasharma4689@gmail.com",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: "ri-linkedin-box-fill",
    label: "LinkedIn",
    value: "rohit-sharma-870ab2261",
    href: "https://www.linkedin.com/in/rohit-sharma-870ab2261/",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    value: "github.com/rohit-1624",
    href: "https://github.com/rohit-1624",
    color: "text-gray-300",
    bg: "bg-gray-500/10",
  },
];

const Contact = () => (
  <section
    data-aos="fade-up"
    id="contact"
    className="bg-[#09101A] px-4 md:px-13 pt-10 pb-16 flex flex-col gap-8"
  >
    {/* Heading */}
    <h1 className="text-4xl font-bold text-white underline">Get in Touch</h1>

    <p className="text-gray-400 text-lg max-w-xl">
      I'm open to new opportunities and collaborations. Feel free to reach out!
    </p>

    {/* Contact Cards */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      {contacts.map((c, i) => (
        <a
          key={i}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#0d1420] border border-white/5 rounded-xl px-5 py-4 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group min-w-[260px]"
        >
          <span className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
            <i className={`${c.icon} ${c.color} text-xl`} />
          </span>
          <div>
            <p className="text-gray-500 text-xs font-medium">{c.label}</p>
            <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors break-all">
              {c.value}
            </p>
          </div>
          <i className="ri-arrow-right-up-line text-gray-600 group-hover:text-indigo-400 transition-colors ml-auto" />
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
