'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  // Animation configuration for a smooth, staggered fade-up effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each element appearing
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easing for a premium feel
    },
  };

  return (
    <section className="min-h-screen flex items-center bg-[#FAFAFA] text-[#1A1A1A] px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* H1 Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          UI/UX & Product Designer crafting scalable digital experiences.
        </motion.h1>

        {/* H2 Sub-headline */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-2xl mb-10 font-light"
        >
          I lead end-to-end design from user discovery to final delivery. 
          Specializing in complex B2B applications, engaging B2C mobile experiences, 
          and conversion-focused web platforms.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#work" 
            className="group flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="mailto:cliffysarp@gmail.com" 
            className="flex items-center justify-center gap-2 bg-white border border-[#E5E5E5] text-[#1A1A1A] px-8 py-4 rounded-full font-medium shadow-sm transition-all hover:border-[#1A1A1A] hover:bg-gray-50 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}