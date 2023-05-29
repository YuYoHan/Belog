# Belog Project

<div align="center">
<img width="329" alt="image" src="https://web-blog-site.s3.ap-northeast-2.amazonaws.com/favicon.png">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FVoluntain-SKKU%2FVoluntain-2nd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>

Expand All
	@@ -14,16 +14,16 @@


## 배포 주소
> **프론트 서버** : http://web-blog-site.s3-website.ap-northeast-2.amazonaws.com<br>

## 웹개발팀 소개

|      황순욱       |          유요한         |       정다현         |       김민성                                                                                                                        
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: 
|   <img width="160px" src="https://avatars.githubusercontent.com/u/70474741?s=400&u=fb295b1d8b1ede66ad0d9e290d8fc3e899be0d50&v=4" />    |                      <img width="160px" src="https://user-images.githubusercontent.com/50205887/207570536-f5a82e48-99a1-4399-91d3-75fc5f8f3349.png" />    |                   <img width="160px" src="https://user-images.githubusercontent.com/50205887/207570634-247c3715-a54e-4f63-8c08-9b266f8a35f7.png"/>   |
|   [@cleooo5857](https://github.com/cleooo5857)   |    [@ChaeyeonSeo](https://github.com/ChaeyeonSeo)  | [@hyunjeong408](https://github.com/hyunjeong408)  |
| Front-end | Back-end | Back-end | Back-end |

## 프로젝트 소개

Expand All
	@@ -33,9 +33,9 @@
### Requirements
For building and running the application you need:

- [Node.js 16.17.1](https://nodejs.org/ca/blog/release/v16.17.1/)
- [Npm 9.6.7](https://www.npmjs.com/package/npm/v/9.6.7)


#### Frontend
Expand All
	@@ -45,115 +45,135 @@ $ npm install
$ npm run dev


## Stacks 🐈

### 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### 언어
![HTML](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

---
## 화면 구성 📺
| 메인 페이지  |  소개 페이지   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036155-a57900f7-c68a-470d-923c-ff3c296ea635.png"/> |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208036645-a76cf400-85bc-4fa2-af72-86d2abf61366.png"/>|  
| 강좌 소개 페이지   |  강의 영상 페이지   |  
| <img width="329" src="https://user-images.githubusercontent.com/50205887/208038737-2b32b7d2-25f4-4949-baf5-83b5c02915a3.png"/>   |  <img width="329" src="https://user-images.githubusercontent.com/50205887/208038965-43a6318a-7b05-44bb-97c8-b08b0495fba7.png"/>     |

---
## 주요 기능 📦

### ⭐️ 강좌 선택 및 강의 영상 시청 기능
- Scratch, Python 2개 강좌 및 각 강좌마다 10개 가량의 강의 영상 제공
- 추후 지속적으로 강좌 추가 및 업로드 예정

### ⭐️ 강의 관련 및 단체에 대한 자유로운 댓글 작성 가능
- Disqus를 이용하여 강의 관련 질문이나 단체에 대한 질문 작성 가능

### ⭐️ 이어 학습하기 기능
- Cookie 기능을 이용하여 이전에 학습했던 내용 이후부터 바로 학습 가능

---
## 아키텍쳐

### 디렉토리 구조
```bash
── Front
   └── .github/workflows : git action ci/cd
   ├── src
   ├───├── apis : api 서비스 폴더 
   │   │   ├── authApi.ts : 회원가입,로그인 ... 
   │   │   ├── CommentApi.ts : 댓글 추가 수정 삭제 ...
   │   │   ├── PostApi.ts : 게시판 추가 수정 삭제 ...
   ├───├── assets : 로고,로딩 
   │   │   └── gif
   │   │   └── images
   │   │   └── svg
   │───├── atoms : 전역관리 폴더
   │   │   ├── isOpenCloseModal.ts : 모달 켜기,끄기
   │   │   └── SessionStorge.ts : 유저 정보의 boolean
   │───├── components
   │   │   ├── ComentCountTitle.tsx : 댓글 갯수
   │   │   ├── comentForm.tsx : 댓글 입력 
   │   │   ├── index.tsx : 댓글 타이틀 폼 index 컴포넌트
   │   │   ├── Header
   │   │   ├── loding : 로딩 컴포넌트 
   │   │   │   ├── Header.tsx : 헤더 콤퍼넌트 index 
   │   │   │   ├── logo.tsx : 로고
   │   │   │   ├── Postingbtn.tsx : 게시글 작성 버튼
   │   │   │   ├── Profile.tsx : 텝 메뉴
   │   │   │   ├── LoginBtn.tsx
   │   │   │   │   ├── index.tsx : 모달 컴포넌트의 index 컴포넌트
   │   │   │   │   ├── hook 
   │   │   │   │   │   └── useHomeRegexp.ts : 회원가입 조건 만족시 버튼 활성화 hook
   │   │   │   │   ├── modal    
   │   │   │   │   │   └── JoinModal.tsx : 회원가입 모달        
   │   │   │   │   │   └── LoginBtn.tsx : 로그인 버튼
   │   │   │   │   │   └── modal.tsx : 로그인 모달 
   │   │   │   │   │   └── PopupDom.tsx :  카카오 주소 api
   │   │   │   │   │   └── PopupPostCode.tsx :  카카오 주소 api
   │───├── consts
   │   │   ├── querykey.ts : react:query 키
   │───├── hook
   │   │   ├── checkPassword.ts : 비밀번호 8자 이상 hook
   │   │   ├── editable.ts : 수정,삭제 권한 버튼 
   │   │   ├── checkPassword.ts : 비밀번호 8자 이상 hook
   │   │   ├── usedaysTimer.ts :  작성자 시간 hook
   │   │   ├── useinputs.ts :  input 핸들 hook
   │   │   ├── usequillcontent.ts : react:quill 내용 hook
   │───├── libs
   │   │   ├── font : 폰트
   │   │   ├── styles : css 초기세팅
   │───├── pages
   │   │   ├── Detail :  작성자 시간 hook
   │   │   │   └── index.tsx : 상세페이지 컴포넌트들의 index        
   │   │   │   └── ConfirmModal.tsx : 상세 페이지 삭제 모달        
   │   │   │   └── EditBtn.tsx : 게시글 수정버튼(게시글 작성 컴포넌트 이동)        
   │   │   │   └── RemoveBtn.tsx : 게시글 삭제버튼 모달오픈        
   │   │   ├── MainPage :  작성자 시간 hook
   │   │   │   └── MainCard.tsx : 카드형태 리스트 데이터        
   │   │   │   └── MainList.tsx : 전체리스트 api 요청,무한스크롤
   │   │   ├── Posting :  작성자 시간 hook
   │   │   │   └── PostingEdit.tsx : react:quill 에디터 설정, 이미지 핸들러
   │   │   │   └── PostingRegisterbtn.tsx : 게시글 등록,수정 버튼
   │   │   │   └── PostingTag.tsx : 게시글 태그 리스트
   │   │   │   └── PostingTitle.tsx : 게시글 제목
   │   │   ├── UserUpdate :  작성자 시간 hook
   │   │   │   └── index.tsx : 유저 상세 조회,유저 수정 버튼
   │   │   │   └── title.tsx : 설정 제목
   │   │   │   └── addrUpdate : form(사용자 input),index,title(제목)
   │   │   │   └── emailUpdate : form(사용자 input),index(이메일 index컴포넌트),title(제목)
   │   │   │   └── pswUserUpdate : form(사용자 input),index(비밀번호 index컴포넌트),title(제목)
   │───├── postingQuery :  무한 스크롤 함수
   │   │   ├── SessionRepository :  세션 저장,삭제,가져오기routes
   │   │   routes 
   │   │   ├── PrivateRoute.js : 로그인 유저 접근권한 
   │   │   ├── Routing.js : 페이지 경로 
   │   ├── app.tsx
   │   ├── custom.d.ts : svg 파일
   │   ├── index.tsx
   │   ├── package.json
   │   ├── package:lock.json
   │   ├── setProxy.json : cors 에러 컴포넌트

```
