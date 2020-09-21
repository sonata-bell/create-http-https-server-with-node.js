# HTTP Server 만들기(with Node.js)

## 1. 환경 구성

1. Node.js 설치(https://nodejs.org/ko/)

   - 'Automatically install the necessary tools' 체크

2. VS Code 설치(https://code.visualstudio.com/)

## 2. 실행 방법

1. VS Code 실행

2. VS Code 터미널에서 1.http-server 디렉토리로 이동

3. node app 실행

4. 웹 브라우저에서 localhost:8080 또는 127.0.0.1:8080 접속

5. '8080 포트 HTTP Server with Node.js' 출력 확인

## 3. 소스 코드 해석

0. 필요 지식: HTML5, JavaScript ES6 (ECMA Script 2015)

1. const http = require('http')

   - http 모듈 불러오기 및 http 상수 선언

2. http.createServer(requestListener)

   - http 서버 생성

3. requestListener

   - 콜백 함수

   - http 서버 동작 정의

4. req.method

   - 요청 REST Method

5. req.url

   - 요청 URL

6. res.writeHead(statusCode, headers)

   - 응답 헤더

7. statusCode

   - 응답 상태 코드
   - https://developer.mozilla.org/ko/docs/Web/HTTP/Status

8. headers

   - 응답 정의

9. res.end()

   - 응답 데이터

10. listen(port, callback)

    - HTTP 서버 시작

11. port

    - 서버 포트 정의

12. callback

    - 콜백 함수
