'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'auto-workshop',
    title: 'Auto Workshop Management System',
    image: '/images/graymanager/hero-banner.png',
    type: 'B2B Web Application',
    description: 'A scalable dashboard unifying task management, complex data visualization, and operational efficiency for enterprise auto shops.',
    tags: ['UX Strategy', 'Design Systems', 'B2B Dashboard'],
    color: 'bg-[#F3F4F6]', // Placeholder for actual project image background
  },
  {
    id: 'ready-cash',
    title: 'Ready Cash Fintech Platform',
    image: '/images/readycash/hero-banner.png',
    type: 'B2C Mobile App',
    description: 'An engaging, touch-friendly financial platform focused on user retention, accessible onboarding, and seamless cross-device syncing.',
    tags: ['Interaction Design', 'User Research', 'iOS & Android'],
    color: 'bg-[#E5E7EB]',
  },
  {
    id: 'eatme-kitchen',
    title: 'EatMe Kitchen',
    image: '/images/eatme/onboarding.png',
    type: 'Mobile App & Web Platform',
    description: 'A responsive, performance-optimized marketing site designed to increase lead generation and integrate seamlessly with a headless CMS.',
    tags: ['Webflow / CMS', 'Conversion Optimization', 'Responsive Web'],
    color: 'bg-[#E5E5E5]',
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected Work</h2>
        <p className="text-[#555555] max-w-2xl text-lg">
          A showcase of end-to-end product design, spanning complex B2B systems to engaging B2C experiences.
        </p>
      </div>
      
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Project Image / Mockup */}
            <Link 
              href={`/work/${project.id}`} 
              className={`relative block lg:col-span-7 h-[400px] md:h-[600px] ${project.color} rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}
            >
               {project.image ? (
                 <Image 
                   src={project.image}
                   alt={`${project.title} Case Study`}
                   fill
                   className="object-cover" 
                   sizes="(max-width: 1024px) 100vw, 60vw"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium bg-[#F3F4F6]">
                   [High-Fidelity Mockup Here]
                 </div>
               )}
            </Link>

            {/* Project Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-4">{project.type}</p>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{project.title}</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={`/work/${project.id}`} 
                className="inline-flex items-center gap-2 font-semibold text-[#1A1A1A] group/btn"
              >
                Read Case Study 
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}