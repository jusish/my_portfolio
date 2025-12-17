"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Eye, ChevronLeft } from "lucide-react";
import CVView from "@/components/CVView";
import ResumeView from "@/components/ResumeView";
import { fadeInUp } from "@/lib/animations";

type DocumentType = "cv" | "resume" | null;

const DocumentsPage = () => {
  const [selectedType, setSelectedType] = useState<DocumentType>(null);

  // Update page title based on selected document
  useEffect(() => {
    if (selectedType === "cv") {
      document.title = "CV - Justin Ishimwe";
    } else if (selectedType === "resume") {
      document.title = "Resume - Justin Ishimwe";
    } else {
      document.title = "Documents - Justin Ishimwe";
    }
  }, [selectedType]);

  const documentOptions = [
    {
      id: "cv" as DocumentType,
      title: "Curriculum Vitae (CV)",
      description:
        "A comprehensive document detailing your full professional history, education, and achievements. Best for academic positions and detailed portfolios.",
      icon: FileText,
    },
    {
      id: "resume" as DocumentType,
      title: "Resume",
      description:
        "A concise, one-page document highlighting your most relevant skills and experience. Perfect for job applications and quick reference.",
      icon: FileText,
    },
  ];

  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:pl-32 lg:pr-8 relative w-full m-auto pt-24 lg:pt-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {!selectedType ? (
          // Document Selection View
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="py-12"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Documents<span className="text-purple-500">.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Select the document you&apos;d like to view or download. You can
                preview it first before downloading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.button
                    key={option.id}
                    onClick={() => setSelectedType(option.id)}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-purple-900/30 rounded-2xl p-8 hover:shadow-purple-glow transition-all text-left group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-purple-600/20 rounded-xl group-hover:bg-purple-600/30 transition-colors">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {option.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-medium">
                      <Eye className="w-4 h-4" />
                      <span>Preview & Download</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          // Document Preview View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-8"
          >
            {/* Back Button & Actions */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
              <motion.button
                onClick={() => setSelectedType(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-purple-900/30 rounded-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                Back to Selection
              </motion.button>

              <motion.button
                onClick={() => window.print()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-purple-glow transition-all"
              >
                <Download className="w-5 h-5" />
                Download / Print
              </motion.button>
            </div>

            {/* Document Preview */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden print:shadow-none print:rounded-none print:m-0 print:p-0 print:bg-transparent">
              <AnimatePresence mode="wait">
                {selectedType === "cv" && (
                  <motion.div
                    key="cv"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="print:m-0 print:p-0"
                  >
                    <CVView />
                  </motion.div>
                )}
                {selectedType === "resume" && (
                  <motion.div
                    key="resume"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="print:m-0 print:p-0"
                  >
                    <ResumeView />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default DocumentsPage;
