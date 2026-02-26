import React from "react";

const userData = [
  { icon: "ri-cake-2-line", label: "Birthday", data: "18 Aug 2002" },
  { icon: "ri-phone-line", label: "Phone", data: "+91 7018304940" },
  { icon: "ri-map-pin-2-line", label: "City", data: "Baddi, H.P., India" },
  { icon: "ri-user-3-line", label: "Age", data: (() => { const b = new Date("2002-08-18"); const n = new Date(); let a = n.getFullYear() - b.getFullYear(); if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--; return String(a); })() },
  { icon: "ri-graduation-cap-line", label: "Degree", data: "MCA (Master of Computer Application)" },
  { icon: "ri-mail-line", label: "Email", data: "rohitsharmasharma4689@gmail.com" },
];

const About = () => {
  return (
    <div className="bg-[#02050A]">
      <section
        id="about"
        data-aos="fade-up"
        className="flex flex-col px-4 md:px-13 pt-16 pb-19 gap-6"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white underline">About</h1>

        {/* Bio */}
        <div data-aos="fade-right" className="flex flex-col gap-4 max-w-3xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hi! I'm <span className="text-white font-semibold">Rohit Sharma</span> — a passionate Full Stack Developer with hands-on experience building production-grade platforms using Next.js, React, TypeScript, and Tailwind CSS. Currently pursuing my MCA and open to new opportunities.
          </p>
        </div>

        {/* Info Grid */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 text-lg">
          {userData.map((item, i) => (
            <div key={i} className="flex gap-3 items-center py-3 border-b border-white/5">
              <i className={`${item.icon} text-indigo-400 text-xl`} />
              <span className="text-white font-semibold w-24 shrink-0">{item.label} :</span>
              <span className="text-gray-300">{item.data}</span>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default About;
