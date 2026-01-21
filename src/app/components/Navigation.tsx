import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, User, GraduationCap, Trophy, FolderOpen, Mail, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape or click outside
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: <HomeIcon size={18} /> },
    { to: '/about', label: 'About Me', icon: <User size={18} /> },
    { to: '/education', label: 'Education', icon: <GraduationCap size={18} /> },
    { to: '/achievements', label: 'Achievements', icon: <Trophy size={18} /> },
    { to: '/project', label: 'Project', icon: <FolderOpen size={18} /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#561C24] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name on the left */}
          <Link 
            to="/" 
            className="text-[#E8D8C4] font-['Playfair_Display'] text-xl md:text-2xl font-semibold hover:text-[#C7B7A3] transition-colors"
          >
            {/* Removed 'Portfolio' text as requested */}
          </Link>

          {/* Hamburger Menu Button on the right */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E8D8C4] hover:text-[#C7B7A3] transition-colors ml-2 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#C7B7A3]"
              aria-label="Toggle menu"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Dropdown Navigation - shows on all screens, only when menu is open */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 z-40 animate-fadein" aria-hidden="true"></div>
            {/* Dropdown menu */}
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-64 max-w-[90vw] bg-[#561C24] border border-[#6D2932] rounded-lg shadow-lg z-50 md:mr-6 animate-slidefade"
              tabIndex={-1}
            >
              <div className="flex flex-col gap-2 py-4 px-4">
                {/* Only show nav links in dropdown when menu is open */}
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 font-['Montserrat'] text-base transition-colors px-3 py-3 rounded-md ${
                      isActive(link.to)
                        ? 'text-[#E8D8C4] font-medium bg-[#6D2932]'
                        : 'text-[#C7B7A3] hover:text-[#E8D8C4] hover:bg-[#6D2932]'
                    }`}
                    style={{ minWidth: 44, minHeight: 44 }}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Animations */}
            <style>{`
              @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
              .animate-fadein { animation: fadein 0.2s; }
              @keyframes slidefade { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
              .animate-slidefade { animation: slidefade 0.25s cubic-bezier(.4,0,.2,1); }
            `}</style>
          </>
        )}
      </div>
    </nav>
  );
}
