import { motion } from 'motion/react';
import { Heart, Target, Zap, MessageSquare } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative">
              <img 
                src='/src/assets/images/KakaoTalk_20260328_000812141.png'
                alt="Moon Sarang" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
                <p className="font-display font-bold text-xl mb-1">문사랑 (Moon Sarang)</p>
                <p className="text-primary/60 text-sm">Multi Graphic Designer & E-commerce Specialist</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest mb-4 block">About Me</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] sm:leading-[1.2] break-keep mb-8 max-w-xl">
              디자인으로 비즈니스의 <br className="hidden sm:inline" />해답을 찾습니다.
            </h2>
            <div className="space-y-6 text-lg text-primary/60 leading-relaxed">
              <p>
                안녕하세요, 기획부터 실구현까지 전 과정을 책임지는 멀티 그래픽 디자이너 문사랑입니다. 저는 단순히 보기 좋은 디자인을 넘어, 비즈니스의 성과를 견인하는 전략적 디자인의 힘을 믿습니다.
              </p>
              <p>
                이커머스 시장은 빠르게 변화하며, 사용자의 시선을 사로잡는 것만큼이나 구매로 이어지는 경험 설계가 중요합니다. 저는 타겟 분석과 데이터에 기반하여 브랜드의 핵심 가치를 시각화하고, 이를 웹 표준에 맞는 기술로 구현해냅니다.
              </p>
              <p>
                저와 함께하는 프로젝트는 단순한 외주 작업이 아닌, 비즈니스 파트너로서 함께 고민하고 성장하는 과정이 될 것입니다.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 overflow-hidden">
          {[
            { icon: <Target />, title: "Strategy First", desc: "모든 디자인은 명확한 비즈니스 목표와 전략에서 시작합니다." },
            { icon: <Heart />, title: "User Centric", desc: "사용자의 불편함을 찾아내고 이를 해결하는 경험을 설계합니다." },
            { icon: <Zap />, title: "Fast Execution", desc: "기획부터 구현까지 원스톱으로 빠르게 결과물을 만들어냅니다." },
            { icon: <MessageSquare />, title: "Clear Comm", desc: "원활한 소통과 협업을 통해 프로젝트의 완성도를 높입니다." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <div className="text-secondary mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-primary text-white p-12 md:p-20 rounded-[40px] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-snug sm:leading-normal break-keep mb-8">
              "디자인은 문제를 해결하는 가장 아름다운 방법입니다."
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              저의 작업 철학은 '본질에 집중하는 것'입니다. 화려한 장식보다는 브랜드가 전달하고자 하는 메시지가 무엇인지, 사용자가 얻고자 하는 가치가 무엇인지에 집중합니다. 이러한 철학을 바탕으로 기획부터 시각 디자인, 퍼블리싱까지 아우르는 완결성 있는 결과물을 만들어냅니다.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-secondary" />
              <p className="font-display font-bold uppercase tracking-widest text-sm">Moon Sarang Philosophy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
