import { FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="font-mono w-full py-8 bg-transparent flex justify-center items-center ">
      <div className="flex gap-8 bg-[#181818] rounded-2xl px-8 py-4 shadow-lg">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
          <FaInstagram />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
          <FaGithub />
        </a>
        <a
          href="mailto:moominraahil@gmail.com"
          className="text-gray-300 text-2xl transition-transform duration-200 hover:-translate-y-1"
          >
          <HiOutlineMail />
        </a>
      </div>
    </footer>
  );
}