import React from "react"

const Skills = () => {
    return (
        <section data-aos="fade-down" data-aos-duration="1500" id="skills" className="min-h-screen flex flex-col gap-5">
            <h1 className="text-4xl text-white pl-4 md:pl-13 my-0 pt-0 font-bold underline">Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 p-6 md:p-7">
                <img src="/images/html.png" alt="HTML" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/css.png" alt="CSS" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/Js.png" alt="JavaScript" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/tailwind.jfif" alt="Tailwind CSS" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/react.png" alt="React" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/redux.png" alt="Redux" className="w-full h-auto aspect-square object-cover rounded-lg" />
                <img src="/images/github2.jpg" alt="GitHub" className="w-full h-auto aspect-square object-cover rounded-lg" />
            </div>

            <h1 className="text-3xl text-white pl-4 md:pl-14 my-2 pt-2 font-bold underline">
                My Non-Technical Skills Include:
            </h1>
            <ul className="list-disc list-inside text-xl text-gray-300 pl-6 md:pl-10 text-white space-y-2">
                <li>Communication</li>
                <li>Ability to work in a team</li>
                <li>Critical Thinking & Problem Solving</li>
                <li>Self-motivated</li>
                <li>Curiosity</li>
                <li>Time Management</li>
            </ul>

        </section>
    )
}

export default Skills