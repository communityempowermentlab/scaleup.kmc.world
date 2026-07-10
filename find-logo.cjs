const https = require('https');

https.get('https://www.celworld.org', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    const matches = data.match(/https:\/\/[^"']+(logo|Logo)[^"']*\.(png|jpg|svg|webp)/g);
    console.log(matches ? [...new Set(matches)] : 'No matches found');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
