var http = require('http');
var cookie = require('cookie');
http.createServer(function (req, res) {
    var cookies = {};
    if (req.headers.cookie !== undefined) {
        var cookies = cookie.parse(req.headers.cookie);
    }
    console.log(cookies);
    res.writeHead(200, {
        'Set-Cookie': [
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age=${60*60*24}`,
            'Secure=Secure; Secure',
            'HttpOnly=HttpOnly; HttpOnly',
            'Path=Path; Path=/cookie',
            'Domain=Domain; Domain=o2.org'
        ]
    });
    res.end('Cookie!!');
}).listen(3000);