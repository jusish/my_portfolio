"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import { fadeInUp } from "@/lib/animations";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jusish",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ishimwe-justin-bab849378/",
      color: "hover:text-blue-400",
    },
    {
      name: "X/Twitter",
      icon: Twitter,
      url: "https://x.com/ishimwejustin67",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/jusish_/",
      color: "hover:text-pink-400",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishimwejustin67@gmail.com",
      href: "mailto:ishimwejustin67@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250787415913",
      href: "tel:+250787415913",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      href: "#",
    },
  ];

  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-24 lg:pt-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <ScrollAnimatedSection className="py-10">
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get In Touch<span className="text-purple-500">.</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl">
              Looking to partner or work together? Reach out through the form
              below or connect with me through my socials. I&apos;ll get back to
              you within 24 hours.
            </p>
          </motion.div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-20">
          {/* Contact Info & Socials */}
          <ScrollAnimatedSection className="lg:col-span-1">
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-900/30 rounded-xl hover:border-purple-500/50 hover:shadow-purple-glow transition-all group"
                      >
                        <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wide">
                            {info.label}
                          </p>
                          <p className="text-white font-medium mt-1 group-hover:text-purple-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Social Media
                </h2>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-900/30 rounded-xl text-gray-400 ${social.color} transition-all hover:border-purple-500/50 hover:shadow-purple-glow`}
                        title={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </ScrollAnimatedSection>

          {/* Contact Form */}
          <ScrollAnimatedSection className="lg:col-span-2">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-900/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </motion.div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default Contact;
