import { motion } from 'motion/react';
import { Download, Calendar, Award, BookOpen } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Branding', level: 95 },
  { name: 'Content Marketing', level: 90 },
  { name: 'Adobe CC', level: 98 },
];

const experience = [
  {
    period: '2023.12 - 2025.08',
    title: 'Team Leader / Brand Marketing',
    company: '(주)투엠에이치 (텍캠)',
    desc: (
      <>
        온·오프라인 브랜딩 총괄 및 F&B 마케팅 수행. <span className="text-secondary font-bold">릴스 조회수 291만 회 달성</span> 등 콘텐츠 기획. 자사몰 및 스마트스토어 UI/UX 구축 및 운영 관리.
      </>
    )
  },
  {
    period: '2023.09 - 2023.12',
    title: 'Online MD',
    company: '(주)리버스펩',
    desc: '동남아 주력 해외 마켓(SHOPEE) 입점 및 자체 관리. 상품 촬영, 보정 및 해외몰 업로드/배송 물류 시스템 운영.'
  },
  {
    period: '2020.10 - 2023.02',
    title: 'Web Designer',
    company: '(주)메이크잇',
    desc: '생활용품, 패션, 캠핑 등 다양한 카테고리의 온라인 상세페이지 제작. 제품 패키지 및 각종 배너/로고 디자인, 오픈마켓 재고 관리.'
  }
];

const certificates = [
  { date: '2019.07', name: '컴퓨터그래픽스운용기능사' },
  { date: '2018.12', name: 'GTQ(그래픽기술자격) 1급' },
  { date: '2019.07', name: 'GTQi(그래픽기술자격 일러스트) 1급' },
  { date: '2019.05', name: 'ITQ 한글엑셀(한셀) A등급' },
  { date: '2017.06', name: 'ITQ 아래한글 B등급' },
];

export default function Resume() {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <h1 className="text-5xl md:text-7xl mb-6">Resume & Skills</h1>
            <p className="text-primary/60 text-xl">실무 완결성을 증명하는 저의 발자취와 핵심 역량입니다.</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Download size={20} /> PDF 이력서 다운로드
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Left: Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl mb-12 flex items-center gap-3">
              <Calendar className="text-secondary" /> Work Experience
            </h2>
            <div className="space-y-12 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-200">
              {experience.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-8 relative"
                >
                  <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-secondary" />
                  <p className="text-secondary font-bold mb-2">{item.period}</p>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary/80 font-semibold mb-4">{item.company}</p>
                  <p className="text-primary/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20">
              <h2 className="text-3xl mb-12 flex items-center gap-3">
                <Award className="text-secondary" /> Certificates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, i) => (
                  <div key={i} className="p-6 bg-white rounded-3xl border border-gray-100 flex justify-between items-center">
                    <h4 className="font-bold text-lg">{cert.name}</h4>
                    <span className="text-primary/40 text-sm whitespace-nowrap ml-4">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Skills */}
          <div>
            <div className="sticky top-32">
              <h2 className="text-3xl mb-12 flex items-center gap-3">
                <BookOpen className="text-secondary" /> Skills Stack
              </h2>
              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-3">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-secondary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-primary text-white rounded-3xl">
                <h4 className="font-bold mb-4">Tools I Use</h4>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe CC', 'VS Code', 'React', 'Tailwind', 'Git', 'Notion', 'Slack'].map(tool => (
                    <span key={tool} className="bg-white/10 px-3 py-1 rounded-lg text-sm">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
