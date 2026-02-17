'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Bold Statement */}
        <motion.div 
          className="lg:col-span-5 lg:sticky lg:top-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Strategic design.<br />Seamless execution.
          </h2>
          <div className="w-12 h-1 bg-[#1A1A1A] mb-8"></div>
        </motion.div>

        {/* Right Column: The Professional Narrative */}
        <motion.div 
          className="lg:col-span-7 space-y-8 text-lg md:text-xl text-gray-600 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            <strong className="font-semibold text-gray-900">I bridge the gap between business goals and user needs.</strong> With deep experience spanning complex B2B SaaS dashboards and engaging B2C mobile applications, I own the end-to-end design process—from initial user discovery and information architecture to high-fidelity prototyping and developer handoff.
          </p>
          <p>
            My philosophy is rooted in problem-solving. I don&apos;t just design screens; I design systems that scale, optimize conversion funnels, and reduce friction. Whether orchestrating a dynamic CMS platform or digitizing an enterprise workflow, my focus is always on usability and measurable business impact.
          </p>
          <p>
            Operating seamlessly across time zones, I thrive in remote-first environments. I prioritize clear asynchronous communication, rigorous stakeholder alignment, and detailed engineering handoffs to ensure that what gets designed is exactly what gets built.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}