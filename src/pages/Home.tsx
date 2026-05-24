import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, Code, Quote, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  category: string;
  img: string;
  tags: string[];
  description: string;
  detailedImages: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://loremflickr.com/1600/900/workspace,design" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        </div>
        
        <div className="section-padding relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Multi Graphic Designer
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1]">
              경험을 바탕으로 <br/>
              <span className="text-secondary"><b>증명하는 </b></span>디자이너
            </h2>
            <p className="text-xl md:text-2xl text-primary/60 mb-12 leading-relaxed max-w-xl">
              비주얼을 넘어 브랜드의 신뢰를 설계하는 디자인,<br/> 귀사의 프로젝트에 꼭 맞는 결과로 증명하겠습니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                프로젝트 의뢰하기 <ArrowRight size={20} />
              </Link>
              <Link to="/projects" className="btn-outline">
                포트폴리오 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-32">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8">
                비즈니스 가치를 <br />디자인으로 증명합니다.
              </h2>
              <p className="text-lg text-primary/60 mb-12 leading-relaxed">
                디자인은 예쁜 것이 전부가 아닙니다. 타겟을 분석하고, 데이터를 기반으로 사용자의 행동을 유도하며, 최종적으로 매출 성장을 견인하는 것이 저의 디자인 철학입니다.
              </p>
              <div className="space-y-6">
                {[
                  { title: "전략적 이커머스 브랜딩", desc: "브랜드 아이덴티티 구축부터 자사몰 UI/UX 최적화까지, 고객의 구매 여정을 설계하는 통합 브랜딩 전략을 제안합니다." },
                  { title: "성과 중심의 UI/UX & 마케팅", desc: "릴스 조회수 291만 회 달성 등 콘텐츠 기획력을 바탕으로, 고객의 체류 시간을 늘리고 실제 구매 전환으로 이어지는 비주얼 솔루션을 제공합니다." },
                  { title: "올라운드 실무 역량", desc: "6년의 실무와 팀장급 경력을 통해 상세페이지 제작부터 오픈마켓 입점 및 운영 관리까지, 프로젝트의 전 과정을 책임지고 완수합니다." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src="https://loremflickr.com/800/1000/ecommerce,ui" alt="Value 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square bg-secondary rounded-2xl p-8 flex flex-col justify-end text-white">
                  <TrendingUp size={40} className="mb-4" />
                  <p className="text-2xl font-bold leading-tight">최고 조회수 291만 회 달성</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-primary rounded-2xl p-8 flex flex-col justify-end text-white">
                  <Layers size={40} className="mb-4" />
                  <p className="text-2xl font-bold leading-tight">100+ 성공적 프로젝트 런칭</p>
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src="https://loremflickr.com/800/1000/branding,minimal" alt="Value 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-32">
        <div className="section-padding">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Work Process</h2>
            <p className="text-primary/60">기획부터 구현까지, 체계적인 파이프라인으로 최상의 결과물을 보장합니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", desc: "시장 조사 및 비즈니스 목표 분석을 통한 전략 수립", icon: <TrendingUp /> },
              { step: "02", title: "Design", desc: "브랜드 아이덴티티 및 비주얼 시스템 설계", icon: <Layers /> },
              { step: "03", title: "Development", desc: "웹 표준을 준수한 고품질 퍼블리싱 및 실구현", icon: <Code /> },
              { step: "04", title: "Optimization", desc: "데이터 분석을 통한 지속적인 개선 및 고도화", icon: <CheckCircle2 /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                <div className="text-6xl font-display font-black text-primary/5 absolute -top-4 -right-4 group-hover:text-secondary/10 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary text-white py-32">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl mb-6">Featured Projects</h2>
              <p className="text-gray-400 text-lg">비즈니스 문제를 해결하고 성과를 창출한 대표 프로젝트입니다.</p>
            </div>
            <Link to="/projects" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              전체 프로젝트 보기 <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: "E-commerce Redesign", 
                category: "UI/UX & Branding", 
                img: "https://loremflickr.com/1200/800/ecommerce,website",
                tags: ["React", "Tailwind", "Figma"],
                description: "기존 이커머스 플랫폼의 사용자 경험을 전면 재설계한 프로젝트입니다. 데이터 분석을 통해 이탈률이 높은 지점을 파악하고, 직관적인 네비게이션과 결제 프로세스를 도입하여 전환율을 25% 향상시켰습니다.",
                detailedImages: [
                  "https://loremflickr.com/1200/800/ecommerce,ui,1",
                  "https://loremflickr.com/1200/800/ecommerce,ui,2",
                  "https://loremflickr.com/1200/800/ecommerce,ui,3"
                ]
              },
              { 
                title: "Premium Brand Identity", 
                category: "Branding & Package", 
                img: "https://loremflickr.com/1200/800/branding,packaging",
                tags: ["Illustrator", "Photoshop", "Print"],
                description: "프리미엄 코스메틱 브랜드를 위한 통합 브랜딩 솔루션입니다. 브랜드의 핵심 가치인 '자연스러운 아름다움'을 시각화하기 위해 미니멀한 로고와 친환경 패키지 디자인을 제안했습니다.",
                detailedImages: [
                  "https://loremflickr.com/1200/800/branding,packaging,1",
                  "https://loremflickr.com/1200/800/branding,packaging,2"
                ]
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-3xl mb-4">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs border border-white/20 px-3 py-1 rounded-full text-gray-400">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-secondary text-white text-center">
        <div className="section-padding">
          <h2 className="text-5xl md:text-7xl mb-12 leading-tight">
            당신의 비즈니스를 <br />성장시킬 준비가 되셨나요?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="bg-white text-secondary px-12 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all">
              지금 바로 문의하기
            </Link>
            <Link to="/resume" className="border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-secondary transition-all">
              이력서 확인하기
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-8 border-b border-gray-100 shrink-0">
                <div>
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">{selectedProject.category}</p>
                  <h2 className="text-3xl font-bold text-primary">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-gray-200 transition-all text-primary"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-grow overflow-y-auto p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-primary/70 leading-relaxed mb-12">
                    {selectedProject.description}
                  </p>
                  
                  <div className="space-y-8">
                    {selectedProject.detailedImages.map((img, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} detail ${index + 1}`} 
                          className="w-full h-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-gray-100 flex justify-center shrink-0">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary px-12"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
