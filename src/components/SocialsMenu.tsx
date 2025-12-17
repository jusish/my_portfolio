import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import React from "react";

const SocialsMenu = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jusish",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ishimwe-justin-bab849378/",
    },
    {
      name: "X/Twitter",
      icon: Twitter,
      url: "https://x.com/ishimwejustin67",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/jusish_/",
    },
  ];

  return (
    <nav>
      <ul className="flex space-x-6 font-bold text-lg text-gray-300">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <li
              key={social.name}
              className="hover:text-purple-400 transition-colors"
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SocialsMenu;
