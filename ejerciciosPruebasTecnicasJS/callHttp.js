//const fetch = require('fetch');

// con https

const https = require('https');

function getUrl(){
    https.get('https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000', (res) => {
  //console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
}

let result = getUrl();

console.log(typeof result);