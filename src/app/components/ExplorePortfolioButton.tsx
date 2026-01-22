import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navOptions = [
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/project', label: 'Project' },
  { to: '/contact', label: 'Contact' },
];

export function ExplorePortfolioButton() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="relative mt-6 flex flex-col items-center">
      <button
        className="bg-[#561C24] text-[#E8D8C4] px-6 py-3 rounded-lg font-['Montserrat'] text-lg font-semibold shadow hover:bg-[#6D2932] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C7B7A3] flex items-center gap-2 group animate-bounce-arrow"
        onClick={() => setOpen((v) => !v)}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        Explore the Portfolio
        <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </button>
      {open && (
        <div ref={menuRef} className="absolute top-16 z-50 bg-white border border-[#C7B7A3] rounded-lg shadow-lg min-w-[220px] flex flex-col animate-fadein">
          {navOptions.map((opt) => (
            <Link
              key={opt.to}
              to={opt.to}
              className="px-6 py-3 text-[#561C24] font-['Montserrat'] text-base hover:bg-[#E8D8C4] hover:text-[#6D2932] transition-colors rounded-lg"
              onClick={() => setOpen(false)}
            >
              {opt.label}
            </Link>
          ))}
        </div>
      )}
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        .animate-fadein { animation: fadein 0.2s; }
        @keyframes bounceArrow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        .animate-bounce-arrow { animation: bounceArrow 1.2s infinite; }
      `}</style>
    </div>
  );
}