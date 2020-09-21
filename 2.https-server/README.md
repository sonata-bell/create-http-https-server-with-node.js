# HTTPS Server 만들기(with Node.js)

## 1. 환경 구성

1. Node.js 설치(https://nodejs.org/ko/)

   - 'Automatically install the necessary tools' 체크

2. VS Code 설치(https://code.visualstudio.com/)

3. VS Code 'Remote - SSH' Extension 설치(https://code.visualstudio.com/docs/remote/ssh-tutorial)

## 2. SSL 발급 방법

1. 시놀로지(Synology) 서버 접속

2. 제어판 - 보안 - 인증서 탭으로 이동

3. 인증서 탭에서 추가 버튼 클릭

4. 새 인증서 추가

5. Let's Encrypt에서 인증서 얻기

   - 기본 인증서로 설정 체크

6. 인증서 생성 창

   - 도메인 이름: 시놀로지(Synology) 서버 도메인 이름 입력

   - 이메일: 도메인 등록 시, 사용한 이메일 주소 입력

   - 적용 버튼 클릭

7. 인증서 탭에서 사용할 인증서를 선택하고 추가 우측 화살표 버튼 클릭

8. 인증서 내보내기 선택

   - 인증서 파일이 압축되어 다운로드

## 3. 소스 코드 해석

0. 필요 지식: HTML5, JavaScript ES6 (ECMA Script 2015), Node.js(HTTP)

1. const https = require('https')

   - https 모듈 불러오기 및 https 상수 선언

2. https.createServer(option, requestListener)

   - https 서버 생성

3. option

   - SSL 인증서 등록

4. requestListener

   - 콜백 함수

   - https 서버 동작 정의

5. req.method

   - 요청 REST Method

6. req.url

   - 요청 URL

7. res.writeHead(statusCode, headers)

   - 응답 헤더

8. statusCode

   - 응답 상태 코드
   - https://developer.mozilla.org/ko/docs/Web/HTTP/Status

9. headers

   - 응답 정의

10. res.end()

    - 응답 데이터

11. listen(port, callback)

    - HTTPS 서버 시작

12. port

    - 서버 포트 정의

13. callback

    - 콜백 함수

# 4. 실행 방법

1. VS Code 실행

2. VS Code 터미널에서 2.https-server 디렉토리로 이동

3. node app 실행

4. 웹 브라우저에서 https://[도메인주소]:4433 접속

5. '4433 포트 HTTPS Server with Node.js' 출력 확인
