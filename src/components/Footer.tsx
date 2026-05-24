import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
            MOON SARANG<span className="text-secondary">.</span>
          </Link>
          <p className="text-gray-400 max-w-md leading-relaxed">
            전략적 설계로 완성하는 이커머스 브랜딩. 기획부터 실구현까지 비즈니스의 성과를 견인하는 디자인 솔루션을 제공합니다.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-semibold mb-6 uppercase tracking-widest text-sm text-gray-500">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/resume" className="text-gray-400 hover:text-white transition-colors">Resume</Link></li>
            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-6 uppercase tracking-widest text-sm text-gray-500">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 MOON SARANG. ALL RIGHTS RESERVED.</p>
        <p>DESIGNED & DEVELOPED BY MOON SARANG</p>
      </div>
    </footer>
  );
}
