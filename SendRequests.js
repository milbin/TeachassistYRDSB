const fetch = require('node-fetch');
const {URLSearchParams} = require('url');

async function getSessionToken(username, password) {
  const params = new URLSearchParams();
  params.append('subject_id', '0');
  params.append('username', username);
  params.append('password', password);
  params.append('submit', 'Login');

  const response = await fetch('https://ta.yrdsb.ca/live/index.php', {
    method: 'POST',
    redirect: 'manual', // manual, *follow, error
    body: params,
  });

  let sessionToken = response.headers
    .get('set-cookie')
    .split('session_token=')[2]
    .split(';')[0];
  console.log(sessionToken);
  return sessionToken;
}

getSessionToken('335525291', '6rx8836f');
