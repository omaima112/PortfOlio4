import { Code, ExternalLink } from 'lucide-react';

export function Project() {
  return (
    <div className="min-h-screen bg-[#E8D8C4] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#561C24] mb-12">
          Project
        </h1>

        <div className="space-y-8">
          {/* Featured Project */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md relative">
            <div className="bg-gradient-to-br from-[#561C24] to-[#6D2932] p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                {/* Project Picture */}
                <div className="w-[400px] h-[300px] md:w-[600px] md:h-[450px] rounded-lg overflow-hidden bg-[#C7B7A3] flex items-center justify-center shadow-md relative">
                  {/* 2nd Position Tag */}
                  <span className="absolute right-4 top-4 bg-yellow-200 text-[#561C24] px-3 py-1 rounded-full text-xs font-semibold shadow z-10">
                    2nd Position
                  </span>
                  <img
                    src="/project.PNG"
                    alt="Project Demo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#E8D8C4] mb-2">
                    Auto-Paper Formation Software
                  </h2>
                  <p className="font-['Montserrat'] text-[#C7B7A3]">
                    Web Application · 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="font-['Montserrat'] text-lg text-[#561C24] font-medium mb-3">
                  Project Description
                </h3>
                <p className="font-['Montserrat'] text-[#561C24] leading-relaxed mb-3">
                  Auto-Paper Formation Software is a web-based application designed to automate the creation of exam question papers. It allows educators to select questions from a curated bank, configure paper settings, and generate formatted exam papers efficiently and accurately. The software streamlines the paper-setting process, reduces manual effort, and ensures consistency in exam formats.
                </p>
                <p className="font-['Montserrat'] text-[#561C24] leading-relaxed">
                  The project focuses on usability, efficiency, and modern design, making exam paper generation simple and reliable for educators.
                </p>
              </div>

              <div>
                <h3 className="font-['Montserrat'] text-lg text-[#561C24] font-medium mb-3">
                  Technologies & Tools   
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">HTML5</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">CSS3</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">JavaScript (Vanilla)</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">Custom CSS (Google Fonts: Inter)</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">jsPDF</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">Lucide SVG Icons</span>
                  <span className="bg-[#E8D8C4] px-4 py-2 rounded-md font-['Montserrat'] text-sm text-[#561C24]">Browser Local Storage</span>
                </div>
              </div>

              <div>
                <h3 className="font-['Montserrat'] text-lg text-[#561C24] font-medium mb-3">Key Features</h3>
                <ul className="space-y-2">
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>User authentication (username & password = admin )</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Subject selection from a predefined list</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Class and institute configuration</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Dynamic question selection (MCQs, short, and long questions)</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Marks limit and paper structure suggestions</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Live preview of selected questions and marks</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Modern, responsive UI with card-based design</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>One-click PDF export in exam-ready format</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Option to upload and embed institute logo in the paper</span></li>
                  <li className="font-['Montserrat'] text-[#561C24] flex items-start"><span className="text-[#6D2932] mr-3 mt-1">•</span><span>Edit and review before final paper generation</span></li>
                </ul>
              </div>


              <div className="pt-4 border-t border-[#E8D8C4]">
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://question-paper-automation.vercel.app/"
                    className="inline-flex items-center gap-2 bg-[#561C24] text-[#E8D8C4] font-['Montserrat'] font-medium px-6 py-3 rounded-lg hover:bg-[#6D2932] transition-colors"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    View Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Future Projects Note */}
          <div className="bg-[#6D2932] rounded-lg p-6 md:p-8 text-center">
            <p className="font-['Montserrat'] text-[#E8D8C4] leading-relaxed">
              As I continue my academic journey, I plan to work on additional projects that demonstrate practical application of computer science concepts and programming skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
