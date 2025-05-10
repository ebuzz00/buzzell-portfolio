import React from 'react'
import RevealOnScroll from '../UI/RevealOnScroll';

export default function Edu() {
    const courses = [
        "Intro to Programming I/II", "Discrete Structures", "Data Structures", "Formal Models of Computation", "Programming at the Hardware/Software Interface", "Team Software Project", "Intro to Database Systems"
    ];
    const extra =[
        "Writing Center Tutor", "Ambassador[MTU]",  "NACME Scholar", "Humane Interface Design Enterprise", "Leading Scholar", "Women in Computer Science", "Intramural Broomball", "Technovation Mentor and Judge", "Rowing Club at MTU Varsity Member and Executive Board Tech Influencer",
    ];
    const activities = [
        "Student Council", "National Honors Society", "Winterguard (School and Independent)", "Varsity Golf", "Pom Squad", "School Board Student Representative", "Technovation[MN] Challenge", "Club Soccer", "Studio Dance Teacher and Dancer", "BOA Honor Band",
    ];
    return (
        <section id="edu" className="min-h-screen font-mono flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <div className="w-full text-center mb-12">
                    <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-100 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Education
                    </h2>
                </div>
                <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all space-y-6 text-gray-300 text-xl">
                    <div className="flex justify-between">
                        <p>B.S. Software Engineering</p>
                        <p className="text-right">Expected May 2027</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Michigan Technological University</p>
                        <p className="text-right"> Houghton, Michigan</p>
                    </div>


                    <p>GPA: 3.88 | Credits: 61</p>


                    <div className="flex justify-start flex-wrap gap-2">
                        <p>Courses:</p>
                        {courses.map((course, index) => (
                            <span
                                key={index}
                                className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                            >
                                {course}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-start flex-wrap gap-2">
                        <p>Extracurriculars:</p>
                        {extra.map((extra, index) => (
                            <span
                                key={index}
                                className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                            >
                                {extra}
                            </span>
                        ))}
                    </div>

                </div>
                <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all space-y-6 text-gray-300 text-xl">
                    <div className="flex justify-between">
                        <p>High School GED</p>
                        <p className="text-right">June 2023</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Two Rivers High School</p>
                        <p className="text-right">Mendota Heights, Minnesota</p>
                    </div>


                    <p>GPA: 3.98</p>

                    <div className="flex justify-start flex-wrap gap-2">
                        <p>Extracurriculars:</p>
                        {activities.map((act, index) => (
                            <span
                                key={index}
                                className="bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-400/20 hover:shadow-md transition duration-200 ease-in-out"
                            >
                                {act}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}
