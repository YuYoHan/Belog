# Belog Project

<div align="center">
<img width="329" alt="image" src="https://web-blog-site.s3.ap-northeast-2.amazonaws.com/favicon.png">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FVoluntain-SKKU%2FVoluntain-2nd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

</div>


# Blog Web Site
>  **개발기간: 2023.03 ~ 2023.06.01**<br/>



## 배포 주소
> **프론트 서버** : http://web-blog-site.s3-website.ap-northeast-2.amazonaws.com<br>


## 웹개발팀 소개

|      황순욱       |          유요한         |       정다현         |       김민성                                                                                                                        
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: 
|   <img width="160px" src="https://avatars.githubusercontent.com/u/70474741?s=400&u=fb295b1d8b1ede66ad0d9e290d8fc3e899be0d50&v=4" />    |                      <img width="160px" src="https://avatars.githubusercontent.com/u/110465572?v=4" />    |                   <img width="160px" src="https://avatars.githubusercontent.com/u/43868558?v=4"/>   | <img width="160px" src="https://avatars.githubusercontent.com/u/89964419?s=64&v=4"/>
|   [@cleooo5857](https://github.com/cleooo5857)   |    [@YuYoHan](https://github.com/YuYoHan)  | [@jDaHyun](https://github.com/jDaHyun)  | [@rlaalstjd00](https://github.com/rlaalstjd00)  |
| Front-end | Back-end | Back-end | Back-end |

## 프로젝트 소개

이 프로젝트의 모델은 Velog로, Velog를 모델로 정한 이유는 개발공부를 하면서 가장 친숙한 형태의 블로그 형식이기 때문에 Velog로 정하게되었습니다. 그렇기 때문에 구조는 Velog와 비슷한 형태이며 불필요하다고 생각하는 UI를 제거하고 구성하였습니다.

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 16.17.1](https://nodejs.org/ca/blog/release/v16.17.1/)
- [Npm 9.6.7](https://www.npmjs.com/package/npm/v/9.6.7)

#### Frontend
```
$ cd front
$ npm install 
$ npm start
```

---

## Stacks 🐈

### 환경
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)   

### 언어
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---
## 화면 구성 📺
| 로그인 팝업 | 회원가입 팝업 | 무한 스크롤  |
| :-------------------------------------------: | :------------: | :-------------------------------------------: | 
|  <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/ec59da91-e8f6-4b68-bc06-9fc1b9410c2e/image.png"/> |  <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/d8729255-3820-449d-9dc0-95fc872ed17f/image.png"/>| <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/9f0e2dde-87ab-4c90-9a6b-4176428e5aa7/image.gif"/> 
| 게시글 등록 |  게시글 수정 | 게시글 삭제 | 
| <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/7f35b58a-e0f6-487e-b667-e93b0aef4e6b/image.gif"/>   |  <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/9a63a18b-daa2-4f50-9433-a2ea47c87803/image.gif"/>     |<img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/6925dc0d-1fda-44a2-be1e-245cb9a3276d/image.gif"/>   |
| 설정 페이지 |  댓글 | 
| <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/cbb91339-b07e-44a0-80aa-ea7bc92b3b96/image.gif"/>   |  <img width="320" src="https://velog.velcdn.com/images/cleooo5857/post/2fb5601c-456d-4761-9346-dba55a6d78c4/image.gif"/>     |
---
## 주요 기능 📦

### ⭐️ 로그인,회원가입
- 세션방식 구현 
- 카카오 주소 API 사용(회원가입)

### ⭐️ 메인 페이지
- 게시판 생성된 리스트 메인 페이지의 CARD 형식으로 보여줍니다.
- 각각 CARD 안의 데이터(제목,본문내용,작성날짜,작성자)

### ⭐️ 상세 페이지
- 게시글 수정,삭제 등이 있습니다.<br/>
  ㄴ 수정(게시글 생성 컴포넌트를 재사용해서 작성된 데이터를 보여줍니다.)<br/>
  ㄴ 게시글 삭제 후 AWS S3에 저장된 이미지 객체들을 삭제
  
### ⭐️ 게시글 작성(새 글 추가)
- React-Quill 라이브러리 사용하여 게시글 구현<br/>
  ㄴ React-Quill 이미지 base 64 표기 때문에 이미지 핸들러 커스텀 구현<br/>
     ㄴ 사용자가 이미지 업로드 시 에디터에 보여지는 이미지들은 AWS S3에 boardImage/파일에 저장됩니다.
- 로그인 사용자만 이용 가능

### ⭐️ 설정(회원정보 수정)
- 비밀번호,주소 회원정보 수정 페이지
- 로그인 사용자만 이용 가능

---
## 아키텍쳐

### 디렉토리 구조
```bash
── .github/workflows : git action ci/cd
── Front
   ├── src
   ├───├── apis : api 서비스 폴더 
   │   │   ├── authApi.ts : 회원가입,로그인 ... 
   │   │   ├── CommentApi.ts : 댓글 추가 수정 삭제 ...
   │   │   ├── PostApi.ts : 게시판 추가 수정 삭제 ...
   ├───├── assets : 로고,로딩 
       │   └── gif
       │   └── images
       │   └── svg
       ├── atoms : 전역관리 폴더
       │   ├── isOpenCloseModal.ts : 모달 켜기,끄기
       │   └── SessionStorge.ts : 유저 정보의 boolean
       ├── components
       │   ├── ComentCountTitle.tsx : 댓글 갯수
       │   ├── comentForm.tsx : 댓글 입력 
       │   ├── index.tsx : 댓글 타이틀 폼 index 컴포넌트
       │   ├── loding : 로딩 컴포넌트 
       │   ├── Header
       │   │   ├── Header.tsx : 헤더 컴퍼넌트 index 
       │   │   ├── logo.tsx : 로고
       │   │   ├── Postingbtn.tsx : 게시글 작성 버튼
       │   │   ├── Profile.tsx : 텝 메뉴
       │   │   ├── LoginBtn.tsx
       │   │   │   ├── index.tsx : 모달 컴포넌트의 index 컴포넌트
       │   │   │   ├── hook 
       │   │   │   │   └── useHomeRegexp.ts : 회원가입 조건 만족시 버튼 활성화 hook
       │   │   │   ├── modal    
       │   │   │   │   └── JoinModal.tsx : 회원가입 모달        
       │   │   │   │   └── LoginBtn.tsx : 로그인 버튼
       │   │   │   │   └── modal.tsx : 로그인 모달 
       │   │   │   │   └── PopupDom.tsx :  카카오 주소 api
       │   │   │   │   └── PopupPostCode.tsx :  카카오 주소 api
       ├── consts
       │   ├── querykey.ts : react:query 키
       ├── hook
       │   ├── checkPassword.ts : 비밀번호 8자 이상 hook
       │   ├── editable.ts : 수정,삭제 권한 버튼 
       │   ├── usedaysTimer.ts :  작성자 시간 hook
       │   ├── useinputs.ts :  input 핸들 hook
       │   ├── usequillcontent.ts : react-quill 에디터 내용 핸들러
       ├── libs
       │   ├── font : 폰트
       │   ├── styles : css 초기세팅
       ├── pages
       │   ├── Detail :  작성자 시간 hook
       │   │   └── index.tsx : 상세페이지 컴포넌트들의 index        
       │   │   └── ConfirmModal.tsx : 상세 페이지 삭제 모달        
       │   │   └── EditBtn.tsx : 게시글 수정버튼(게시글 작성 컴포넌트 이동)        
       │   │   └── RemoveBtn.tsx : 게시글 삭제버튼 모달오픈        
       │   ├── MainPage :  작성자 시간 hook
       │   │   └── MainCard.tsx : 카드형태 리스트 데이터        
       │   │   └── MainList.tsx : 전체리스트 api 요청,무한스크롤
       │   ├── Posting :  작성자 시간 hook
       │   │   └── PostingEdit.tsx : react:quill 에디터 설정, 이미지 핸들러
       │   │   └── PostingRegisterbtn.tsx : 게시글 등록,수정 버튼
       │   │   └── PostingTag.tsx : 게시글 태그 리스트
       │   │   └── PostingTitle.tsx : 게시글 제목
       │   │   └── index.tsx : 게시판 작성,수정 컴포넌트 
       │   ├── UserUpdate :  작성자 시간 hook
       │   │   └── index.tsx : 유저 상세 조회,유저 수정 버튼
       │   │   └── title.tsx : 설정 제목
       │   │   └── addrUpdate : form(사용자 input),index(주소 index 컴포넌트),title(제목)
       │   │   └── emailUpdate : form(사용자 input),index(이메일 index컴포넌트),title(제목)
       │   │   └── pswUserUpdate : form(사용자 input),index(비밀번호 index컴포넌트),title(제목)
       │   ├── postingQuery :  무한 스크롤 함수
       │   ├── SessionRepository :  세션 저장,삭제,가져오기
       │   ├── routes
       │   │   └── PrivateRoute.js : 로그인 사용자 페이지 접근 권한한
       │   │   └── Routing.tsx : 경로설정 컴포넌트
       ├── app.tsx
       ├── custom.d.ts : svg 불러오기
       ├── index.tsx
       ├── package:lock.json
       ├── package.json
       ├── public
       │   ├── favicon_(2).ico
       │   ├── favicon.ico
       │   └── index.html
       │   └── logo.svg
       │   └── logo192.png

```
