import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Maximize2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { projects, Project } from '@/src/data/projects';

const categories = ['All', 'UI/UX', 'Branding', 'Print', 'Web'];

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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {project.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-secondary/90 transition-all duration-300">
                      <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-8 text-center">
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">{project.displayCategory || project.category}</p>
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
                  <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">{selectedProject.displayCategory || selectedProject.category}</p>
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
