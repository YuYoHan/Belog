Voluntain-2nd
image
Hits

Voluntain Web Page v2.0
성균관대학교 소프트웨어학과 온라인 해외봉사 단체
개발기간: 2022.03 ~ 2022.10

배포 주소
개발 버전 : http://voluntain.cs.skku.edu/
프론트 서버 : http://voluntain.cs.skku.edu:33307/
백엔드 서버 : http://voluntain.cs.skku.edu:2223/

웹개발팀 소개
박지예	서채연	이현정
		
@parkjiye	@ChaeyeonSeo	@hyunjeong408
성균관대학교 소프트웨어학과 4학년	성균관대학교 소프트웨어학과 4학년	성균관대학교 소프트웨어학과 4학년
프로젝트 소개
발룬테인은 온라인 코딩 교육 봉사를 하는 단체입니다. 기존에 소프트웨어학과에서 월드프렌즈 ICT 봉사단이라는 개발도상국에서 약 학 달 간 코딩 교육 봉사를 하는 활동이 있었는데, 봉사가 일회성으로 끝나는 점에 아쉬움을 느껴 지속적인 봉사를 하고자 만들어졌습니다. 발룬테인에서는 스크래치, 파이썬 등 프로그래밍 언어에 관한 강의를 제공하고, 질의응답과 라이브 세션을 통해 한국 학생과 외국 학생 간에 소통이 이루어집니다.

Voluntain will share the knowledge of programming.
You can take easy-to-understand lectures created by our team, including Scratch and Python. Also, improve your understanding and application skills of programming with exercise questions in the lecture videos.

Voluntain's website will give you a learning-friendly environment.
Our website supports the following component.

Various online lectures with detailed descriptions and exercise questions.
Q&A section to ask questions freely.
Function to check the lecture you watched recently.
시작 가이드
Requirements
For building and running the application you need:

Node.js 14.19.3
Npm 9.2.0
Strapi 3.6.6
Installation
$ git clone https://github.com/Voluntain-SKKU/Voluntain-2nd.git
$ cd Voluntain-2nd
Backend
$ cd strapi-backend
$ nvm use v.14.19.3
$ npm install
$ npm run develop
Frontend
$ cd voluntain-app
$ nvm use v.14.19.3
$ npm install 
$ npm run dev
Stacks 🐈
Environment
Visual Studio Code Git Github

Config
npm

Development
JavaScript React Strapi Next.js Bootstrap Material UI

Communication
Slack Notion GoogleMeet

화면 구성 📺
메인 페이지	소개 페이지
	
강좌 소개 페이지	강의 영상 페이지
	
주요 기능 📦
⭐️ 강좌 선택 및 강의 영상 시청 기능
Scratch, Python 2개 강좌 및 각 강좌마다 10개 가량의 강의 영상 제공
추후 지속적으로 강좌 추가 및 업로드 예정
⭐️ 강의 관련 및 단체에 대한 자유로운 댓글 작성 가능
Disqus를 이용하여 강의 관련 질문이나 단체에 대한 질문 작성 가능
⭐️ 이어 학습하기 기능
Cookie 기능을 이용하여 이전에 학습했던 내용 이후부터 바로 학습 가능
아키텍쳐
디렉토리 구조
├── README.md
├── package-lock.json
├── package.json
├── strapi-backend : 
│   ├── README.md
│   ├── api : db model, api 관련 정보 폴더
│   │   ├── about
│   │   ├── course
│   │   └── lecture
│   ├── config : 서버, 데이터베이스 관련 정보 폴더
│   │   ├── database.js
│   │   ├── env : 배포 환경(NODE_ENV = production) 일 때 설정 정보 폴더
│   │   ├── functions : 프로젝트에서 실행되는 함수 관련 정보 폴더
│   │   └── server.js
│   ├── extensions
│   │   └── users-permissions : 권한 정보
│   ├── favicon.ico
│   ├── package-lock.json
│   ├── package.json
│   └── public
│       ├── robots.txt
│       └── uploads : 강의 별 사진
└── voluntain-app : 프론트엔드
    ├── README.md
    ├── components
    │   ├── CourseCard.js
    │   ├── Footer.js
    │   ├── LectureCards.js
    │   ├── MainBanner.js : 메인 페이지에 있는 남색 배너 컴포넌트, 커뮤니티 이름과 슬로건을 포함.
    │   ├── MainCard.js
    │   ├── MainCookieCard.js
    │   ├── NavigationBar.js : 네비게이션 바 컴포넌트, _app.js에서 공통으로 전체 페이지에 포함됨.
    │   ├── RecentLecture.js
    │   └── useWindowSize.js
    ├── config
    │   └── next.config.js
    ├── lib
    │   ├── context.js
    │   └── ga
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   ├── _app.js
    │   ├── _document.js
    │   ├── about.js
    │   ├── course
    │   ├── index.js
    │   ├── lecture
    │   ├── newcourse
    │   ├── question.js
    │   └── setting.js
    ├── public
    │   ├── favicon.ico
    │   └── logo_about.png
    └── styles
        └── Home.module.css
