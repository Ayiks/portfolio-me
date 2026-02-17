import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Image from 'next/image';

export default async function CaseStudy({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params;
  
  // Find the exact project from your data file
  const project = projectsData.find(p => p.slug === resolvedParams.slug);

  // Fallback UI if the URL doesn't match any project slug
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] text-[#1A1A1A]">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The case study you are looking for does not exist.</p>
        <Link href="/" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white text-[#1A1A1A] pb-32">
      {/* Mini Nav */}
      <nav className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </nav>

      {/* Case Study Header */}
      <header className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pt-12 pb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          {project.title}
        </h1>
        {/* Render subtitle only if it exists in the data */}
        {project.subtitle && (
          <p className="text-xl md:text-2xl text-gray-500 mb-10 font-light max-w-3xl">
            {project.subtitle}
          </p>
        )}
        
        {/* Hero Image */}
        {project.heroImage ? (
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50">
            <Image 
              src={project.heroImage} 
              alt={`${project.title} Hero`} 
              fill 
              className="object-cover"
              priority // Tells Next.js to load this image immediately
            />
          </div>
        ) : (
          <div className="w-full h-[50vh] md:h-[70vh] bg-[#F3F4F6] rounded-3xl flex items-center justify-center text-gray-400 font-medium">
            [Hero Mockup Missing]
          </div>
        )}
      </header>

      {/* Main Content Layout */}
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Sidebar: Quick Overview (Sticky for easy scanning) */}
        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-12 self-start">
          <div>
            <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">A. Overview</h3>
            <ul className="space-y-4 text-base text-gray-700">
              {project.overview?.role && <li><strong>Role:</strong> {project.overview.role}</li>}
              {project.overview?.timeline && <li><strong>Timeline:</strong> {project.overview.timeline}</li>}
              {project.overview?.industry && <li><strong>Industry:</strong> {project.overview.industry}</li>}
              {project.overview?.platform && <li><strong>Platform:</strong> {project.overview.platform}</li>}
            </ul>
          </div>
          
          {project.overview?.tools && (
            <div>
              <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.overview.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-50 border border-gray-200 text-sm rounded-full text-gray-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Right Column: Deep Dive UX Narrative */}
        <main className="lg:col-span-8 space-y-24">
          
          {project.problem && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-6">B. The Problem</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {project.users && project.users.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-6">C. The Users</h2>
              <ul className="space-y-6">
                {project.users.map((user, index) => (
                  <li key={index} className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl">
                    <strong className="text-gray-900 block mb-2">{user.role}</strong>
                    {user.needs}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.insights && project.insights.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-6">D. Research & Insights</h2>
              <ul className="space-y-4 text-lg text-gray-600 leading-relaxed mb-8">
                {project.insights.map((insight, index) => {
                  // Bold the first part of the insight if it's formatted as "Label: description"
                  const splitInsight = insight.split(':');
                  if (splitInsight.length > 1) {
                    return (
                      <li key={index} className="flex gap-3">
                        <span className="text-black">•</span>
                        <span><strong>{splitInsight[0]}:</strong>{splitInsight.slice(1).join(':')}</span>
                      </li>
                    );
                  }
                  return <li key={index} className="flex gap-3"><span className="text-black">•</span> {insight}</li>;
                })}
              </ul>
            </section>
          )}

          {/* Static placeholders for visual sections that you can populate directly or add to your data file later */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-6">E. UX Strategy & Architecture</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The core strategy focused on flattening the Information Architecture (IA) and providing contextual actions based on strict Role-Based Access Control to ensure data security and operational speed.
            </p>
            {/* E. UX Strategy & Architecture (Text-Based) */}
          {project.strategy && project.strategy.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-6">E. UX Strategy & Architecture</h2>
              <div className="space-y-6">
                {project.strategy.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          )}
          </section>

          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-6">F. UI Execution</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The visual design language was crafted specifically for enterprise usability: high-contrast typography, clear visual hierarchy, and modular card systems to prevent errors at the point of sale.
            </p>
            {/* Dynamic UI Screens Grid */}
            {project.uiScreens && project.uiScreens.length > 0 && (
              <div className="flex flex-col gap-8">
                {project.uiScreens.map((screen, index) => (
                  <div key={index} className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden border border-gray-100 bg-gray-50 shadow-sm">
                    <Image 
                      src={screen} 
                      alt={`UI Screen ${index + 1}`} 
                      fill 
                      className="object-contain" // Use object-contain so the whole UI is visible
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold tracking-tight mb-6">G. The Impact</h2>
            
            {/* If the project uses an impactList array (like Ready Cash) */}
            {project.impactList ? (
               <ul className="space-y-4 text-lg text-gray-800 font-medium">
                {project.impactList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              /* Fallback text if impactList isn't defined */
              <p className="text-lg text-gray-600">Impact metrics are currently being tracked for this product.</p>
            )}
          </section>

        </main>
      </div>
    </article>
  );
}