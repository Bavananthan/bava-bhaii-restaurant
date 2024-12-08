import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:space-y-0 space-y-4">
          {/* Branding/Name */}
          <div className="text-xl font-bold">
            <Link href="/">Armstrong Bavananthan - Software Engineer</Link>
            <p className="text-sm text-gray-400 mt-2">Building scalable and efficient solutions</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/about" className="hover:text-gray-400">About</Link>
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
            <Link href="/skills" className="hover:text-gray-400">Skills</Link>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>

        {/* Social Links and Other Information */}
        <div className="mt-6 flex justify-center space-x-6">
          {/* GitHub Link */}
          <Link href="https://github.com/Bavananthan" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.9 3.16 9.03 7.56 10.49.55.1.75-.24.75-.53V18.8c-3.05.66-3.68-1.33-3.68-1.33-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.07-.67.07-.67 1.1.08 1.68 1.14 1.68 1.14 1.95 3.32 5.16 2.35 5.16 2.35 1.53-.86 1.8-2.69 1.8-2.69 1.2-1.65.82-3.93.44-4.95.67-.48.67-.35 1.35-.33 2.22-.2.8-.8 1.36-1.49 1.53.21-.45.3-.94.3-1.42-.01-2.6-2.33-3.5-4.58-3.5-3.07 0-5.5 2.44-5.5 5.5s2.44 5.5 5.5 5.5c3.29 0 5.67-2.99 5.5-6.04.02-.42-.03-.79-.08-1.12-.66-1.2-2.3-2.35-4.17-1.34 0 0 1.56.4 3.05 1.63-.91.4-1.53.93-1.88 1.5-1.36-.35-2.2-.91-2.72-1.32-.56-.53-.91-1.16-1.12-1.77 0 .5 0 1-.25 1.5-.57 1.18-2.52 1.24-3.47.91 0 .49-.1.97-.29 1.38-1.38 1.78-3.95 2.25-6.09 1.48-.32-.57-.56-1.2-.57-1.85z"></path>
            </svg>
          </Link>
          {/* LinkedIn Link */}
          <Link href="https://www.linkedin.com/in/bavananthan/" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M4.984 3.344c-.62 0-1.109.504-1.109 1.124s.487 1.122 1.109 1.122c.623 0 1.109-.504 1.109-1.122s-.486-1.124-1.109-1.124zM2.358 4.468c-.479 0-.868.393-.868.876s.39.876.868.876c.479 0 .868-.393.868-.876s-.389-.876-.868-.876zM2.907 6.297h2.34v13.175H2.907zm4.717-.004v-.003h2.324c.101 0 .2-.025.28-.076.08-.051.138-.12.168-.207.029-.085.043-.181.045-.279 0-.098-.015-.194-.045-.28a.483.483 0 0 0-.168-.207 1.131 1.131 0 0 0-.28-.076h-.001z"></path>
            </svg>
          </Link>
        </div>

        {/* Copyright and Professional Information */}
        <div className="mt-6 text-center text-sm text-gray-400">
          &copy; Copyright 2024 . Made by Armstrong Bavananthan. 
        </div>
      </div>
    </footer>
  );
}
