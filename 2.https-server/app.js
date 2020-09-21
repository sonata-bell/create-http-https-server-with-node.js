const https = require('https');
const fs = require('fs');

https
  .createServer(
    {
      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [fs.readFileSync('상위 인증서 경로')],
    },
    (req, res) => {
      console.log();
      console.log(`요청 메서드: ${req.method}`);
      console.log(`요청 주소: ${req.url}`);

      // TODO: 요청 메서드 및 주소에 따른 알고리즘 추가
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('4433 포트 HTTPS Server with Node.js');
    }
  )
  .listen(4433, () => {
    console.log('4433번 포트에서 서버 대기 중...');
  });
