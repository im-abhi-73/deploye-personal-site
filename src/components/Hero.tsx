import React from 'react';

const Hero = () => {
  return (
    <main className="min-h-screen px-6 py-10 font-mono text-gray-800 bg-gray-100">
      <div className="grid max-w-screen-xl grid-cols-1 gap-16 mx-auto lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-8 text-sm leading-relaxed text-gray-600">
          <div className="space-y-1 text-2xl">
            <div className='text-right pr-[6cm]'>Let's Build</div>    
            <div className='text-right pr-[6cm]'>Something</div>
            <div className='text-right pr-[6cm]'>Exceptional</div>
            <div className='text-right pr-[6cm]'>Toghether</div>
          </div>

          <div className="space-y-1 text-xs text-gray-600">
            <div>FIXING BUGS</div>
            <div>AND</div>
            <div>BUILDING DREAMS SINCE 2K23</div>
          </div>

          <div className="max-w-sm space-y-1 text-xs text-gray-700">
            <p>TRANSFORMING YOUR IDEAS INTO POWERFUL,</p>
            <p>SCALABLE DIGITAL SOLUTIONS.</p>
            <p>FROM SLEEK</p>
            <p>INTERFACES TO ROBUST BACKENDS—</p>   
            <p>I CODE TO CONNECT,</p>
            <p>ENGAGE AND</p>
            <p>DELIVER REAL IMPACT.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="font-mono text-right">
          <div className="space-y-1 leading-none">
            <div className="text-5xl text-gray-500 sm:text-6xl md:text-7xl">&gt;ABHISHEK</div>
            <div className="text-5xl text-gray-500 sm:text-6xl md:text-7xl">AHIRE</div>
            <div className="text-5xl text-gray-500 sm:text-6xl md:text-7xl">FULLSTACK</div>
            <div className="text-5xl text-gray-500 sm:text-6xl md:text-7xl">DEVELOPER</div>
            <div className="text-5xl text-gray-500 sm:text-6xl md:text-7xl">©2K24</div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="grid grid-cols-2 gap-6 mt-24 text-base text-gray-700 md:grid-cols-4">
        <div className="space-y-2">
          <div>1. <a href="/about" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">ABOUT ME</a></div>
          <div>2. <a href="/study" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">STUDY CONTENT</a></div>
        </div>
        <div className="space-y-1">
          <div>3. <a href="/project" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">PROJECTS</a></div>
          <div>4. <a href="#roots" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">PROFILE</a></div>
        </div>
        <div className="space-y-1">
          <div>5. <a href="/resume" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">RESUME</a></div>
          <div>6. <a href="/certifications" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">CERTIFICATIONS</a></div>
          <div>7. <a href="/mail" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">MAIL ME</a></div>
        </div>
        <div className="space-y-1">
          <div>8. <a href="#portfolio" className="px-1 transition-colors duration-300 rounded hover:bg-yellow-300">PORTFOLIO</a></div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-16 text-xs text-gray-600">
        <div>© {new Date().getFullYear()} Abhishek Ahire. All Rights Reserved.</div>
      </div>
    </main>
  );
};

export default Hero;
