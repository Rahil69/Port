import { SiTypescript, SiTailwindcss, SiVercel,SiNextdotjs, SiReact } from "react-icons/si";
import { FaGithub  } from "react-icons/fa";

export default function More() {
    return(
        <div className="pt-9 flex flex-wrap justify-center items-center gap-6 md:gap-20">
            <div className="flex flex-col items-center">
                <SiTypescript className="h-10 w-10 text-gray-300"/>
                <span className="text-xs text-gray-400 mt-4 ">Typescript</span>
            </div>
            <div className="flex flex-col items-center">
                <SiTailwindcss className="h-10 w-10 text-gray-300"/>
                <span className="text-xs text-gray-400 mt-4">TailWindCSS</span>
            </div>
            <div className="flex flex-col items-center">
                <SiVercel className="h-10 w-10 text-gray-300"/>
                <span className="text-xs text-gray-400 mt-4">Vercel</span>
            </div>
            <div className="flex flex-col items-center">
                <FaGithub className="h-10 w-10 text-gray-300"/>
                <span className="text-xs text-gray-400 mt-4">GitHub</span>
            </div>
            <div className="flex flex-col items-center">
                <SiNextdotjs className="h-10 w-10 text-gray-300 "/>
                <span className="text-xs text-gray-400 mt-4">NextJS</span>
            </div>
            <div className="flex flex-col items-center">
                <SiReact className="h-10 w-10 text-gray-300 "/>
                <span className="text-xs text-gray-400 mt-4">React</span>
            </div>
        </div>
    )
}