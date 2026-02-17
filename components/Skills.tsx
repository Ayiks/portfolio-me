'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Design & Strategy",
    skills: [
      "UX Research & Discovery",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Interaction Design",
      "Design Systems",
      "Conversion Rate Optimization (CRO)",
      "Accessibility (WCAG)"
    ]
  },
  {
    title: "Toolkit",
    skills: [
      "Figma & FigJam",
      "Webflow (CMS & Dev)",
      "Adobe Creative Suite",
      "Mixpanel / Analytics Tools",
      "Jira / Linear / Notion",
      "Basic HTML/CSS (For Handoff)"
    ]
  },
  {
    title: "Collaboration",
    skills: [
      "Agile / Scrum Methodologies",
      "Developer Handoff (Zeplin/Figma Dev)",
      "Stakeholder Workshops",
      "Cross-functional Leadership",
      "Remote Async Communication",
      "QA & Visual Review"
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
          <p className="text-gray-500 text-lg max-w-2xl">
            A comprehensive toolkit focused on delivering scalable, conversion-optimized digital products.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] border-b border-gray-100 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-3 text-gray-600 font-medium">
                    <span className="text-black/20 mt-1">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}