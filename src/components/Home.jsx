import React from "react";

const projects = [
    {
        title: 'Amazon Clone',
        img: '',
        description: 'An e-commerce website of Amazon (clone) created using only HTML and CSS.',
        demo: 'https://amazon-clone-taupe-chi.vercel.app/',
        github: 'https://github.com/rohit-1624/Amazon-Clone'
    },
    {
        title: 'Online Book-Store',
        img: '',
        description: 'An online Book-store (e-commerce) website created using HTML, CSS, and a little JavaScript.',
        demo: 'https://bookstore-sigma-rust.vercel.app/',
        github: 'https://github.com/rohit-1624/Bookstore'
    },
    {
        title: 'Tic Tac Toe',
        img: '',
        description: 'A mini project game called Tic Tac Toe created using HTML, CSS, and JavaScript.',
        demo: 'https://tic-tac-toe-game-virid-alpha.vercel.app/',
        github: 'https://github.com/rohit-1624/Tic-Tac-Toe-game'
    },
    {
        title: 'Currency Converter using API',
        img: '',
        description: 'A currency converter application that converts currency values of different countries using HTML, CSS, JavaScript, and API.',
        demo: 'https://currency-converter-using-api-inky.vercel.app/',
        github: 'https://github.com/rohit-1624/Currency-converter-using-API'
    },
    {
        title: 'CodeSchool',
        img: '',
        description: 'An ed-tech website for teaching coding created using React.js and Tailwind CSS.',
        demo: 'https://code-school-seven.vercel.app/',
        github: 'https://github.com/rohit-1624/CodeSchool'
    },
    {
        title: 'CRUD Web Application',
        img: '',
        description: 'A CRUD (Create, Read, Update, Delete) web app where details are stored in a table and can be managed using React.js.',
        demo: 'https://crud-web-application.vercel.app/',
        github: 'https://github.com/rohit-1624/CRUD-Web-application'
    },
    {
        title: 'Online-Shopping (E-commerce)',
        img: '',
        description: 'Developed a responsive e-commerce website using React.js, Tailwind CSS, Firebase, and Razorpay, featuring authentication-based navbar changes, an admin panel for managing products, and secure payments.',
        demo: 'https://online-shopping-beta-eight.vercel.app/',
        github: 'https://github.com/rohit-1624/shopcode'
    },
    {
        title: 'Home Decor Website (E-commerce)',
        img: '',
        description: 'Built Home Decor, a responsive and visually aesthetic e-commerce featuring furniture, home decoration items web application built with Next.js, Tailwind CSS, and Firebase Authentication.',
        demo: 'https://home-decor-eosin.vercel.app/',
        github: 'https://github.com/rohit-1624/home-decor'
    }
];

const ProjectList = () => {
    return (
               
        <section  data-aos="fade-up"  id="projects" className="min-h-screen flex flex-col gap-5">
            <h1 className="text-4xl text-white mt-0 pl-4 md:pl-13 pt-10 font-bold underline">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4 md:px-13 text-white">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="p-4 border rounded-lg shadow-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.img})` }}
                    >
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="flex gap-3 mt-2">
                            <a href={project.demo} className="text-blue-600 underline">View Project</a>
                            <a href={project.github} className="text-blue-600 underline">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
