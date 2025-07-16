import Navbar from "./components/Navbar"

export default function HomePage() {
    return(
        <div>
        <Navbar/>
        <main className="font-mono flex flex-col items-center justify-center min-h-[60vh] pr-60">
        <div className="max-w-xl">
            <h1 className="text-2xl font-bold text-white mb-6">Raahil Mu-umin</h1>
            <p className="text-gray-400 mb-6 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <button className="bg-[#1B1B1B] hover:bg-[#181818] text-gray-200 font-semibold py-4 px-12 rounded-md text-sm shadow-lg shadow-gray-700/15 transition-all"> contact me </button>

        </div>
        </main>

        </div>
    )
}



 