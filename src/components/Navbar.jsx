import React, { useState } from "react";

const navComp = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "skills",
        label: "Skills"
    },
    {
        id: "projects",
        label: "Projects"
    },
    {
        id: "contact",
        label: "Contact"
    },
];

const Navbar = () => {
    const [mobileSize, setMobileSize] = useState(0);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMobileSize(0)
        
    };

    return (
        <div>
            {/* Navbar for Desktop */}
            <div className="hidden md:block">
                <div className="fixed top-0 left-0 right-0 z-50 mx-auto w-11/12 py-4 px-16 bg-[#151C27] flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
                        <h1 className="text-white text-3xl font-bold">Rohit</h1>
                    </div>

                    <ul className="flex space-x-4">
                        {
                            navComp.map((item, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="block py-3 px-4 text-lg font-semibold text-white hover:text-blue-400 cursor-pointer transition"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="md:hidden block">
                <aside
                    className="bg-[#151C27] fixed top-0 left-0 h-full z-50  overflow-hidden"
                    style={{
                        width: mobileSize,
                        transition: '0.3s',
                    }}
                >
                    <div className="flex flex-col bg-[#151C27] hover:text-blue-600">
                        <button
                            className="text-left mx-4 mt-4"
                            onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
                        >
                            <i className="ri-menu-2-fill text-white text-xl"></i>
                        </button>
                        {
                            navComp.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.id)}
                                    className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-blue-600"
                                >
                                    {item.label}
                                </button>
                            ))
                        }
                    </div>
                </aside>
                <section
                    className="bg-[#151C27] pt-0"
                    style={{
                        transition: '0.3s',
                    }}
                >
                    <nav className="bg-[#151C27] p-6 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex gap-4 items-center">
                            <button
                                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
                            >
                                <i className="ri-menu-2-line text-xl"></i>
                            </button>
                            <h1 className="text-xl text-white rounded font-semibold">Portfolio</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img
                                    src="/images/profile-pic.jpeg"
                                    className="w-12 h-12 rounded-full"
                                />
                            </button>
                        </div>
                    </nav>
                </section>
            </div>
        </div>
    );
};

export default Navbar;
