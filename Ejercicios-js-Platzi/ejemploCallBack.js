const https = require('https');

function getUserData(userId, callback) {
  https.get(`https://jsonplaceholder.typicode.com/users/${userId}`, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      callback(JSON.parse(data));
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
}

function displayUserData(data) {
  console.log(data.name);
}

getUserData(2, displayUserData);
