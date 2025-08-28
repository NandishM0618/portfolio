import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"

export default (first) => {
    return (
        <footer className=" text-black py-4">
            <div className="max-w-6xl mx-auto space-y-3 px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm">
                    © {new Date().getFullYear()} Nandish M. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/NandishM0618" className="hover:text-black hover:scale-105 transition">
                        <SiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/nandish-m-1471b8233/" className="hover:text-black hover:scale-105 transition">
                        <SiLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/" className="hover:text-black hover:scale-105 transition">
                        <SiInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>

    )
}