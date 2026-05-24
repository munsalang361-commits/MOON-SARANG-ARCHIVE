import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, company, subject, message } = formData;
    const email = 'munsalang361@gmail.com';
    
    const body = `Name: ${name}\nCompany: ${company}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(`[${subject}] From ${name}`)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl mb-8">Let's Work <br />Together</h1>
            <p className="text-primary/60 text-xl mb-12 leading-relaxed">
              새로운 프로젝트 의뢰나 채용 제안 환영합니다. <br />
              언제든 편하게 연락 주세요.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-primary/40 uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold">munsalang361@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-primary/40 uppercase font-bold tracking-widest mb-1">Phone</p>
                  <p className="text-xl font-bold">+82 10-3743-8721</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-secondary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-primary/40 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold">Seoul, South Korea</p>
                </div>
              </div>
            </div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-primary/5 border border-gray-50"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name" 
                    className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 uppercase tracking-widest">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name" 
                    className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/60 uppercase tracking-widest">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all"
                >
                  <option>Project Inquiry</option>
                  <option>Hiring Proposal</option>
                  <option>General Message</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/60 uppercase tracking-widest">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-surface border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
