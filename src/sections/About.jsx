import React from 'react'

export default function About() {
    const skills = [
        "Front-End", "Full-Stack", "UI/UX", "Prisma ORM", "Problem Solving", "Time Management", "Networking", "Leadership", "Team Coordination", "DevOps", "Jira", "Figma", "Canva",
    ];
    const awards = [
        "Certificate of Distinction NCWIT", "Honorable Mention NCWIT", "Minnesota State Winner NCWIT", "Dean's List (Every Semester)", "John W. Council Scholarship",
    ];
    const languages = [
        "TypeScript", "React.js", "Java", "JavaScript", "R", "SAS", "C", "MIPS Assembly", "PHP", "MySQL", "Tailwind CSS", "HTML", "CSS", "Prisma ORM"
    ]
    return (
        <section id="about" className="min-h-screen font-mono flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <div className="w-full text-center mb-12">
                    <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-100 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                </div>

                <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all space-y-6 text-gray-300 text-xl">

                    <p>
                        My journey in tech began on the floor of my dad’s office, exploring Hour of Code while he worked on projects. With limited 
                        CS options at school, I dove into extracurriculars—Technovation[MN] taught me different languages and entrepreneurship skills, while programs
                        like Girls Who Code and TechGirlz introduced me to web development.
                    </p>

                    <p>
                        A defining moment came during my internship with the Minnesota Twins, where I spent four months building a React app and saw
                        how software quietly powers the world of sports. That experience solidified my passion for development—especially user-focused, 
                        accessible design.
                    </p>

                    <p>
                        I’m also committed to mentorship. Support from strong female mentors shaped my path, and now I aim to lift others—especially 
                        women—through inclusive tech, thoughtful UX, and community-driven impact.
                    </p>


                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-2xl text-center font-bold mb-8'> Languages </h3>
                        <div className="flex justify-center flex-wrap gap-2">
                            {languages.map((lang, index) => (
                                <span
                                    key={index}
                                    className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>

                    </div>
                    <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                        <h3 className='text-2xl text-center font-bold mb-8'> Skills </h3>
                        <div className="flex justify-center flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="rounded-xl p-1 hover:-translate-y-1 transition-all w-full md:w-full">
                        <h3 className="text-2xl text-center font-bold mb-8">Awards</h3>
                        <div className="flex justify-center flex-wrap gap-2">
                            {awards.map((award, index) => (
                                <span
                                    key={index}
                                    className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                                >
                                    {award}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
