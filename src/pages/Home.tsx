import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, Code, Quote, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, Project } from '@/src/data/projects';

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
      <section className="bg-white py-32 overflow-hidden">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">
                비즈니스 가치를, 기획과 <br />비주얼로 증명합니다.
              </h2>
              <p className="text-lg text-primary/60 mb-12 leading-relaxed">
                디자인은 예쁜 것이 전부가 아닙니다. 타겟을 분석하고, 데이터를 기반으로 사용자의 행동을 유도하며, 최종적으로 매출 성장을 견인하는 것이 저의 디자인 철학입니다.
              </p>
              <div className="space-y-6">
                {[
                  { title: "전략적 이커머스 브랜딩", desc: "브랜드 아이덴티티 구축부터 자사몰 UI/UX 최적화까지, 고객의 구매 여정을 설계하는 통합 브랜딩 전략을 제안합니다." },
                  { title: "성과를 만드는 콘텐츠 기획 & 디자인", desc: "트렌디한 숏폼 콘텐츠 기획으로 '릴스 조회수 292만 회'를 달성하는 등, 단순히 예쁜 시각물을 넘어 소비자의 자발적인 반응และ 공유를 이끌어내는 고효율 비주얼을 설계합니다." },
                  { title: "매출로 증명하는 6년 차 올라운더", desc: "디자인, 마케팅 팀장, 이커머스 MD를 거친 6년의 실무 경험을 바탕으로 상세페이지 기획부터 매체 광고 데이터 분석, 스토어 운영 관리까지 비즈니스 전반의 런칭 사이클을 주도합니다." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <CheckCircle2 className="text-secondary shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <img src="https://i.ifh.cc/lF3QdM.jpg" alt="Value 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
                <motion.div 
                  className="aspect-square bg-secondary rounded-2xl p-8 flex flex-col justify-end text-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <TrendingUp size={40} className="mb-4" />
                  <p className="text-2xl font-bold leading-tight mb-3">최고 조회수 292만 회 달성</p>
                  <div>
                    <span className="inline-block text-[11px] bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-semibold tracking-wider border border-white/15 uppercase font-display">
                      #Instagram Viral Marketing
                    </span>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-4 pt-12">
                <motion.div 
                  className="aspect-square bg-primary rounded-2xl p-8 flex flex-col justify-end text-white"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Layers size={40} className="mb-4" />
                  <p className="text-2xl font-bold leading-tight">100+ 성공적 프로젝트 런칭</p>
                </motion.div>
                <motion.div 
                  className="aspect-[3/4] rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img src="https://i.ifh.cc/gdK6J3.jpg" alt="Value 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-32 overflow-hidden">
        <div className="section-padding">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Work Process</h2>
            <p className="text-primary/60">기획부터 구현까지, 체계적인 파이프라인으로 최상의 결과물을 보장합니다.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {[
              { step: "01", title: "Planning", desc: "시장 조사 및 비즈니스 목표 분석을 통한 전략 수립", icon: <TrendingUp /> },
              { step: "02", title: "Design", desc: "브랜드 아이덴티티 및 비주얼 시스템 설계", icon: <Layers /> },
              { step: "03", title: "Development", desc: "웹 표준을 준수한 고품질 퍼블리싱 및 실구현", icon: <Code /> },
              { step: "04", title: "Optimization", desc: "데이터 분석을 통한 지속적인 개선 및 고도화", icon: <CheckCircle2 /> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="glass-card p-8 lg:p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-start h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="text-7xl font-display font-black text-primary/10 absolute -top-3 -right-3 group-hover:text-secondary/20 transition-colors select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-8 shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary text-white py-32 overflow-hidden">
        <div className="section-padding">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl mb-6">Featured Projects</h2>
              <p className="text-gray-400 text-lg">비즈니스 문제를 해결하고 성과를 창출한 대표 프로젝트입니다.</p>
            </div>
            <Link to="/projects" className="text-secondary font-bold flex items-center gap-2 hover:gap-4 transition-all">
              전체 프로젝트 보기 <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[projects.find(p => p.id === 9), projects.find(p => p.id === 1)].filter(Boolean).map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project as Project)}
              >
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative">
                  <img src={project?.img} alt={project?.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  {project?.youtubeId && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-secondary/90 transition-all duration-300">
                        <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{project?.displayCategory || project?.category}</p>
                    <h3 className="text-3xl mb-4">{project?.title}</h3>
                    <div className="flex gap-2">
                      {project?.tags.map(tag => (
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
      <section className="py-32 bg-secondary text-white text-center overflow-hidden">
        <motion.div 
          className="section-padding"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
        </motion.div>
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
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">{selectedProject.displayCategory || selectedProject.category}</p>
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
                  {selectedProject.youtubeId ? (
                    <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl mb-12 border border-gray-100 bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                        title={selectedProject.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null}

                  <p className="text-xl text-primary/70 leading-relaxed mb-12 break-keep">
                    {selectedProject.description}
                  </p>
                  
                  {selectedProject.detailedImages && selectedProject.detailedImages.length > 0 && (
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
                  )}
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
