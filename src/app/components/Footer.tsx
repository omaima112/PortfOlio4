import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-transparent py-8 text-center text-[#561C24]">
      <div className="flex justify-center gap-8 mb-2">
        <a href="mailto:fna713585@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <Mail size={32} className="hover:text-[#561C24] transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/fizza-naveed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={32} className="hover:text-[#561C24] transition-colors" />
        </a>
      </div>
      <div className="text-sm">© 2026 All rights reserved.</div>
    </footer>
  );
}
