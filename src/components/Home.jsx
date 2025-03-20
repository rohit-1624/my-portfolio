import { easeOut, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const texts = ["Frontend Developer", "Frontend Web Developer", "React Enthusiast"]

const Home = () => {
    const items = [
        {
            icon: "ri-github-fill",
            text: "GitHub",
            color: "bg-gray-900",
            href: "https://github.com/rohit-1624/"
        },
        {
            icon: "ri-linkedin-box-fill",
            text: "LinkedIn",
            color: "bg-blue-700",
            href: "https://www.linkedin.com/in/rohit-sharma-870ab2261/"
        },
        {
            icon: "ri-mail-fill",
            text: "Email",
            color: "bg-red-600",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=rohitsharmasharma4689@gmail.com"
        }
    ];

    const [index, setIndex] = useState(0)
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const typeText = () => {
            setText((prev) =>
                isDeleting ? texts[index].substring(0, prev.length - 1): texts[index].substring(0, prev.length + 1)
            );

            if (!isDeleting && text === texts[index]) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(typeText, isDeleting ? 100 : 200);
        return () => clearTimeout(timer);
    }, [text, index, isDeleting]);

    const openResume = (e) => {
        e.preventDefault()
        window.open("https://drive.google.com/file/d/1MiGBnFwWdepRpLZgNEHBjPDZkeoG8XfO/view?usp=sharing")
        target = "_blank"
        rel = "noopener noreferrer"
    }

    return (
        <div className="bg-[#09101A]">
            <section id="home" className="min-h-screen flex items-center justify-center pt-6 md:pt-30 py-8 px-4 md:px-12">
                <div className="flex flex-col py-4 px-2 bg-[#151E4C] items-center absolute left-0 text-white text-3xl gap-2">
                    {
                        items.map((item, index) => (
                            <div key={index} className="relative group flex flex-col items-center z-50">
                                {/* Icon */}
                                <div className="p-2 text-white cursor-pointer">
                                    <i className={`${item.icon} text-3xl`}></i>
                                </div>

                                {/* Side Panel (Appears on Hover) */}
                                <div
                                    className={`absolute left-0 top-0 flex items-center gap-2 px-4 py-2 rounded text-white
                                        opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                                        transition-all duration-300 cursor-pointer z-50 ${item.color}`}
                                >
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" >
                                        <i className={`${item.icon} text-3xl`}></i>
                                        <span className="text-2xl font-medium underline">{item.text}</span>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div data-aos="fade-in" className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col p-6 md:p-16 pt-1 gap-6 justify-center">
                        <div className="space-y-1 text-white">
                            <h1 className="text-3xl md:text-4xl font-bold">Hi, I'm Rohit!</h1>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                                className="text-3xl md:text-4xl font-bold"
                            >{text}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="ml-1"
                                >
                                    |
                                </motion.span>
                            </motion.h1>
                        </div>
                        <p className="text-lg text-gray-300 mt-2">A passionate Frontend Developer dedicated to crafting beautiful, interactive, and high-performance web experiences. I specialize in React.js, Tailwind CSS, and converting modern UI/UX designs into build seamless working user-interface. Let’s bring ideas to life with clean, efficient, and user-friendly code!</p>
                        <div className="flex gap-7">
                            <button onClick={openResume} className="animate__animated w-fit text-4xl text-white font-semibold cursor-pointer hover:shadow-2xl shadow-md hover:shadow-gray-700 flex gap-1 px-8 py-4 justify-center items-center bg-gradient-to-r from-indigo-500 to-teal-400">
                                Resume
                                <i className="ri-arrow-right-wide-fill text-3xl animate__animated group-hover:animate__headShake"></i>
                            </button>
                            {/* <a href="https://github.com/rohit-1624/portfolio" target="_blank" rel="noopener noreferrer"  className="text-blue-600 text-xl pb-3 underline flex items-end ">Portfolio-github</a> */}

                        </div>
                    </div>

                    <div className="md:h-[300px] md:w-[260px] h-[200] w-[150px] mx-auto py-15">
                        <img src="/images/profile-pic.jpeg" alt="profile-pic" className="rounded-full border border-2 border-violet-700 shadow-lg shadow-gray-600" />
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Home;
