import { SiJavascript, SiReact, SiNextdotjs, SiDocker, SiAmazon, SiTailwindcss, SiHtml5, SiCss3, SiRedux, SiJquery, SiKubernetes, SiCdprojekt, SiCplusplus, SiC, SiPython, SiFlask, SiNodedotjs, SiMongodb, SiSqlalchemy, SiPostgresql, SiMysql, SiGithub, SiLinux, SiGnubash, SiApifox, SiExpress, SiJenkins } from 'react-icons/si'
export default (first) => {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript size={40} /> },
        { name: "React", icon: <SiReact size={40} /> },
        { name: "Next.js", icon: <SiNextdotjs size={40} /> },
        { name: "Docker", icon: <SiDocker size={40} /> },
        { name: "AWS", icon: <SiAmazon size={40} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
        { name: "HTML5", icon: <SiHtml5 size={40} /> },
        { name: "CSS3", icon: <SiCss3 size={40} /> },
        { name: "Redux", icon: <SiRedux size={40} /> },
        { name: "Jquery", icon: <SiJquery size={40} /> },
        { name: "Kubernetes", icon: <SiKubernetes size={40} /> },
        { name: "C++", icon: <SiCplusplus size={40} /> },
        { name: "C", icon: <SiC size={40} /> },
        { name: "Python", icon: <SiPython size={40} /> },
        { name: "Flask", icon: <SiFlask size={40} /> },
        { name: "Nodejs", icon: <SiNodedotjs size={40} /> },
        { name: "MongoDB", icon: <SiMongodb size={40} /> },
        { name: "SQL", icon: <SiSqlalchemy size={40} /> },
        { name: "PostgreSql", icon: <SiPostgresql size={40} /> },
        { name: "Mysql", icon: <SiMysql size={40} /> },
        { name: "Github", icon: <SiGithub size={40} /> },
        { name: "Linux", icon: <SiLinux size={40} /> },
        { name: "Bash", icon: <SiGnubash size={40} /> },
        { name: "REST APIs", icon: <SiApifox size={40} /> },
        { name: "ExpressJs", icon: <SiExpress size={40} /> },
        { name: "Jenkins", icon: <SiJenkins size={40} /> },
    ];

    const projects = [
        {
            title: "Cloud Image Processor",
            description:
                "A serverless production-ready app built with AWS Lambda, S3, DynamoDB, Cognito, and CloudWatch for image resizing and monitoring.",
            tech: ["AWS Lambda", "S3", "Cognito", "CloudWatch", "DynamoDB"],
            link: "",
        },
        {
            title: "Quantum-Inspired IoT Privacy System",
            description:
                "Implemented post-quantum encryption with ML-KEM (Kyber) and AES-256, integrated with MQTT for secure IoT data sharing.",
            tech: ["Node.js", "Post-Quantum Crypto", "MQTT", "Docker"],
            link: "",
        },
        {
            title: "E-commerce Website",
            date: "August 2024",
            type: "Website",
            description:
                "A full-stack e-commerce platform developed using the MERN stack. Features include authentication, product management, shopping cart, and order processing.",
            tech: ["MongoDB", "Express.js", "React", "Node.js"],
            link: "https://ecomm-shopio.vercel.app/"
        },
        {
            title: "Real-time Collaborative Coding Platform",
            date: "July 2024",
            type: "Website",
            description:
                "A collaborative coding platform with blogging features, enabling users to write, share, and discover thought-provoking articles and stories.",
            tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
            link: "https://collabcoe-ui.vercel.app/"
        },
        {
            title: "Task Management System",
            date: "May 2024",
            type: "Website",
            description:
                "Comprehensive tool for teams to manage tasks, collaborate effectively, and track progress towards goals.",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/NandishM0618/Taskie",
        },
        {
            title: "Real-time Chat App",
            date: "December 2023",
            type: "Website",
            description:
                "A simple real-time chat application built with React and Firebase. Includes real-time chatting, authentication, and responsive UI.",
            tech: ["React", "Firebase", "TailwindCSS"],
            link: "https://github.com/NandishM0618/ReactCreations/tree/main/chat-app"
        },
        {
            title: "Space Exploration Dashboard",
            date: "November 2023",
            type: "Website",
            description:
                "Provides a real-time view of Earth events and space launches, helping users stay updated on the latest happenings in the cosmos.",
            tech: ["React", "Node.js", "Space API"],
            link: "https://mern-space.onrender.com/"
        },
        {
            title: "Event WebApp",
            date: "April 2023",
            type: "Website",
            description:
                "An event webpage that provides information, registration, and engagement for events, serving as a central hub for participants.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://gevent.netlify.app/"
        },
    ];
    return (
        <section className="px-6">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
                {/* Skills */}
                <div className="w-full lg:w-1/2 mb-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center space-y-2 text-gray-800 hover:text-black transition"
                            >
                                {skill.icon}
                                <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="w-full lg:w-1/2 max-h-[494px] overflow-y-scroll custom-scroll p-3">
                    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="p-6 cursor-pointer hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-800"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="text-black font-medium hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}