"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Trophy,
  Calendar,
  MapPin,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Education & Learning</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and continuous professional development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Academic Background
                </h3>
              </div>

              {/* Fixed Timeline */}
              <div className="relative pl-8">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                {/* B.Tech Item */}
                <div className="relative mb-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-32px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white">
                      Bachelor of Technology (CSE)
                    </h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        <span>MAKAUT, West Bengal</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>2016 - 2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                    <Trophy size={14} className="text-yellow-400" />
                    <span className="text-sm font-medium text-white">
                      8.32 DGPA
                    </span>
                  </div>
                </div>

                <div className="relative mb-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-32px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white">
                      Intermmediate
                    </h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        <span>BSEB, Patna</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>2016</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                    <Trophy size={14} className="text-yellow-400" />
                    <span className="text-sm font-medium text-white">
                      52.50 %
                    </span>
                  </div>
                </div>

                <div className="relative mb-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-32px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white">
                      Matriculation
                    </h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        <span>BSTE, C.G.</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar size={14} />
                        <span>2013</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                    <Trophy size={14} className="text-yellow-400" />
                    <span className="text-sm font-medium text-white">
                      66.40 %
                    </span>
                  </div>
                </div>

                {/* Full Stack Item */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-32px] top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Full Stack Web Development
                    </h4>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        <span>Naresh IT, Hyderabad</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      Comprehensive training in modern web development
                      technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Continuous Learning
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "Next.js",
                    progress: 75,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    name: "AWS",
                    progress: 60,
                    color: "from-orange-500 to-yellow-500",
                  },
                  {
                    name: "GraphQL",
                    progress: 65,
                    color: "from-pink-500 to-rose-500",
                  },
                  {
                    name: "Docker",
                    progress: 70,
                    color: "from-blue-500 to-indigo-500",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{tech.name}</span>
                      <span className="text-sm text-green-400">
                        {tech.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${tech.color}`}
                      />
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Award size={16} />
                    <span className="text-sm font-medium">
                      Self-Taught Developer
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Continuously upskilling in modern technologies through
                    online courses, documentation, and hands-on projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
