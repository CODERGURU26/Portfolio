import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../FramerMotion/variant';

const projects = [
    {
        title: 'SwiftKart',
        image: '/swiftkart.jpeg',
        description:
            'An E-commerce website built using ReactJS, Tailwind CSS, email-JS ,  Firebase, Razorpay, and deployed on Vercel.',
        link:'https://swiftkart-rho.vercel.app/'
    },
    {
        title: 'CRM',
        image: '/CRM.jpeg',
        description:
            "Developed a full-featured CRM platform with customer tracking, lead management, automated workflows, and role-based dashboards using ReactJS, Tailwind CSS, Redux, NodeJS , ExpressJS & MongoDB.",
        link:'https://crm-eight-alpha-73.vercel.app/'
    },
    {
        title: 'Portfolio',
        image: '/Portfolio.jpeg',
        description:
            'My personal portfolio built with ReactJS, TailwindCSS , email-JS and Framer Motion providing a responsive and user-friendly experience. Deployed on Vercel.',
        link:'#'
    },
];

const ProjectMain = () => {
    return (
        <motion.div 
        variants={fadeIn('down', '0.2')}
        initial = 'hidden'
        whileInView = 'show'
        viewport={{once:false, amount:0}}
        id='projects' className="py-20 px-4 bg-[#0d1321]">
            <h1 className="text-4xl md:text-6xl text-cyan-400 text-center font-bold mb-12">
                Projects
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-gradient-to-br from-cyan-400/50 to-amber-400/50 p-[2px] rounded-xl hover:-translate-y-3 hover:scale-105 transition-transform duration-500"
                    >
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                                <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded shadow hover:shadow-lg transition-all duration-300 hover:scale-105 w-fit"
                                >
                                    Live Preview
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectMain;
