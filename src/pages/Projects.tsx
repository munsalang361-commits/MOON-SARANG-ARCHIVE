import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'UI/UX', 'Branding', 'Print', 'Web'];

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  detailedImages: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '에이밀리 스토어 UI 디자인',
    category: 'UI/UX',
    img: '/src/assets/images/에이밀리_스토어_목업.jpg',
    description: '이커머스 플랫폼의 메인 인터페이스 및 사용자 경험(UX) 최적화 설계입니다.',
    detailedImages: ['/src/assets/images/에이밀리_스토어_목업.jpg']
  },
  {
    id: 2,
    title: '쇼피 모바일 웹 UI',
    category: 'UI/UX',
    img: '/src/assets/images/쇼피_목업.png',
    description: '모바일 환경에 최적화된 반응형 쇼핑몰 세로형 UI 레이아웃 디자인입니다.',
    detailedImages: ['/src/assets/images/쇼피_목업.png', '/src/assets/images/쇼피_목업2.png']
  },
  {
    id: 3,
    title: '데이바이데이 마스크 패키지 브랜딩',
    category: 'Branding',
    img: '/src/assets/images/마스크_목업.png',
    description: '브랜드 로고 아이덴티티를 일관성 있게 적용한 패키지 및 제품 디자인입니다.',
    detailedImages: ['/src/assets/images/마스크_목업.png']
  },
  {
    id: 4,
    title: '텍캠 금액권 3종 디자인',
    category: 'Branding',
    img: '/src/assets/images/금액권3종_목업_2.png',
    description: '고급스러운 톤앤매너로 제작된 오프라인 브랜드 아이덴티티 에셋 디자인입니다.',
    detailedImages: ['/src/assets/images/금액권3종_목업_2.png', '/src/assets/images/금액권3종_목업.png']
  },
  {
    id: 5,
    title: '텍캠 메뉴판 브로슈어',
    category: 'Print',
    img: '/src/assets/images/텍캠_메뉴_목업.png',
    description: '시각적 몰입감을 높인 가독성 중심의 지면 리플렛 및 메뉴판 레이아웃입니다.',
    detailedImages: ['/src/assets/images/텍캠_메뉴_목업.png']
  },
  {
    id: 6,
    title: '텍캠 와이드 옥외 광고 및 배너',
    category: 'Print',
    img: '/src/assets/images/텍캠_전광판_목업.png',
    description: '대형 실사 출력물 환경을 고려한 옥외 전광판 및 X배너 그래픽 디자인입니다.',
    detailedImages: ['/src/assets/images/텍캠_전광판_목업.png', '/src/assets/images/텍캠_배너_목업.png']
  },
  {
    id: 7,
    title: '에이밀리 상세페이지 기획 디자인',
    category: 'Web',
    img: '/src/assets/images/에이밀리_상세_목업.png',
    description: '소비자의 구매 전환을 유도하는 이커머스 웹 상세페이지 콘텐츠 기획 및 디자인입니다.',
    detailedImages: ['/src/assets/images/에이밀리_상세_목업.png']
  },
  {
    id: 8,
    title: '텍캠 이커머스 반응형 웹',
    category: 'Web',
    img: '/src/assets/images/텍캠_스토어_목업.jpg',
    description: 'PC 및 태블릿 환경을 고려한 브랜드 온라인 스토어 반응형 웹 디자인입니다.',
    detailedImages: ['/src/assets/images/텍캠_스토어_목업.jpg']
  }
];

export default function Projects() {
  const [filter, setFilter] = React.useState('All');
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl mb-6">Portfolio</h1>
          <p className="text-primary/60 text-xl">비즈니스 가치를 담아낸 저의 작업물들을 소개합니다.</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-3 rounded-full font-semibold transition-all border-2",
                filter === cat 
                  ? "bg-primary border-primary text-white" 
                  : "bg-transparent border-gray-200 text-primary/60 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-8 text-center">
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

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
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full bg-surface flex items-center justify-center hover:bg-gray-200 transition-all"
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
