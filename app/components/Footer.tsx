
export default function Footer() {
    return (
      <footer className="font-mono w-full py-6 bg-[#181818] text-gray-300 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    );
  }