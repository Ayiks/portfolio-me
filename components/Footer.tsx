import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white text-[#1A1A1A] border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Massive Call to Action */}
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] max-w-4xl">
          Let's build products that people actually want to use.
        </h2>
        
        <p className="text-xl text-gray-500 font-light mb-12 max-w-2xl">
          Currently open for full-time Product Design roles and select freelance opportunities.
        </p>

        {/* Primary Contact Button */}
        <a 
          href="mailto:hello@yourname.com" // IMPORTANT: Change to your actual email
          className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 hover:shadow-lg mb-24"
        >
          <Mail className="w-5 h-5" />
          cliffysarp@gmail.com
          </a>

        {/* Bottom Link Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-6 text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Clifford Sarong. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/clifford-sarong" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
            {/* <a href="https://dribbble.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
              Dribbble <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors flex items-center gap-1">
              Resume <ArrowUpRight className="w-4 h-4" />
            </a> */}
          </div>
        </div>

      </div>
    </footer>
  );
}