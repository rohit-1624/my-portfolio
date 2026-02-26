import React from "react";

const techSkills = [
  { src: "/images/nextjs.png", name: "Next.js" },
  { src: "/images/react.png", name: "React.js" },
  { src: "/images/Js.png", name: "JavaScript" },
  { src: "/images/html.png", name: "HTML5" },
  { src: "/images/css.png", name: "CSS3" },
  { src: "/images/tailwind.jfif", name: "Tailwind CSS" },
  { src: "/images/redux.png", name: "Redux" },
  { src: "/images/github2.jpg", name: "GitHub" },
];

const softSkills = [
  "Communication",
  "Ability to work in a team",
  "Critical Thinking & Problem Solving",
  "Self-motivated",
  "Curiosity",
  "Time Management",
];

const Skills = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1500"
      id="skills"
      className="min-h-screen flex flex-col gap-8 bg-[#09101A] px-4 md:px-16 py-16"
    >
      {/* Heading */}
      <h1 className="text-4xl text-white font-bold underline">Skills</h1>

      {/* Tech Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {techSkills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 p-4 bg-[#151C27] rounded-lg hover:scale-105 transition-transform duration-200"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 object-contain rounded-lg"
            />
            <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Non-Technical Skills */}
      <div data-aos="fade-right">
        <h2 className="text-3xl text-white font-bold underline mb-5">
          My Non-Technical Skills Include:
        </h2>
        <ul className="list-disc list-inside text-xl text-gray-300 pl-4 space-y-2">
          {softSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default Skills;
