import { Github } from "lucide-react";
import React from "react";

const SocialsMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-[20px] text-[#4e525a]">
        <li className="hover:text-purple-600">
          <a href="https://github.com/jusish" target="_blank">
            <Github />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialsMenu;
