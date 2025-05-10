import React, { useState } from 'react';
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Work() {
    const [openJob, setOpenJob] = useState(null);

    const jobs = [
        {
            id: 1,
            title: "Associate Software Developer",
            company: "Sentry Insurance",
            dates: "May 2025 - Present",
            skills: ["TBD"],
            description: "TBD"
        },
        {
            id: 2,
            title: "Ambassador[MTU]",
            company: "College of Computing at MTU",
            dates: "September 2023 - Present",
            skills: ["Communication", "Creative Pitching"],
            description: "As an ambassador I work to promote the college and university to potential students and their families. From helping out with Texting Nights, Snapchat Takeovers, to giving tours I have actively been involved in trying to promote the College of Computing at MTU"
        },
        {
            id: 4,
            title: "Application Development Intern",
            company: "Minnesota Twins",
            dates: "May 2024 - August 2024",
            skills: ["DevOps", "Full-Stack", "React.js"],
            description: "This season I focused on developing a Staff Apparel Application from scratch. I developed a UI wireframe on Figma and after a couple meetings with my team regarding database design and the functionality of the app, I started developing the app. Using React.js, Prisma, and SQL I was able to create the first version of a shopping-like app with quick add, a cart, and more."
        },
        {
            id: 3,
            title: "Public Relations Manager",
            company: "IRHC Broomball at MTU",
            dates: "April 2025 - Present",
            skills: ["Canva", "Online PR"],
            description: "Updating the student body as well as the community regarding Broomball events as well as any upcoming deadlines. As well as creating eye-catching paper advertisements and captivating social media posts with the photos you take during events and canva elements. "
        },
        {
            id: 5,
            title: "Writing Center Tutor",
            company: "The Writing Center at MTU",
            dates: "August 2024 - April 2025",
            skills: ["Writing", "Homework Help", "Peer Review"],
            description: "Trained to give supportive, warm, welcoming, inclusive, and judgment-free support to both graduate and undergraduate students in their writing projects. Through collaboration with writers, I help encourage skill-building and writing as an iterative process."
        },
        {
            id: 6,
            title: "Server",
            company: "Somerset Country Club",
            dates: "May 2023 - August 2024",
            skills: ["Customer Service", "Problem Solving"],
            description: "As a server at a generational Country Club it is in my upmost interest to maintain a clean and put together look when serving the members. From memorizing and highlighting specials for each meal as well as remembering each members' preferred drink and name when greeting them at the table."
        },
        {
            id: 7,
            title: "Teaching Assistant",
            company: "Raddatz Dance Studio",
            dates: "September 2020 - December 2023",
            skills: ["Leadership", "Organization Skills"],
            description: "As a teacher in training I help the teacher control the kids and by helping one on one. I also help take attendance, lead stretches, or work on different skills. Recently, I have had the responsibility of running classes on my own when a teacher is out. While in college, I took on the role of taking inventory of dance shoes and their clothing line during my school's breaks."
        },
        {
            id: 8,
            title: "Aspirations Intern",
            company: "Minnesota Twins",
            dates: "June 2022 - November 2022",
            skills: ["JavaScript", "Team Coordination"],
            description: "This internship was built on questioning and my learning experience. But I am given a project in which I used multiple languages (React.js, Prisma, SQL, TypeScript, Tailwind, etc.) to create a working web development by the end of my internship. While building the development, I learned more about what a work environment consists of and collaborating with adult figures to grow my experience in the tech field."
        },
    ];

    const toggleJob = (id) => {
        setOpenJob(openJob === id ? null : id);
    };

    return (
        <section id="work" className="min-h-screen font-mono flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="w-full text-center mb-12">
                    <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-100 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border-2 border-white/10 p-6 rounded-xl bg-white/5 relative flex flex-col"
                        >
                            <button
                                onClick={() => toggleJob(job.id)}
                                className="text-left w-full"
                            >
                                <h3 className="text-2xl font-bold text-teal-300">{job.title}</h3>
                                <p className="text-lg">{job.company}</p>
                                <p className="text-sm text-gray-400">{job.dates}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {job.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openJob === job.id ? 'max-h-96 mt-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-300 text-base">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}