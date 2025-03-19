import React from "react";
import { useEffect } from "react";

const userData = [
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'Birthday',
        data: '18 Aug 2002'
    },
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'Phone',
        data: '+91 7018304940'
    },
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'City',
        data: 'Baddi, H.P. , India'
    }
]

const userData2 = [
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'Age',
        data: '22'
    },
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'Degree',
        data: 'Master of Computer Aplication (MCA)'
    },
    {
        icon: <i className="ri-arrow-right-wide-fill"></i>,
        label: 'Email',
        data: 'rohitsharmasharma4689@gmail.com'
    }
]

const About = () => {
    return (
        <div className="bg-[#02050A]">
            <section id="about"
                data-aos="fade-up"
                className="min-h-screen flex flex-col gap-5">
                <h1 className="text-4xl text-white mt-0 pl-4 md:pl-13 pt-10 font-bold underline"
                    style={{
                        animationDirection: 'normal'
                    }}
                >About</h1>
                <div>
                    <div className="text-lg text-gray-300 px-4 md:px-13">
                        <h3>Hi, My name is Rohit Sharma. I'm a Frontend Web Developer who loves crafting beautiful, interactive, and high-performance web experiences. I'm passionate, detail-oriented, and highly motivated front-end developer with a strong foundation in HTML, CSS, JavaScript, Tailwind CSS, and React.js.</h3>
                    </div>
                    <div data-aos="fade-right" className="flex flex-col justify-center items-center">
                        <div className="text-3xl text-white mt-0 pl-4 md:pl-13 pt-10 font-semibold">
                            <h1>Web Developer & Frontend Web Developer !</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 text-xl w-full p-4 md:p-8 items-center justify-center">
                            <div>
                                <ul className="flex flex-col space-x-6">
                                    {
                                        userData.map((item, index) => (
                                            <div className="flex gap-2" key={index}>
                                                <li>
                                                    <button
                                                        className="block py-3 px-4 text-lg font-semibold text-gray-200 hover:text-blue-400 transition"
                                                    >
                                                        {item.icon}
                                                    </button>
                                                </li>
                                                <li className="text-white py-3 px-4 text-lg font-semibold">{item.label} :</li>
                                                <li className="text-gray-300 py-3 px-4 text-lg font-semibold">{item.data}</li>
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <ul className="flex flex-col space-x-6">
                                    {
                                        userData2.map((item, index) => (
                                            <div className="flex gap-2" key={index}>
                                                <li>
                                                    <button
                                                        className="block py-3 px-4 text-lg font-semibold text-white hover:text-blue-400 transition"
                                                    >
                                                        {item.icon}
                                                    </button>
                                                </li>
                                                <li className="text-white py-3 px-4 text-lg font-semibold">{item.label} :</li>
                                                <li className="text-gray-300 py-3 px-4 text-lg font-semibold">{item.data}</li>
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section data-aos="fade-down" data-aos-duration="1500" id="skills" className="min-h-screen flex flex-col gap-5">
                <h1 className="text-4xl text-white pl-4 md:pl-13 my-0 pt-0 font-bold underline">Skills</h1>
                <div   className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 p-6 md:p-7">
                    <img src="/images/html.png" alt="HTML" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/css.png" alt="CSS" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/Js.png" alt="JavaScript" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/tailwind.jfif" alt="Tailwind CSS" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/react.png" alt="React" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/redux.png" alt="Redux" className="w-full h-auto aspect-square object-cover rounded-lg" />
                    <img src="/images/github2.jpg" alt="GitHub" className="w-full h-auto aspect-square object-cover rounded-lg" />
                </div>
            </section>
        </div>
    )
}

export default About;
