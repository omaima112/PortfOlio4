import { Award, Users, Trophy } from 'lucide-react';
import { useState } from 'react';

export function Achievements() {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const openModal = (img: string, title: string) => { setModalImg(img); setModalTitle(title); };
  const closeModal = () => { setModalImg(null); setModalTitle(null); };

  // Achievements data
  // Recommended image ratio: 4:3 (e.g., 800x600px)
  const achievements = [
    {
      icon: <Award className="text-[#561C24]" size={32} />, 
      title: 'Academic Excellence in Matriculation (942/1100)',
      img: '/achievements/2.png',
      description: 'Awarded a Gold Medal & Certificate for outstanding performance in Matriculation exams.'
    },
    {
      icon: <Award className="text-[#561C24]" size={32} />, 
      title: 'College Science Exhibition',
      img: '/achievements/1.png',
      tag: '2nd Position',
      description: 'Participated and presented a project at the college science exhibition. Secured 2nd position in the event'
    },
    {
      icon: <Users className="text-[#561C24]" size={32} />, 
      title: 'Co-curricular Involvement',
      img: '/achievements/3.png', // Added photo option
      description: (
        <>
          Active in digital editing, media, personal brand & communication, and sports & team activities.
          <ul className="text-left mt-2 list-disc list-inside text-[#6D2932] text-base md:text-lg">
            <li>Engaging in digital editing and creative content development.</li>
            <li>Managing a personal brand with consistency and independent learning.</li>
            <li>Strong interest in technology and digital tools.</li>
            <li>Balance academics with active participation in sports.</li>
            
          </ul>
        </>
      )
    },
    {
      icon: <Trophy className="text-[#561C24]" size={32} />, 
      title: 'Personal Qualities & Skills',
      img: undefined, // No photo option
      description: (
        <>
          Teamwork, time management, discipline, adaptability, and a passion for continuous learning.
          <ul className="text-left mt-2 list-disc list-inside text-[#6D2932] text-base md:text-lg">
            <li>Fundamental knowledge of computer systems and programming concepts</li>
            <li>Proficient in MS Word, PowerPoint, Excel, and basic IT tools</li>
            <li>Strong logical reasoning and analytical thinking</li>
            <li>Effective time management and organizational skills</li>
            <li>Good written and verbal communication in English and Urdu</li>
            <li>Problem-solving and critical thinking</li>
            <li>Basic web development (HTML, CSS, JavaScript)</li>
            <li>Presentation and public speaking skills</li>
            <li>Collaboration and leadership in group projects</li>
            <li>Adaptability to new technologies and environments</li>
            <li>Self-motivation and independent learning</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#E8D8C4] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#561C24] mb-2">Achievements</h1>
        <p className="font-['Montserrat'] text-[#6D2932] mb-10 text-lg md:text-xl">Milestones and accomplishments throughout my academic and professional journey.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center relative group transition hover:shadow-2xl min-h-[340px] md:min-h-[370px]"
            >
              <div className="absolute left-4 top-4">{ach.icon}</div>
              {/* Tag for 2nd Position */}
              {ach.tag && (
                <span className="absolute right-4 top-4 bg-yellow-200 text-[#561C24] px-3 py-1 rounded-full text-xs font-semibold shadow">
                  {ach.tag}
                </span>
              )}
              {ach.img ? (
                <button onClick={() => openModal(ach.img!, ach.title)} className="focus:outline-none w-full">
                  <div className="w-full max-w-[400px] aspect-[4/3] mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-lg border-2 border-[#C7B7A3] shadow group-hover:scale-105 transition">
                    <img
                      src={ach.img}
                      alt={ach.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ) : null}
              <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#561C24] font-semibold mb-2 mt-2">{ach.title}</h2>
              <div className="font-['Montserrat'] text-[#6D2932] text-base md:text-lg mb-2">{ach.description}</div>
            </div>
          ))}
        </div>
        {/* Image Modal */}
        {modalImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={closeModal}>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-full max-h-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <img src={modalImg} alt={modalTitle ?? 'Achievement'} className="max-w-xs md:max-w-md max-h-[70vh] rounded mb-2" />
              <div className="font-['Montserrat'] text-[#561C24] font-semibold mb-2 text-center">{modalTitle}</div>
              <button onClick={closeModal} className="mt-2 px-4 py-2 bg-[#561C24] text-[#E8D8C4] rounded hover:bg-[#6D2932]">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
