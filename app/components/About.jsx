"use client";
import { ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default (first) => {
  const [dataTab, setDataTab] = useState("education");
  const [dataIndex, setDataIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const data = [
    {
      education: {
        college: [
          {
            name: "Dayananda Sagar Academy of Technology and Management",
            course:
              "Bachelor of Engineering - Information Science and Engineering",
            cgpa: "7.9",
            duration: "2021 - 2025",
          },
          {
            name: "St. Francis Composite PU College",
            course: "Pre-University (1st - 2nd)",
            cgpa: "85%",
            duration: "2019 - 2021",
          },
        ],
      },
      certifications: [
        {
          name: "AWS Certification",
          link: "https://drive.google.com/file/d/1dgVtXF2E_jRCSywNeuOWCATODfh_i_Ja/view?usp=sharing",
        },
        { name: "DevOps", link: "https://drive.google.com/file/d/1cqMRq1szUYOOwX4u8WXQwF_WmQHuvuNy/view?usp=sharing" },
        {
          name: "Backend and RESTful APIs",
          link: "https://freecodecamp.org/certification/fcc5320c2ac-7b41-4469-8c24-adf3e4051881/back-end-development-and-apis",
        },
        {
          name: "Responsive Web Design",
          link: "https://freecodecamp.org/certification/nandishm0618/responsive-web-design",
        },
        {
          name: "Data Structures using JavaScript",
          link: "https://www.freecodecamp.org/certification/nandishm0618/javascript-algorithms-and-data-structures",
        },
      ],
      achievements: [
        {
          title: "Web3 Competition",
          place: "2nd Place",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7170495750693380096/",
        },
        {
          title: "Frontend Competition",
          place: "1st Place",
          link: "https://drive.google.com/file/d/12DNKTieYPjAJqup0-nc93oG3gXGJWLAj/view?usp=sharing",
        },
        {
          title: "Open source Contribution",
          place: "8th Place",
          link: "https://drive.google.com/file/d/12DNKTieYPjAJqup0-nc93oG3gXGJWLAj/view?usp=sharing",
        },
        {
          title: "LeetCode",
          place: "Solved 500+ Problems",
          link: "https://leetcode.com/u/Nandishm/",
        },
        {
          title: "CodeChef",
          place: "2-Star Coder",
          link: "https://www.codechef.com/users/nandish_0618",
        },
        {
          title: "Geeks for Geeks",
          place: "Rank 13th",
          link: "https://www.geeksforgeeks.org/user/nandishm0618/",
        },
      ],
    },
  ];

  const expertise = [
    {
      title: "Frontend",
      description:
        "Proficient in building responsive, user-friendly, and modern web interfaces using React.js, Tailwind CSS, and JavaScript/TypeScript. Skilled in creating seamless user experiences with performance optimization and clean UI design.",
    },
    {
      title: "Backend",
      description:
        "Experienced in designing and developing scalable RESTful APIs with Node.js and Express.js, integrating databases like MongoDB and PostgreSQL, and implementing secure authentication and authorization workflows.",
    },
    {
      title: "Git & Version Control",
      description:
        "Strong experience in Git and GitHub for version control, branching strategies, and collaborative development. Skilled in managing codebases, reviewing pull requests, and maintaining clean commit histories.",
    },
    {
      title: "Docker",
      description:
        "Hands-on experience containerizing applications with Docker, enabling consistent environments across development, testing, and production. Skilled in writing Dockerfiles, managing images, and optimizing container workflows.",
    },
    {
      title: "CI/CD",
      description:
        "Skilled in setting up Continuous Integration and Continuous Deployment pipelines using tools like GitHub Actions and Jenkins. Experienced in automating testing, builds, and deployments for faster and reliable releases.",
    },
    {
      title: "AWS & Cloud",
      description:
        "Proficient in AWS services including EC2, S3, Lambda, and RDS. Experienced in deploying cloud-native applications, implementing security best practices, and optimizing performance and cost using AWS cloud solutions.",
    },
    {
      title: "Problem Solving",
      description:
        "Strong problem-solving mindset with experience in competitive programming and real-world debugging. Skilled in breaking down complex challenges, writing optimized solutions, and adapting quickly to new technologies.",
    },
  ];
  const handleNext = () => {
    setIndex((next) => (next + 1) % expertise.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + expertise.length) % expertise.length);
  };

  const current = data[dataIndex];

  return (
    <>
      <div className="h-full w-full mx-auto px-4 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <div className=" space-y-5 mt-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-5">
              <img
                src="https://i.pinimg.com/1200x/86/c9/90/86c990f6dfca09d1883ae65b53471fed.jpg"
                alt="Avatar"
                className=" w-xs h-xs border-2 border-black/20 shadow-sm"
              />
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-black">
              Hello.
            </h2>
            <Link
              href="https://drive.google.com/file/d/1L6M5qZJZWoxqUNOq6EO2V22JyFQygWh0/view?usp=sharing"
              className="flex items-start justify-items-start text-2xl my-4 font-bold hover:underline"
            >
              I'm Nandish M
              <span className=" mt-1 ml-1">
                <Link2 />
              </span>
            </Link>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-500 mx-auto">
              A Passionate Full-Stack & Cloud Developer skilled in building
              scalable, secure, and user-focused applications with modern web
              and DevOps technologies.
            </p>
            <div className="border-b-4 border-black"></div>
          </div>

          <div className="flex flex-col space-y-4 select-none">
            <h2 className="text-xl md:text-xl lg:text-3xl font-extrabold tracking-tight text-gray-900">
              Know me more
            </h2>
            <p className="text-[18px] leading-relaxed text-gray-700 mx-auto">
              I am a passionate
              <span className="font-semibold text-black">
               {" "}Full-Stack Developer
              </span>
              with strong expertise in the
              <span className="text-black">
                {" "}MERN stack (MongoDB, Express.js, React.js, Node.js)
              </span>
              , capable of building end-to-end applications that are scalable,
              efficient, and user-focused.
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mx-auto">
              With hands-on experience in
              <span className="text-black">{" "}AWS Cloud</span>, I specialize in
              deploying secure, cloud-native applications and leveraging
              services for performance, reliability, and cost optimization.
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mx-auto">
              Skilled in <span className="text-black">DevOps practices{" "}</span>
              such as CI/CD pipelines, Docker, and Kubernetes, I ensure smooth
              development lifecycles and seamless deployments. My foundation in
              <span className="text-black">{" "}Linux{" "}</span>
              further enhances my ability to work in cloud and production
              environments effectively.
            </p>
            <p className="text-[18px] leading-relaxed text-gray-700 mx-auto">
              I bring a problem-solving mindset, adaptability, and a continuous
              learning attitude, making me highly suitable for roles where
              <span className="font-semibold text-black">
                {" "}full-stack development, cloud, and DevOps{" "}
              </span>
              expertise are key.
            </p>
            <div className="border-b-4 border-black mt-auto"></div>
          </div>

          <div className="space-y-8 flex flex-col items-stretch">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-xl lg:text-3xl font-extrabold tracking-tight text-gray-900">
                  Expertise
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handlePrev}
                    className="px-1 py-1 hover:text-black"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-1 py-1 hover:text-black"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="my-2">
                <h2 className="text-[18px] font-extrabold tracking-tight text-gray-400">
                  {expertise[index].title}
                </h2>
                <p className="text-[18px] leading-relaxed text-gray-700 mx-auto">
                  {expertise[index].description}
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-xl lg:text-3xl font-extrabold tracking-tight text-gray-900">
                  {dataTab === "certifications"
                    ? "Certifications"
                    : dataTab === "achievements"
                    ? "Achievements"
                    : "Education"}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 my-4 w-full">
                <button
                  onClick={() => setDataTab("education")}
                  className={`px-4 py-2 cursor-pointer ${
                    dataTab === "education"
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setDataTab("certifications")}
                  className={`px-4 py-2 cursor-pointer ${
                    dataTab === "certifications"
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Certifications
                </button>
                <button
                  onClick={() => setDataTab("achievements")}
                  className={`px-4 py-2 cursor-pointer ${
                    dataTab === "achievements"
                      ? "bg-black text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Achievements
                </button>
              </div>

              <div className="my-2 space-y-2">
                {dataTab === "education" &&
                  current.education.college.map((edu, idx) => (
                    <div key={idx} className="text-gray-700 text-[18px]">
                      <p className="mb-3">
                        <span className="font-bold">{edu.name}</span> -
                        {edu.course}
                      </p>
                      <div className="">
                        CGPA: {edu.cgpa}
                        <span className="px-5">{edu.duration}</span>
                      </div>
                    </div>
                  ))}

                {dataTab === "certifications" &&
                  current.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className=" flex items-baseline justify-between"
                    >
                      <div className="">
                        <p className="text-gray-700 text-[18px]">{cert.name}</p>
                      </div>
                      <div>
                        <Link
                          href={cert.link}
                          className="hover:underline transition mr-10"
                        >
                          Link
                        </Link>
                      </div>
                    </div>
                  ))}

                {dataTab === "achievements" &&
                  current.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start justify-between">
                      <p className="text-gray-700 text-[18px]">
                        {ach.title} -{" "}
                        <span className="font-semibold">{ach.place}</span>
                      </p>
                      <p className="text-gray-700 text-[18px]">
                        <Link
                          href={ach.link}
                          className="hover:underline transition mr-10"
                        >
                          Link
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="border-b-4 border-black mt-auto"></div>
          </div>
        </div>
      </div>
    </>
  );
};
