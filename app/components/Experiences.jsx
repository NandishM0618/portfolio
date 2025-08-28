import { Link2 } from "lucide-react";
import Link from "next/link";

export default (first) => {
  return (
    <div className=" mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Experience</h2>

      <div className="space-y-4 max-h-[493px] overflow-y-scroll custom-scroll">
        <div className=" p-6 ">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="">
              <Link
                href="https://drive.google.com/file/d/1HQkR8Iw9xXeQ_rmAGPrOF2Gl27kv_apZ/view?usp=sharing"
                className="text-xl flex items-start justify-items-start hover:underline text-black font-semibold"
              >
                Rooman Technologies
                <span className=" mx-2 mt-1 flex-1">
                  <Link2 />
                </span>
              </Link>
              <p className="text-sm text-gray-600">
                Cloud Application Development Intern
              </p>
            </div>
            <time className="text-sm text-gray-500">
              Sept 2024 – Feb 2025 • Remote
            </time>
          </header>

          <div className="mt-4 space-y-3 text-gray-500">
            <p>
              Completed a 20-week internship focused on cloud application
              development — designed, implemented and tested cloud-native
              features while collaborating with a cross-functional team.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Cloud & infra:</span> Deployed
                microservices to AWS, configured CI/CD pipelines and monitored
                application metrics using CloudWatch and logging best practices.
              </li>
              <li>
                <span className="font-medium">Full-stack delivery:</span> Built
                backend endpoints, integrated with frontend components and
                ensured secure access patterns using IAM and environment-based
                secrets.
              </li>
              <li>
                <span className="font-medium">Outcome:</span> Delivered
                production-ready features and wrote handover docs to make future
                maintenance smoother.
              </li>
            </ul>

            <p className="text-sm text-gray-500">
              Tech: AWS (Lambda, S3, CloudWatch) · Node.js · Docker · CI/CD
            </p>
          </div>
        </div>
        <div className="border-b-4 border-black mt-auto"></div>

        <div className=" p-6 ">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <Link
                href="https://drive.google.com/file/d/1WMkB0DdjFDrMCGnyLi4DZluNHgr5TxmY/view?usp=sharing"
                className="text-xl flex items-start justify-items-start hover:underline text-black font-semibold"
              >
                Baymap Systems
                <span className=" mx-2 mt-1 flex-1">
                  <Link2 />
                </span>
              </Link>
              <p className="text-sm text-gray-600">
                Front-End Developer (Part-time)
              </p>
            </div>
            <time className="text-sm text-gray-500">
              Dec 2023 – Feb 2024 • Remote
            </time>
          </header>

          <div className="mt-4 space-y-3 text-gray-700">
            <p>
              Built and maintained the company's production portal using{" "}
              <span className="font-medium">HTML, CSS and JavaScript</span>,
              ensuring pixel-perfect UIs and consistent behavior across modern
              browsers and devices.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">UI/UX improvements:</span>{" "}
                Converted design mockups into reusable components, improved
                navigation and layout flow which increased user engagement and
                reduced bounce on key pages.
              </li>
              <li>
                <span className="font-medium">
                  Performance & maintainability:
                </span>
                Refactored CSS and removed duplicate scripts, lowering bundle
                size and improving first meaningful paint; organized code into
                modular components for faster feature delivery.
              </li>
              <li>
                <span className="font-medium">Collaboration:</span> Worked
                closely with backend and design teams to integrate REST APIs,
                align on contracts, and ship features with thorough QA and
                documentation.
              </li>
            </ul>

            <p className="text-sm text-gray-500">
              Tech: HTML5 · CSS3 · JavaScript · Responsive Design
            </p>
          </div>
        </div>
        <div className="border-b-4 border-black mt-auto"></div>

        <div className=" p-6 ">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <Link
                href="https://drive.google.com/file/d/12DNKTieYPjAJqup0-nc93oG3gXGJWLAj/view?usp=sharing"
                className="text-xl flex items-start justify-items-start hover:underline text-black font-semibold"
              >
                NJACK — IIT Patna
                <span className=" mx-2 mt-1 flex-1">
                  <Link2 />
                </span>
              </Link>
              <p className="text-sm text-gray-600">
                Open-Source Contributor (Part-time)
              </p>
            </div>
            <time className="text-sm text-gray-500">Dec 2023 • Remote</time>
          </header>

          <div className="mt-4 space-y-3 text-gray-700">
            <p>
              Contributed to open-source projects under the NJACK umbrella —
              focused on feature enhancements, bug fixes, and documentation that
              improved developer experience and project health.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Skill growth:</span> Strengthened
                React and JavaScript skills by implementing real features,
                writing unit-level tests and improving component reusability.
              </li>
              <li>
                <span className="font-medium">Community & communication:</span>
                Participated in code reviews, issue triage and documentation
                updates, practicing clear PR descriptions and collaborative
                problem solving.
              </li>
              <li>
                <span className="font-medium">Delivery:</span> Submitted PRs
                that were merged into active repositories and followed
                contribution workflows.
              </li>
            </ul>

            <p className="text-sm text-gray-500">
              Tech: JavaScript · React · Git · Open-source collaboration
            </p>
          </div>
        </div>
        <div className="border-b-4 border-black mt-auto"></div>
      </div>
    </div>
  );
};
