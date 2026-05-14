"use client";

import { Github, Mail, Linkedin, MapPin, ExternalLink, FileDown } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-sans relative print:pt-10 print:px-8">
      {/* Background split for full screen width */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full md:w-1/3 bg-card hidden md:block" />
        <div className="w-full md:w-2/3 bg-background hidden md:block" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto bg-background md:bg-transparent">
        {/* Left Sidebar (Sticky Profile) */}
        <aside className="w-full md:w-1/3 p-8 lg:p-12 flex flex-col md:sticky md:top-0 md:h-screen md:overflow-y-auto border-b md:border-b-0 md:border-r border-foreground/10 bg-card">
        <div className="space-y-8 flex-1">
          {/* Avatar Area */}
          <div className="w-32 h-32 md:w-48 md:h-48 print:w-48 print:h-48 rounded-full overflow-hidden border border-foreground/10 bg-card">
            <img 
              src="/favicon.ico" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Nontapat Ngajuer</h1>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight pb-2"></h1>
            <p className="text-xl text-foreground/60 font-medium">Software Developer</p>
          </div>
          
          <div className="flex gap-4 print:hidden">
             <a href="https://github.com/BlackNortan-MARK01" target="_blank" rel="noreferrer" className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-xl transition-colors">
               <Github className="w-5 h-5 text-foreground" />
             </a>
             <a href="https://www.linkedin.com/in/nontapat-ngajuer-901899400/" target="_blank" rel="noreferrer" className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-xl transition-colors">
               <Linkedin className="w-5 h-5 text-foreground" />
             </a>
             <a href="mailto:nontapat.main@gmail.com" className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-xl transition-colors">
               <Mail className="w-5 h-5 text-foreground" />
             </a>
             <ThemeToggle />
          </div>

          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 w-fit text-foreground/60 hover:text-heading transition-colors mt-4 text-sm font-medium print:hidden"
          >
            <FileDown className="w-5 h-5" />
            <span>Generate PDF Resume</span>
          </button>
        </div>
        <div className="mt-8 md:mt-0 pt-8 border-t border-foreground/10 text-sm text-foreground/40 print:hidden">
          <p>© {new Date().getFullYear()} Nontapat Ngajuer. All rights reserved.</p>
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="w-full md:w-2/3 p-8 lg:p-12 space-y-8 bg-background">
        
        {/* About Section */}
        <section className="space-y-6 bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-foreground/5">
          <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Who am I?</h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
            <p>
              I am a recent IT Graduate and an aspiring Software Developer with a passion for building robust applications. 
              Skilled in software testing and development, I enjoy fast-paced environments where I can grow my technical expertise 
              and contribute to impactful software projects.
            </p>
            
          </div>

          <h3 className="text-2xl font-bold border-b border-foreground/10 pb-4">Where am I?</h3>
          <div className="flex flex-col gap-3 text-foreground/80 text-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Pattaya, Chon Buri, Thailand</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span>Available for Remote & Local (chonburi and bangkok, thailand)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <a href="mailto:nontapat.main@gmail.com" className="hover:text-heading transition-colors">nontapat.main@gmail.com</a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8 bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-foreground/5">
          <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Experience</h2>
          
          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">Quality Assurance Tester</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Apr 2025 - Jun 2025</span>
              </div>
              <p className="text-foreground/60 font-medium">Softdebut Co., Ltd. &bull; Internship &bull; Hybrid</p>
              <ul className="text-foreground/80 leading-relaxed list-disc list-outside ml-5 space-y-1">
                <li>Executed cross-platform manual tests (Web & Desktop) aligned with Adobe Designer blueprints.</li>
                <li>Collaborated with the dev team by providing actionable test reports and feedback.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">Information Technology Generalist</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Apr 2023 - Aug 2023</span>
              </div>
              <p className="text-foreground/60 font-medium">The Zign Hotel Pattaya &bull; Internship &bull; On-site</p>
              <ul className="text-foreground/80 leading-relaxed list-disc list-outside ml-5 space-y-1">
                <li>Maintained robust network connectivity (LAN/WAN) across all hotel buildings and guest suites.</li>
                <li>Troubleshoot and resolved electronic security system issues to ensure guest safety.</li>
                <li>Delivered technical support and hardware repairs for PCs, notebooks, and mobile devices company-wide.</li>
                <li>Managed hotel digital assets, including the website and core operational software.</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">Graphic Designer</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Apr 2021 - Aug 2021</span>
              </div>
              <p className="text-foreground/60 font-medium">TMN TV Pattaya &bull; Internship &bull; On-site</p>
              <ul className="text-foreground/80 leading-relaxed list-disc list-outside ml-5 space-y-1">
                <li>Video Production: Filmed and edited news and advertising content.</li>
                <li>On-site Operations: Managed field shooting, photography, and news assistance.</li>
                <li>Graphic Design: Created professional logos, banners, and digital assets.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8 bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-foreground/5">
          <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Education</h2>
          
          <div className="space-y-12">
            {/* Education 1 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">King Mongkut&apos;s University of Technology North Bangkok</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Mar 2024 - Mar 2026</span>
              </div>
              <p className="text-foreground/80 leading-relaxed font-medium">
                Bachelor of Technology, Information Technology
              </p>
            </div>

            {/* Education 2 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">Thai-Austrian Technical College</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Mar 2022 - Mar 2024</span>
              </div>
              <p className="text-foreground/80 leading-relaxed font-medium">
                High-Vocational Certificate, Computer Hardware
              </p>
            </div>

            {/* Education 3 */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">Thai-Austrian Technical College</h3>
                <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Mar 2019 - Mar 2022</span>
              </div>
              <p className="text-foreground/80 leading-relaxed font-medium">
                Vocational Certificate, Computer Technology
              </p>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section className="space-y-8 bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-foreground/5">
          <h2 className="text-2xl font-bold border-b border-foreground/10 pb-4">Projects</h2>
          
          <div className="space-y-12">
            
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                <h3 className="text-xl font-bold">SafeDownly</h3>
                <span className="text-sm font-medium text-foreground/50 uppercase tracking-wider">Desktop / Security</span>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                A Windows utility that intercepts browser downloads and holds them in quarantine, surfacing file hashes (SHA-256, MD5), real file-type detection, and internal structure analysis so the user can review each file before it reaches the Downloads folder.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-semibold tracking-wider">PYTHON</span>
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-semibold tracking-wider">BROWSER EXTENSION</span>
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-semibold tracking-wider">NATIVE MESSAGING</span>
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-semibold tracking-wider">WINDOWS</span>
              </div>

              <div className="flex gap-4 pt-2 print:hidden">
                <a href="https://github.com/BlackNortan-MARK01/SafeDownly" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-bold border-b border-transparent hover:border-foreground transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </div>
          </div>
        </section>

        

      </main>
      </div>
    </div>
  );
}
