# 🌊 포트폴리오 프로젝트

> 📍 해당 프로젝트는 개인 작업물이며 재가공 및 재배포는 금하고 있습니다. 또한 개인 정보가 포함되어 있기 때문에 레포지토리를 포크하는 것도 원치 않습니다. 일부 소스 코드를 참고하는 것은 환영하나 출처를 명시해주시면 감사하겠습니다.

<br/>
<br/>

## 프로젝트 소개

프론트엔드 개발자를 준비하면서 진행했던 프로젝트, 프론트엔드 개발 스택 등을 한번에 확인할 수 있는 포트폴리오 사이트를 구현하였습니다. 반응형 디자인을 적용하여 다양한 기기 및 화면 크기에 맞게 자연스러운 렌더링이 되도록 구현하였습니다.

<br/>

**NextJS(v12+)**

NextJS의 SSG와 SSR을 혼합하는 하이브리드 방식으로, 페이지에 따라 가장 최적화된 렌더링 방식을 선택하여 사용하였습니다. 기본적으로는 SSG로 생성된 페이지를 제공하여, 초기 로딩 시간(TTV)을 단축시켰고 SEO를 향상 시켰습니다. CSR로 동작하는 페이지에선 다이나믹 임포트를 적용하여 JS 로딩 시간을 단축시켰습니다.

<br/>

🌊 [포트폴리오 사이트 보러가기](https://next-portfolio-tutorial-lnooclx88-dkgus523s-projects.vercel.app/)

<br/>
<br/>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Feeeyooon%2Fportfolio&count_bg=%238989FF&title_bg=%23BABABA&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

## 프로젝트 개요

🎈 프로젝트 기간 : `24.11.08` ~ (현재 개선 중으로, 리드미의 설명과 현재 버전이 다를 수가 있습니다.)

🌊 프로젝트 구성 : about me | skills | projects | career | contact

✨ 핵심 기능 :

- 반응형 웹 디자인
- Contact를 통해 **카카오 오픈채팅** 연결  
- `Framer-motion`을 사용한 애니메이션 효과

<br/>
<br/>

## 기술 스택

<img src="https://img.shields.io/badge/Next.js_v12.01-000000?style=flat&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/FramerMotion-0055FF?style=flat&logo=framer&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white"/>

<br/>
<br/>

## 구현 화면 및 핵심 기능

지속적으로 개선중이라, 현재 사이트와 디자인이나 구조가 다를 수 있습니다.

<br/>

### 메인 홈 페이지

동적 타이핑 효과를 구현한 React 컴포넌트로  사용자가 설정한 텍스트 배열을 기반으로 하나의 문장을 순차적으로 타이핑하고, 일정 시간 후 삭제한 뒤 다음 텍스트로 넘어가는 애니메이션을 제공합니다.

<br/>

<!-- 메인화면 영상으로 넣기  -->

<br/>
<br/>

### 반응형 웹 디자인

여러 기기나 플랫폼의 화면 크기에 따라 자동으로 렌더링될 수 있도록 반응형 웹 디자인을 구현하였습니다.

<br/>

<!-- 반응형 영상 넣기 -->

<br/>

Header의 Menu 역시 화면의 사이즈에 따라 변경됩니다.

<br/>

<!-- 메뉴바 영상 넣기 -->

<br/>
<br/>

## 추가 구현 예정

- [ ] Home (처음 온보딩 페이지) 디자인 개선
- [ ] 프로젝트 데이터 업데이트 (+ 프로젝트 이미지)
- [ ] 스크롤에 따른 헤더 Active 추가
- [ ] 개선된 내용 리드미에 업데이트
- [ ] 헤더 메뉴 클릭 시 스크롤 이동

<br/>
<br/>

## 폴더 구조

```
📦components
 ┣ 📂home
 ┃ ┣ 📜animation.js
 ┃ ┣ 📜hero.js
 ┃ ┗ 📜typing.js
 ┣ 📂projects
 ┃ ┗ 📜project-item.js
 ┣ 📜dark-mode-toggle-button.js
 ┣ 📜footer.js
 ┣ 📜header.js
 ┗ 📜layout.js
📦config
 ┗ 📜index.js
📦pages
 ┣ 📂api
 ┃ ┗ 📜hello.js
 ┣ 📜404.js
 ┣ 📜about-me.js
 ┣ 📜career.js
 ┣ 📜index.js
 ┣ 📜projects.js
 ┣ 📜skills.js
 ┣ 📜skills2.js
 ┗ 📜_app.js
📦public
 ┣ 📜animation.json
 ┣ 📜backend.png
 ┣ 📜blog.png
 ┣ 📜consumer.jpg
 ┣ 📜developer_tools.png
 ┣ 📜devOps.png
 ┣ 📜exsoft.png
 ┣ 📜fox-favicon.png
 ┣ 📜frontend.png
 ┣ 📜github.png
 ┣ 📜playauto.jpg
 ┣ 📜playauto.png
 ┣ 📜profile.jpg
 ┣ 📜sprintec.jpg
 ┗ 📜vercel.svg
📦styles
 ┗ 📜globals.css
```

<br/>
<br/>

## 라이브러리

```json
 "dependencies": {
    "dotenv": "^16.0.1",
    "framer-motion": "^11.11.17",
    "next": "12.1.6",
    "next-themes": "^0.2.0",
    "react": "18.1.0",
    "react-dom": "18.1.0",
    "react-lottie-player": "^1.4.3"
 },
 "devDependencies": {
    "eslint": "8.17.0",
    "eslint-config-next": "12.1.6",
    "tailwindcss": "^3.0.24"
 }
```