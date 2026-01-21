export function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-[#561C24] to-[#6D2932] text-[#E8D8C4] py-28 md:py-40 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-semibold mb-8 tracking-wide">
              Fizza Naveed
            </h1>
            <p className="font-['Montserrat'] text-xl md:text-2xl text-[#C7B7A3] mb-6 max-w-xl tracking-wide leading-relaxed">
              Computer Science student specializing in Cyber Security and Artificial Intelligence, focused on building secure and intelligent digital solutions.
            </p>
            <blockquote className="font-['Montserrat'] italic text-base md:text-lg text-[#E8D8C4] max-w-2xl tracking-wide leading-relaxed mb-2">
              <span className="block text-2xl md:text-3xl mb-2">“Computer science empowers students to create the world of tomorrow.”</span>
              <span className="block mt-2 text-right text-[#C7B7A3] not-italic">- Satya Nadella, CEO of Microsoft</span>
            </blockquote>
          </div>
          {/* Right: Profile Picture */}
          <div className="flex-shrink-0 w-56 h-56 md:w-80 md:h-80 rounded-full bg-[#C7B7A3] flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#561C24]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
