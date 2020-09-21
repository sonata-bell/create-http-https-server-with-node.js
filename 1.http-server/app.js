const http = require('http');

http
  .createServer((req, res) => {
    console.log();
    console.log(`요청 메서드: ${req.method}`);
    console.log(`요청 주소: ${req.url}`);

    // TODO: 요청 메서드 및 주소에 따른 알고리즘 추가
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('8080 포트 HTTP Server with Node.js');
  })
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중...');
  });
