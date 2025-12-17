import { Download } from "lucide-react";
import Menubar from "./Menubar";
import SocialsMenu from "./SocialsMenu";
import Link from "next/link";

const Footer = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto py-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 text-center md:text-left mb-4 ">
        {/* Menubar */}
        <section className="flex justify-center md:justify-start">
          <Menubar isContactVisible={true} />
        </section>

        {/* Socials Menu */}
        <section className="flex md:flex-col justify-center md:justify-start md:items-end">
          <SocialsMenu />
        </section>

        {/* Get in Touch */}
        <section className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-lg md:text-xl font-semibold text-white">
            Interested in working together?
          </h1>
          <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-all hover:shadow-purple-glow hover:scale-105"
            >
              Get In Touch
            </Link>
            <Link
              href="/documents"
              className="px-6 py-2 bg-transparent transition-all duration-300 border-2 border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white flex gap-2 items-center font-semibold hover:shadow-purple-glow hover:scale-105"
            >
              <Download className="w-4 h-4" /> Download CV / Resume
            </Link>
          </div>
        </section>

        {/* Copyright */}
        <section className="flex flex-col justify-center items-center md:items-end">
          <h3 className="text-sm md:text-base text-gray-400 text-end">
            ©2025 All Rights Reserved.
            <br />
            Made with Passion by Jusish
          </h3>
        </section>
      </div>
    </main>
  );
};

export default Footer;
