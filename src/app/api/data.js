export const portfoliodata = [
    {
        id: 1,
        src: '/home/displayportfolio/title/portfolio_title_slide_personal.png',
        alt: '개인프로젝트제목슬라이드',
        noClick: true,
    },
    {
        id: 2,
        title: 'PRETCOORD',
        titledetail: '패션 3D 플랫폼 사이트\n랜딩 페이지 코드 리메이크',
        src: '/home/displayportfolio/thumb/pretcoord.png',
        alt: '개인포폴241216',
        thumbstartdate: '2024.12',
        period_start: '2024.12.16',
        period_end: '2025.01.06',
        desc: "'Pretcoord'사이트를 최신 프레임워크인 NEXT.js를 활용해 리메이크한 프로젝트 입니다. UI만 기존 사이트를 참고하여 GSAP 과 react 훅을 이용해 개발하였습니다.",
        deploy: 'https://pretcoordremake.netlify.app',
        code: 'https://github.com/peaceRyun/pretcroodclone',
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'SASS', 'JS', 'GSAP', 'Swiper'],
        requests: [],
        keyFeatures: [
            {
                title: '스크롤 인터렉션 효과',
                img: '',
                desc1: '인트로 영상을 scale 값을 조절하여 스크롤을 통해 더 확대될 수 있도록 설계하여 몰입감을 높였습니다. ',
                desc2: '사용자가 Pretcoord 소개 문구를 재미나게 읽을 수 있도록 스크롤 할때마다 글씨가 빛나게끔 구현하였습니다.',
            },
            {
                title: '반응형',
                img: '',
                desc1: '모바일, 태블릿, 모니터 등 어떤 디바이스에서도 일관된 사용자 경험을 제공합니다. 글자들을 Clamp라는 css 함수를 통해 제어하면서 보다 효율적으로 반응형을 구현하면서 재미를 느꼈습니다',
            },
            {
                title: '부드러운 애니메이션',
                img: '',
                desc1: '링크 글씨 hover효과(Glow, line Effect)를 구현해보았습니다. UI적으로 화려한 두 hover효과에 대하여 디자인적으로 학습해보고 구현하는 방법도 알아갈 수 있었던 좋은 기회가 되었습니다.',
            },
        ],
        troubleShooting: [
            {
                title: '스크롤 애니메이션 구현',
                problem:
                    '포트폴리오의 주요 시각적 요소인 영상 섹션 등에서 인터랙티브한 애니메이션을 구현하는 과정에서 어려움을 겪었습니다. 컴포넌트 단위로 움직이는 React환경에서는 document객체로 DOM에 접근하는 방식은 셀렉터가 예상대로 동작하지 않거나 다른 컴포넌트의 요소까지 선택하였습니다.\n때문에, React/Next.js의 훅(Hook) 기반 접근 방식에 대한 학습이 필요했습니다. 특히 스크롤 기반 애니메이션을 구현하기 위해서, 애니메이션 대상 DOM 요소에 접근하고, 컴포넌트 생명주기 내에서 애니메이션 시작 및 종료를 관리하는 방법을 찾아야 했습니다.',
                solution:
                    '애니메이션 라이브러리로 GSAP을 공부하면서 특히, 스크롤과 관련된 애니메이션 관련 제어가 직관적이라고 느꼈습니다. 공식문서와 챗봇을 통해 React의 useRef 훅을 사용하여 애니메이션을 적용할 DOM 요소에 안전하게 접근하는 방법과 useEffect 훅을 활용하여 컴포넌트 마운트 시점에 Timeline과 ScrollTrigger의 여러 속성 기반 애니메이션 로직을 실행하고, 컴포넌트가 언마운트될 때 애니메이션 관련 리소스를 정리(cleanup)하는 패턴을 이해하며 프로젝트에 적용해보았습니다.',
            },
        ],
    },
    {
        id: 3,
        title: 'Sunfish',
        titledetail: '스트레스 관리 모바일웹',
        src: '/home/displayportfolio/thumb/sunfish.png',
        alt: '개인포폴241123',
        thumbstartdate: '2024.11',
        period_start: '2024.11.23',
        period_end: '2024.12.14',
        desc: '자체적으로 기획해서 만들어본 스트레스 관리 모바일 웹 입니다. 간편한 ToDo 전광판 등록 기능, 요리API를 끌어온 비스트레스 음식 간편 검색, 감정 일기장으로 구성되어 있습니다. 최신 프레임워크 Next.js를 활용하여 개발했습니다.',
        deploy: 'https://sunfish2.vercel.app',
        code: 'https://github.com/peaceRyun/sunfish2',
        figma: 'https://www.figma.com/design/mseacF6eDnRzpwa9Uvzgr6/project2-sunfish?node-id=0-1&t=lQEK8zzdAbWtsgVh-1',
        techStack: ['React', 'Next.js', 'Charkra UI', 'SASS', 'JS', 'Swiper', 'lucide', 'react-icon', 'classNames'],
        requests: [
            '원인 모를 스트레스에 시달려 마음고생과 몸고생을 하고 있는 30대 남자 직장인을 겨냥했습니다. 간단하고 직관적이고, 실용적인 앱을 깔아서 쓰고 있고, 항상 생각이 많아서 스스로에 대한 돌봄이 필요한 사람으로 정의하였습니다. ',
        ],
        process: [
            {
                title: '리서치 및 기획',
                desc: '타깃 고객과 경쟁사를 이해하기 위해 힐링 앱, 스트레스를 주제로 한 앱 여러개를 다운받아 UI를 비교해보았습니다. 디자인 프로세스에 참고할 사용자 페르소나를 정의하였습니다.',
            },
            {
                title: '프로토타이핑',
                desc: 'Figma를 사용하여 프로토타입을 제작하여 사용자 중심의 레이아웃을 제작했습니다.',
            },
            {
                title: '시각 디자인',
                desc: 'image sprite을 사용하여 일관된 스케치 메뉴 아이콘을 활용하여 배치하였습니다.',
            },
            {
                title: '구현',
                desc: '앱의 사용성에 초점을 두어 첫 화면을 한눈에 들어오는 메뉴와 전광판으로 구성하였습니다. 기능에는 전광판 등록, 감정일기장, 증상별 백과사전, 먹킷리스트로 구성하여 스트레스를 주제로 다방면으로 자신을 돌볼 수 있는 메뉴 구성을 꾀하였습니다. ',
            },
        ],
        keyFeatures: [
            {
                title: '전광판 등록을 통한 ToDoList 알람',
                img: '',
                desc1: '기간, 메트릭스 우선순위 뿐만 아니라 지시한 사람까지 기록하면서 자동으로 정리되는 1순위를 간편하게 전광판에 등록해보세요!',
            },
            {
                title: '간편한 비스트레스성 요리 재료 검색과 관련 레시피를 손쉽게!',
                img: '',
                desc1: '우울, 화남, 불안, 피곤의 대표적인 4가지 요인에 따른 비스트레스성 요리 재료를 검색해보고 관련 레시피를 손쉽게 찾아보세요!',
            },
            {
                title: '증상별 백과사전을 통해 본인의 몸을 되돌아 보아요!',
                img: '',
                desc1: '여드름, 목/어깨 통증, 소화장애, 대표 3가지 스트레스 증상들을 사전을 통해 배경지식을 쌓으며 몸을 풀어보세요!',
            },
            {
                title: '감정 일기장을 통해 매일의 스트레스를 관리해볼까요?',
                img: '',
                desc1: '락이 걸려있어 남들이 볼 걱정 NO!',
                desc2: '한눈에 보기 쉬운 일기장 리스트!',
                desc3: '제목/내용/날짜 뿐만 아니라 그날의 기분도 저장해보아요!',
            },
        ],
        troubleShooting: [
            {
                title: '전광판 UI와 등록 방식에 대한 고민',
                problem:
                    '전광판 UI를 월 단위의 등록, 주 단위의 등록을 모두 아우를 수 있도록 하기 위해 노력하였습니다. 그러나, 사용자 관점에서 봤을 때 계속 자동으로 움직이는 형태의 swiper는 디자인적으로 투박하고, 웹접근성 면에서 좋아보이지 않았습니다.',
                solution:
                    '기존의 복잡한 월, 주 단위의 등록은 삭제하고, 오늘에만 집중하는 대신, 우선순위 메트릭스, 지시한 사람 등의 정보를 추가하여 보다 한번에 등록한 todo가 사용자에게 느껴질 수 있도록 데이터를 구축하였습니다',
            },
            {
                title: 'API을 끌어오는 방법에 대한 고민',
                problem:
                    'API로 끌어와지는 데이터의 type부터 시작하여, 어떤 구조로 되어있는지를 분석하고, 그것에 맞는 js 메서드와 react훅을 사용하는 것이 쉽지않게 느꼈습니다.',
                solution:
                    'API 주소가 페이지 단위로 끌어와지는 만큼, 최대한 많은 리스트 정보를 끌어오되, 렌더링 지연이 생기지 않을 만큼의 적절한 페이지 수를 여러 시도 끝에 조정해보았습니다. API 구조 분석을 하면서 JSON 파싱에 대한 사실도 새롭게 알게 되었고, useEffect에 대한 이해도를 올릴 수 있었습니다. 또한, 비동기 fetch, async/await, axios의 사용법을 익힐 수 있는 좋은 계기가 되었습니다.',
            },
            {
                title: '색에 대한 고민',
                problem:
                    '메뉴화면의 버튼 색깔과 이에 매치되는 아이콘을 어떤 방식으로 결정할지에 대한 것에서 고민이 되었습니다. 이는 수많은 시도로 이어 지게 되었습니다.',
                solution:
                    '아이콘의 경우, imageSprite을 공부하여 통일된 디자인과 로고 이미지와 어울리는 스케치 컨셉으로 선택하였습니다. 색의 경우, 어울리는 컬러를 지정해주는 웹사이트를 참고하여 색을 고르고, 채도를 통일시키는 방향으로 선택하여 깔끔함을 주기 위해 노력했습니다.',
            },
        ],
    },
    {
        id: 4,
        title: '삼천리 자전거 ',
        titledetail: '자전거 브랜드/쇼핑몰 페이지\n리뉴얼',
        src: '/home/displayportfolio/thumb/samcheonbike.png',
        alt: '개인포폴241014',
        thumbstartdate: '2024.10',
        period_start: '2024.10.14',
        period_end: '2024.11.20',
        desc: '기존 삼천리자전거 웹사이트를 GSAP 스크롤트리거 애니메이션과 반응형 웹 등의 최신 웹사이트 트렌드 방법으로 리메이크한 HTML/SCSS/JS 프로젝트입니다.  ',
        deploy: 'https://peaceryun.github.io/SCLBike/pages',
        code: 'https://github.com/peaceRyun/SCLBike',
        figma: 'https://www.figma.com/design/UFpbjWERXFC5aZUoy9A2zf/project1_3000bike-remake-with-html%2Fcss%2Fjs%2Bgsap?node-id=2001-31042&t=l8a6z3s12dIYSfsw-1',
        techStack: ['HTML5', 'SASS', 'JS', 'GSAP', 'Swiper', 'Slick', 'Shoelace'],
        requests: [
            '기존 삼천리 자전거 사이트는 브랜드 사이트 임에도 주로 정적인 사진과 영상이 담겨져 있음이 느껴졌고, 투박한 디자인의 쇼핑몰 페이지가 아쉽다고 느꼈습니다. 따라서 레퍼런스 조사를 통해 동적 애니메이션과 보다 더 깔끔한 UI를 가진 쇼핑몰 사이트로 재탄생시키자는 목적으로 구성하였습니다',
        ],
        process: [
            {
                title: '리서치',
                desc: '화제를 띄고 있는 라이브러리 GSAP을 사용하는 사이트를 주로 찾아보며 첫 프로젝트의 레퍼런스를 찾아 다녔습니다.',
            },
            {
                title: '프로토타이핑',
                desc: 'Figma를 사용하여 프로토타입을 제작하여 사용자 중심의 레이아웃을 제작했습니다.',
            },
            {
                title: '시각 디자인',
                desc: '방문자가 기존의 삼천리 자전거의 사이트임을 인지하면서 새롭게 리메이크된 사이트로 즐겼으면 좋겠다고 생각했습니다. 시각적 만족도를 높이기 위해 고품질 이미지와 깔끔한 타이포그래피를 사용했습니다.',
            },
            {
                title: '구현',
                desc: 'about페이지, 쇼핑몰 list페이지, 상세페이지 3개의 페이지를 gsap애니메이션과 더불어, 탭, hover효과, 더블 레이아웃, 스와이퍼, 아코디언과 같은 UI를 구현하였습니다.',
            },
        ],
        keyFeatures: [
            {
                title: '동적 애니메이션이 가미된 브랜드 메세지&배너',
                img: '',
                desc1: '스크롤 할 때마다 툭툭 튀어나오는 고화질 사진들과 부드럽게 나오는 메세지를 통해 몰입감 있는 삼천리 자전거 브랜드 이미지를 경험할 수 있습니다.',
            },
            {
                title: '자전거에 대한 세밀한 선택이 가능한 상세페이지',
                img: '',
                desc1: '기존 사이트에서는 한눈에 보기 어려웠던 사이즈/컬러 선택을 한 페이지에 보기 쉽게 정리하였습니다. ',
            },
            {
                title: '웹접근성에 맞추기',
                img: '',
                desc1: 'Accessibility Korea 에서 검증',
                desc2: 'NULI 지침에 맞춘 마크업',
            },
        ],
        troubleShooting: [
            {
                title: '사용자 관점에서 최적의 애니메이션 타이밍 찾기',
                problem:
                    '사용자들의 피드백을 받을 때마다 애니메이션이 빠르다, 느리다, 이 타이밍에는 이 애니메이션이 나오면 같이 나오면 안된다, 된다 등의 속도 조절에 대한 의견이 자주 나왔습니다. Gsap과 CSS로 이를 맞추는 과정은 생각 외로 오래 걸리는 과정이 되었습니다.',
                solution:
                    '레퍼런스 사이트 분석과 세세한 비교를 통해 초반 구현을 해보고 여러 사람들에게 피드백을 받아보았습니다. 피드백이 온 부분을 GSAP의 duration, start지점, 전체 스크롤 영역을 나중으로 조절하거나, css transition 속성의 duration 값을 조정하며 사용자 입장에서 봤을 때 지루하거나 거슬리는 부분이 없도록 하는 것에 초점을 두며 수정을 해나갔습니다. 결과적으로 피드백 주신 분들에게 본인이 원하는 데로 되었다는 평가를 듣게 되었습니다.',
            },
            {
                title: 'GSAP을 사용하는 방법에 대한 연구',
                problem:
                    'GSAP을 처음 사용해보면서 to와 from을 통한 애니메이션 조정 방식을 이해를 하면서 조금씩 구현을 시도 해보았습니다. 하지만 생각만큼의 부드러운 동작이 이루어지지 않았습니다. 또한, 코드의 간결성 또한 떨어져 같은 코드의 반복이 지나치게 많이 생기면서 변수관리도 복잡해져 가기만 했습니다.',
                solution:
                    '레퍼런스 분석을 통해 css만 제어하되, GSAP으로 클래스를 동적으로 붙이는 방법을 알아내어 보다 더 부드럽고, 적은 양의 코딩으로 같은 효과를 나타낼 수 있었습니다. ',
            },
        ],
    },
    {
        id: 5,
        src: '/home/displayportfolio/title/portfolio_title_slide_team.png',
        alt: '팀프로젝트제목슬라이드',
        noClick: true,
    },
    {
        id: 6,
        title: 'VanCleef',
        titledetail: '홈페이지\n리뉴얼',
        src: '/home/displayportfolio/thumb/vancleef.png',
        alt: '팀포폴250226',
        thumbstartdate: '2025.02',
        period_start: '2025.02.26',
        period_end: '2025.03.24',
        desc: '기존 반클리프 아펠 사이트를 기능까지 리메이크 해본 React Vite 웹 개발 협업 프로젝트 입니다. 불편한 UX와 동적 인터렉티브 요소의 부족을 개선해 보았습니다. 로컬스토리지를 활용해보기 위해 목업 데이터 구조 설계부터 시작하여 장바구니, 상품별 리뷰&문의, 로그인&회원가입, 회원정보 불러오기&수정 등을 구현 하였습니다. ',
        deploy: 'https://project-vancleef.vercel.app',
        code: 'https://github.com/peaceRyun/project-vancleef',
        figma: 'https://www.figma.com/design/mmwiSjjdtvvVi1dB5dsiZt/D2C-Project?node-id=1-88&t=IsmeicsJpaB2Dogg-1',
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'SASS', 'JS', 'GSAP', 'Swiper'],
        requests: [
            '반클리프&아펠 사이트를 조사하면서 투박한 디자인과 복잡한 메뉴구조도를 최신 웹트랜드를 적용하여 재 탄생하면 2030의 사이트 이용률을 높일 수 있을 것이라고 겨냥하였습니다.',
        ],
        process: [
            {
                title: '리서치 및 기획',
                desc: '기능 중심의 개발을 기획한 만큼, 이미지 소스가 많은 컨텐츠 위주로 선택하여 진행했습니다.',
            },
            {
                title: '와이어프레임 및 프로토타이핑',
                desc: 'Figma를 사용하여 와이어프레임과 프로토타입을 제작하여 사용자 중심의 레이아웃을 제작했습니다.',
            },
            {
                title: '시각 디자인',
                desc: '방문자가 귀금속에 집중할 수 있도록 무채색 계열로 깔끔하게 디자인했습니다. 시각적 만족도를 높이기 위해 고품질 이미지와 깔끔하고 세련된 타이포그래피를 사용했습니다.',
            },
            {
                title: '구현',
                desc: '상품 페이지, 장바구니, 결제/예약, 리뷰/문의와 같은 필수 이커머스 기능을 사용자 친화적으로 웹사이트를 개발했습니다.',
            },
        ],
        keyFeatures: [
            {
                title: '사용자 인증 시스템',
                img: '',
                desc1: '로컬스토리지 기반 로그인/회원가입 기능 구현, 세션 유지 및 마이페이지 기록 연동 구현',
            },
            {
                title: '제품 카테고리 필터링',
                img: '',
                desc1: '리스트페이지에서는 직관적인 4개의 카테고리로 구성하고, new, best, 가격순으로도 제품들을 볼 수 있습니다.',
                desc2: '검색 기능은 제품명 검색 외에도, 컬렉션명이나 시리즈명으로도 검색이 가능하도록 구현하였습니다.',
            },
            {
                title: '화려하면서 깔끔한 디자인 페이지',
                img: '',
                desc1: '로딩, 랜딩페이지, 전시회페이지, About페이지에서 Gsap을 활용한 깔끔한 스크롤 인터렉션 페이지를 만들어 사용자가 브랜드에 대해 보다 직관적이고 재밌게 접근하게 만들었습니다.',
            },
        ],
        troubleShooting: [
            {
                title: '목업 데이터 객체 구조 최적화',
                problem:
                    '리뉴얼 과정에서 제품 상세정보와 원하는 이미지를 효율적인 코드로 가져오기 위해 구조 설계가 필요하였습니다. 어떤 데이터를 노출시킬지에 대한 고민을 하며 이에 맞는 적합한 구조가 무엇인지 고민을 하였습니다.',
                solution:
                    '타 참고용 웹사이트 목업데이터 코드를 참고하며 초안을 짜고, redux에서 initialstate와 어떤 dispatch함수 만들지에 대한 고려를 하며 최대한 단순하면서도 효과적으로 객체를 구성할 수 있도록 하였습니다. ',
            },
            {
                title: '사용자 데이터 로컬 스토리지&동적state 관리 고민',
                problem:
                    '초반에 사용자 회원가입 데이터, 리뷰 데이터, 문의 데이터, 예약 데이터를 별도의 redux파일로 각각 따로 관리하면서 이를 서로 연결하는데 있어 어려움이 많았습니다.',
                solution:
                    '모든 데이터를 user라는 키 값에 객체 형식으로 저장되도록 구현하여 한 곳에 몰아서 보관을 하였습니다. 그 후 따로 고유성을 지닌 id를 계속 추가하는 코드를 작성하는 대신, user 객체에서 id 검색을 하게 하여 간단하게 만들었습니다. ',
            },
        ],
    },
    {
        id: 7,
        title: 'VIBO',
        titledetail: 'OTT 자체기획 홈페이지',
        src: '/home/displayportfolio/thumb/vibo.png',
        alt: '팀포폴241231',
        thumbstartdate: '2024.12',
        period_start: '2024.12.31',
        period_end: '2025.02.25',
        desc: '상업성 높은 3개의 사이트(넷플릭스, 왓챠, 티빙)을 재해석하여 탄생한 OTT 사이트 “ViBo”입니다.  React Vite를 활용해 콘텐츠별 리뷰 기능 및 UI 개선, 동적 애니메이션을 통한 홍보 강화를 통해 기존 사이트들의 부족한 사용자 경험을 보완하여 만든 순수 React 사이트 입니다. 4명의 협업을 통해 만들어졌습니다.',
        deploy: 'https://viboott.vercel.app/',
        code: 'https://github.com/peaceRyun/vibo',
        figma: 'https://www.figma.com/design/2RnUhIuvGnwXrh5v91NX04/OTT-작업지침서?node-id=0-1&t=Vk9L49iYm3Ad85gQ-1',
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'SASS', 'JS', 'GSAP', 'Swiper'],
        requests: [
            '기존 사이트들의 경험을 그대로 하면서, 실시간 리뷰 정보를 다채롭게 얻을 수 있는 새로운 경쟁력을 갖춘 사이트를 내세워 2030 OTT 사용자를 겨냥하였습니다.',
        ],
        process: [
            {
                title: '리서치 및 기획',
                desc: '타깃 고객과 경쟁사를 이해하기 위해 시장 조사를 진행했습니다. 마인드맵 방식을 통해 유즈케이스 분석을 하여 사용자가 어떤 경험을 하게 될 것인지에 대한 flow를 생각해보았습니다. primary color를 선택하고, Rough 디자인을 페이지 단위로 분담하여 진행하였습니다.',
            },
            {
                title: '와이어프레임 및 프로토타이핑',
                desc: 'Rough 디자인을 토대로Figma를 사용하여 와이어프레임과 프로토타입을 제작하여 보다 세밀한 사용자 중심의 레이아웃을 제작했습니다.',
            },
            {
                title: '시각 디자인',
                desc: '방문자가 ViBo에 집중할 수 있도록 검정색 배경에 Primary컬러 계열로 깔끔하게 디자인했습니다. 시각적 만족도를 높이기 위해 고품질 이미지와 깔끔한 타이포그래피를 사용했습니다.',
            },
            {
                title: '구현',
                desc: '컨텐츠 페이지, 마이페이지 기록 관리, 결제 구독 관리와 같은 필수 OTT 기능을 탑재하여 웹사이트를 개발했습니다.',
            },
        ],
        keyFeatures: [
            {
                title: 'TMDB API 활용 콘텐츠 컨셉별 Swiper 및 검색 기능',
                img: '',
                desc1: 'TMDB API를 활용하여 요일별 신작 Swiper, 인기 Top10 Swiper, 장르별 리스트, 검색, 애니메이션 Swiper, 다크한 분위기 영화 Swiper, 감성 드라마 Swiper 를 구현하였습니다. ',
            },
            {
                title: '로컬 스토리지 기반 로그인/회원가입, 프로필 아이콘, 마이페이지 기록 관리 기능 구현',
                img: '',
                desc1: 'Local Storage를 활용하여 로그인/회원가입 기능을 구현했습니다. 간단한 비밀번호 유효성 검사와 중복 닉네임 검사까지 구현하여 보안 강화와 가입 사용자에 대한 구별하였습니다.',
                desc2: '개인화된 기록관리를 할 수 있도록, 관심 콘텐츠, 시청 기록, 리뷰/평점 기록을 동적으로 그리고 한눈에 볼 수 있도록 구현하였습니다.',
                desc3: '프로필 아이콘 변경 페이지를 통해 디자이너가 직접 디자인한 아이콘을 선택하고 저장되도록 구현하였습니다.',
            },
            {
                title: '곳곳에 있는 사용자 인터렉션 요소',
                img: '',
                desc1: '사용자가 사이트에 흥미를 느끼고, 군데군데 홍보 요소에 대해 거부감을 느끼지 않도록 애니메이션을 추가하였습니다.',
            },
        ],
        troubleShooting: [
            {
                title: 'Swiper: Overflow 문제',
                problem:
                    '인기 Top 10 Swiper를 개발하면서 원래 기획 의도대로 구현하는 것이 생각보다 어렵다는 것을 알게 되었습니다. 본래 기술 스택에서 Styled-Coponent를 골랐음에도 Swiper를 제어하기 위해서는 인라인 style을 써야하거나 별도의 css의 제어가 필요했습니다. 그러다보니 style 우선순위 문제로 swiper의 내용물이 튀어나오거나, 튀어나와야 하는 요소가 나오지 못하고 레이아웃에 갇히는 등 의도한 레이아웃이 나오지 않는 문제가 발생했습니다.',
                solution:
                    '이를 해결하기 위해 챗봇, 구글링 검색, 레퍼런스 사이트 코드 분석을 통해 Swiper(부모)와 swiper-slide(자식)을 overflow:visible를 주고, 이 Swiper의 부모요소 RightArea에 padding-left와 overflow:hidden을 줌으로써 원하는 부분만 나오게 하여 피그마 원래 디자인이 나오게끔 구현하였습니다.',
            },
            {
                title: '메인페이지 버벅임 문제',
                problem:
                    '최종 메인페이지 결과물에는 hover시에 나오는 목업데이터 썸네일 영상, GSAP 애니메이션 효과, API로 끌어와지는 데이터들로 인해 같은 순간에 로드가 되면서 충돌이 일어나고, 렉이 걸리면서 사이트를 스크롤 할 수 없을 만큼의 버벅임이 발생하게 되었습니다. ',
                solution:
                    '이를 순서를 정해놓고 지연을 발생시키는 방법을 고안하고 구현하니 해결이 되었습니다. 우선순위는 가장 먼저 떠야하는 GSAP 애니메이션을 1순위로 두고, 그다음 컨텐츠인 라이브 목업 hover 영상, 마지막으로 API로 끌어와지는 데이터를 3초, 5초로 1차적으로 지연을 두었습니다. 이렇게 하니 자연스럽게 과부화가 오는 현상을 해결할 수 있었고, 로드가 안되는 부분은 로딩 애니메이션과 페이지를 추가하여 사용자가 알 수 있게끔 처리하였습니다.  ',
            },
        ],
    },
];
