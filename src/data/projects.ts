export interface Project {
  id: number;
  title: string;
  category: string;
  displayCategory?: string;
  img: string;
  description: string;
  detailedImages: string[];
  tags: string[];
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    id: 9,
    title: '브랜드 홍보 영상 기획 및 제작',
    category: 'Branding',
    displayCategory: 'BRANDING & VIDEO PRODUCTION',
    img: 'https://i.ytimg.com/vi/PCV2AImeQi8/maxresdefault.jpg',
    description: '텍캠 근무 당시 촬영 감독과의 긴밀한 협업을 통해 완성한 브랜드 홍보 비디오 마케팅 자산입니다. 정성스러운 바베큐 제조 과정부터 실제 고객 판매 단계까지의 브랜드 스토리를 감각적인 영상미로 담아내어 브랜드 인지도를 대폭 향상시켰습니다.',
    detailedImages: [],
    tags: ['Video Editing', 'Creative Direction', 'Cooperation'],
    youtubeId: 'PCV2AImeQi8'
  },
  {
    id: 1,
    title: '에이밀리 스토어 UI 디자인',
    category: 'UI/UX',
    img: 'https://i.ifh.cc/KSnGYo.jpg',
    description: '이커머스 플랫폼의 메인 인터페이스 및 사용자 경험(UX) 최적화 설계입니다. 사용자 데이터 분석을 기반으로 복잡한 구매 여정(User Journey)을 직관적으로 단순화했으며, 타겟 고객층의 성향에 맞춘 미니멀하고 세련된 비주얼 아이덴티티를 적용했습니다. 특히 모바일 및 웹 환경에서의 그리드 시스템 최적화를 통해 정보의 가독성을 높이고 실질적인 구매 전환율(CR)을 이끌어내는 데 중점을 두었습니다.',
    detailedImages: [
      'https://i.ifh.cc/KSnGYo.jpg'
    ],
    tags: ['UI/UX', 'Figma', 'E-commerce']
  },
  {
    id: 2,
    title: '쇼피 모바일 웹 UI',
    category: 'UI/UX',
    img: 'https://i.postimg.cc/hvQtrLdz/syopi-mog-eob.png',
    description: '글로벌 오픈마켓 플랫폼 환경에 맞춘 모바일 최적화 반응형 쇼핑몰 UI 레이아웃 디자인입니다. 한정된 모바일 디스플레이 안에서 유저가 피로감 없이 상품 정보와 혜택을 인지할 수 있도록 엄격한 타이포그래피 정렬 및 시각적 위계(Visual Hierarchy)를 설계했습니다. 엄지손가락 동선(Thumb Zone)을 고려한 CTA 버튼 배치와 직관적인 스크롤 인터랙션을 통해 이커머스 체류 시간 향상 및 고객 이탈률 감소를 목표로 구축했습니다.',
    detailedImages: [
      'https://i.postimg.cc/hvQtrLdz/syopi-mog-eob.png',
      'https://i.postimg.cc/SRYxr6MQ/syopi-mog-eob2.png'
    ],
    tags: ['UI/UX', 'Mobile', 'Responsive']
  },
  {
    id: 3,
    title: '데이바이데이 마스크 패키지 브랜딩',
    category: 'Branding',
    img: 'https://i.postimg.cc/G25pG7Hd/maseukeu-mog-eob.png',
    description: '치열한 헬스&뷰티 시장에서 독보적인 제품 경쟁력을 확보하기 위한 데이바이데이 마스크의 브랜드 정체성(BI) 수립 및 패키지 그래픽 시스템 개발 프로젝트입니다. 브랜드 가치를 직관적으로 전달할 수 있도록 일관된 톤앤매너의 컬러 시스템과 로고 포지셔닝을 기획했습니다. 오프라인 매대에서의 시각적 주목도뿐만 아니라 이커머스 상세페이지 썸네일 노출 시에도 브랜드의 프리미엄 감성이 고스란히 전달되도록 유기적인 온·오프라인 브랜딩을 완성했습니다.',
    detailedImages: [
      'https://i.postimg.cc/G25pG7Hd/maseukeu-mog-eob.png'
    ],
    tags: ['Branding', 'Package', 'Logo']
  },
  {
    id: 4,
    title: '텍캠 금액권 3종 디자인',
    category: 'Branding',
    img: 'https://i.postimg.cc/pV3ftkqv/geum-aeggwon3jong-mog-eob.png',
    description: '브랜드 로열티 강화를 위해 기획된 텍캠 오프라인 기프트 금액권 3종 디자인 에셋입니다. 브랜드를 상징하는 감각적인 톤앤매너와 그래픽 요소를 밀도 있게 녹여내어, 소장 가치를 지닌 하나의 프리미엄 브랜드 굿즈로 느껴지도록 설계했습니다. 단순 지면 출력을 넘어 용지의 질감과 가공 방식까지 세심하게 고려하여 제작되었으며, 오프라인 매장 방문 고객에게 일관되고 확장된 럭셔리 브랜드 경험(BX)을 제공합니다.',
    detailedImages: [
      'https://i.postimg.cc/pV3ftkqv/geum-aeggwon3jong-mog-eob.png',
      'https://i.postimg.cc/hGMvPPnt/geum-aeggwon3jong-mog-eob-2.png'
    ],
    tags: ['Branding', 'Offline Asset', 'Identity']
  },
  {
    id: 5,
    title: '텍캠 메뉴판 브로슈어',
    category: 'Print',
    img: 'https://i.postimg.cc/5jcNkXBg/menyupan.png',
    description: '오프라인 매장 고객의 시각적 경험과 주문 편의성을 극대화한 가독성 중심의 지면 리플렛 및 메뉴판 레이아웃 가이드입니다. 복잡한 메뉴 라인업과 세트 구성을 사용자의 시선 흐름(F-Shape 패턴)에 맞춰 체계적으로 재배치하고, 시각적 몰입감을 높여주는 감각적인 고화질 푸드 그래픽을 레이아웃과 조화시켰습니다. MD 및 마케팅 팀장 관점에서 메뉴별 소구점을 정확히 포착해 디자인함으로써 실질적인 업셀링(Upselling)과 객단가 상승을 유도했습니다.',
    detailedImages: [
      'https://i.postimg.cc/5jcNkXBg/menyupan.png'
    ],
    tags: ['Print', 'Brochure', 'Layout']
  },
  {
    id: 6,
    title: '텍캠 와이드 옥외 광고 및 배너',
    category: 'Print',
    img: 'https://i.postimg.cc/xjBvSgtV/tegkaem-jeongwangpan-mog-eob.png',
    description: '대형 실사 출력물 환경 및 유동 인구의 시선 패턴을 철저히 고려한 옥외 와이드 전광판과 X배너 그래픽 디자인입니다. 원거리나 이동 중에도 핵심 메시지와 텍캠의 강력한 브랜드 비주얼이 한눈에 각인될 수 있도록 임팩트 있는 레이아웃과 높은 명도 대비의 컬러 콘트라스트를 활용했습니다. 왜곡 없는 완벽한 스케일 조절과 해상도 관리를 통해 공간의 분위기를 압도하는 프로페셔널한 스페이스 브랜딩을 실현했습니다.',
    detailedImages: [
      'https://i.postimg.cc/xjBvSgtV/tegkaem-jeongwangpan-mog-eob.png',
      'https://i.ifh.cc/VnpFyz.jpg'
    ],
    tags: ['Print', 'Graphic', 'Outdoor Ad']
  },
  {
    id: 7,
    title: '에이밀리 상세페이지 기획 및 디자인',
    category: 'Web',
    img: 'https://i.ifh.cc/bwskXO.jpg',
    description: '소비자의 심리적 허들을 낮추고 즉각적인 구매 전환을 이끌어내기 위해 철저한 마케팅 소구점 분석을 기반으로 진행된 이커머스 웹 상세페이지 콘텐츠 총괄 기획 및 비주얼 디자인입니다. 스크롤 깊이(Scroll Depth)에 따라 타겟 고객이 느끼는 결핍 제시, 문제 해결, 제품의 특장점 증명, 리뷰 신뢰성 확보, 최종 혜택 제안 순서로 이어지는 논리적인 카피라이팅과 설득형 레이아웃을 구축했습니다. 디자인 팀장 및 이커머스 MD로서 트래픽 분석에 기반한 상업적 성과 창출에 중점을 둔 프로젝트입니다.',
    detailedImages: [
      'https://i.ifh.cc/bwskXO.jpg'
    ],
    tags: ['Web', 'Detail Page', 'Planning']
  },
  {
    id: 8,
    title: '텍캠 이커머스 반응형 웹',
    category: 'Web',
    img: 'https://i.ifh.cc/fw5GnC.jpg',
    description: 'PC, 태블릿, 모바일 등 다양한 디바이스 환경의 스크린 해상도에 유연하게 대응하도록 설계된 브랜드 온라인 스토어 반응형 웹 디자인입니다. 브랜드 가치를 직관적으로 느낄 수 있는 메인 인터페이스와 원활한 상품 검색, 간결한 필터 시스템을 구축하여 탐색 비용을 최소화했습니다. 6년간 축적된 웹 디자인 및 마케팅 실무 경험을 바탕으로, 단순한 브랜드 소개용 웹사이트를 넘어 백엔드 운영 효율성과 최종 결제 단계까지 매끄럽게 연결되는 고효율 이커머스 플랫폼을 완성했습니다.',
    detailedImages: [
      'https://i.ifh.cc/fw5GnC.jpg'
    ],
    tags: ['Web', 'E-commerce', 'Responsive']
  }
];
