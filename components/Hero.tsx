"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, ArrowDown } from "lucide-react";
import { detail } from "@/utils/seo";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="experience-badge inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium text-blue-400">
                🔥 5+ Years of Excellence
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6">
              <span className="text-white">Crafting</span>
              <br />
              {/* Fixed width container for typing animation */}
              <span className="block min-h-[1.2em] lg:min-h-[1.2em]">
                <span className="inline-block min-w-[320px] lg:min-w-[480px]">
                  <TypeAnimation
                    sequence={[
                      "Digital Experiences",
                      2000,
                      "Web Solutions",
                      2000,
                      "Full Stack Apps",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="gradient-text"
                  />
                </span>
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Full Stack Developer specializing in React, Node.js, and modern
              web technologies. Building scalable applications with exceptional
              user experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-card rounded-xl font-medium hover:bg-white/10 transition-all"
              >
                View Projects
              </motion.a>
            </div>

            <div className="flex gap-4">
              {/* GitHub Icon */}
              <motion.a
                href={detail.profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -3 }}
                className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.a>

              {/* LinkedIn Icon */}
              <motion.a
                href={detail.profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -3 }}
                className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>

              {/* Email Icon */}
              <motion.a
                href={`mailto:${detail.profile.email}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -3 }}
                className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative float-animation"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
              <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <div className="text-2xl font-bold gradient-text">
                      Vishwajeet
                    </div>
                    <div className="text-gray-400">Full Stack Developer</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <ArrowDown className="text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { Mail, ArrowDown, Download } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center px-6 pt-20"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Experience Badge */}
//             <div className="experience-badge inline-block px-4 py-2 rounded-full mb-6">
//               <span className="text-sm font-medium text-blue-400">
//                 🔥 5+ Years of Experience
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight">
//               <span className="text-white">Hi, I'm</span>
//               <br />
//               <span className="gradient-text">Vishwajeet Kumar</span>
//             </h1>

//             {/* Typing Role */}
//             <div className="mb-6 min-h-[40px]">
//               <TypeAnimation
//                 sequence={[
//                   "MERN Stack Developer",
//                   2000,
//                   "Full Stack Engineer",
//                   2000,
//                   "React & Node.js Specialist",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 className="text-xl lg:text-2xl text-blue-400 font-semibold"
//               />
//             </div>

//             {/* Description */}
//             <p className="text-lg text-gray-400 mb-8 max-w-lg">
//               5+ years of experience building scalable full-stack applications
//               using React, Next.js, Node.js, and MongoDB. Specialized in payment
//               integrations, microservices, and high-performance web apps.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 mb-8">
//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-medium hover:shadow-xl hover:shadow-blue-500/40 transition-all"
//               >
//                 Get in Touch
//               </motion.a>

//               <motion.a
//                 href="#projects"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 glass-card rounded-xl font-medium hover:bg-white/10 transition-all"
//               >
//                 View Projects
//               </motion.a>

//               {/* Download Resume */}
//               <motion.a
//                 href="/resume.pdf"
//                 download
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 border border-white/20 rounded-xl font-medium hover:bg-white/10 transition-all flex items-center gap-2"
//               >
//                 <Download size={16} />
//                 Resume
//               </motion.a>
//             </div>

//             {/* Social Icons */}
//             <div className="flex gap-4">
//               {/* GitHub */}
//               <motion.a
//                 href="https://github.com/YOUR_USERNAME"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 whileHover={{ y: -3 }}
//                 className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
//               >
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5..." />
//                 </svg>
//               </motion.a>

//               {/* LinkedIn */}
//               <motion.a
//                 href="https://linkedin.com/in/YOUR_USERNAME"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 whileHover={{ y: -3 }}
//                 className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
//               >
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7..." />
//                 </svg>
//               </motion.a>

//               {/* Email */}
//               <motion.a
//                 href="mailto:vishwajeet95cy@gmail.com"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 whileHover={{ y: -3 }}
//                 className="p-3 glass-card rounded-xl text-gray-400 hover:text-white transition-colors"
//               >
//                 <Mail size={20} />
//               </motion.a>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE (IMAGE / AVATAR) */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative float-animation"
//           >
//             <div className="relative w-full aspect-square max-w-md mx-auto">
//               {/* Glow */}
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />

//               {/* Profile Circle */}
//               <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm">
//                 <img
//                   src="/profile.png" // 👉 replace with your image
//                   alt="Vishwajeet Kumar"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Scroll Indicator */}
//               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
//                 <motion.div
//                   animate={{ y: [0, 10, 0] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                 >
//                   <ArrowDown className="text-blue-400" />
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
