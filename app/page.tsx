'use client'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import More from "./components/More";
import Project from "./components/Projects";
export default function HomePage() {


    return(
        <div>
            <Navbar/>
            <main className="font-mono">
                {/* Home Section - full width and height */}
                <section id="home" className="font-mono w-full  flex flex-col justify-center items-center min-h-screen pt-20">
                    <div className="max-w-xl w-full px-4 text-center">
                        <h1 className="text-2xl text-white mb-6">Raahil Mu-umin</h1>
                        <p className="text-gray-400 mb-6 text-sm">I’m a software developer from Maldives with a keen eye for detail and
exceptional flexibility. I excel under pressure and consistently deliver
high-quality results. As a team player, I get along well with everyone
and am friendly, calm, and adaptable to various work environments</p>
                        <a href="mailto:moominraahil@gmail.com">
                            <button className="bg-[#1B1B1B] hover:bg-[#181818] text-gray-200 font-semibold py-4 px-12 rounded-md text-sm shadow-lg shadow-gray-700/15 transition-all">
                                contact me
                                <span> → </span>
                            </button> 
                        </a>
                    </div>
                </section>

                {/* Projects Section - centered */}
                <section id="projects" className="py-20">
                    <div className="max-w-xl mx-auto px-4 text-center pb-20">
                            <h2 className="text-xl  mb-4 text-gray-200"></h2>
                            <Project/>
                    </div>
                </section> 

                {/* More Section - centered */}
                <section id="more" className="py-20">
                    <div className="max-w-xl mx-auto px-4 text-center pb-20">
                        <h2 className="text-xl text-gray-200 mb-4">Technologies used</h2>
                        <More/>
                       
                    </div>
                </section>

                <footer id="footer" className="  text-white">
                    <div className=" mx-auto px-4">
                        <h2 className="text-lg font-bold mb-2"><Footer/></h2>
                    </div>
                </footer>
            </main>
        </div>
    )
}



 