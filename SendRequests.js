import fetch from 'node-fetch';

export async function getSessionToken(username, password) {
  console.log("heyyy");

  const params = new FormData(); //like FormData but for fetch
  params.append('subject_id', '0');
  params.append('username', username);
  params.append('password', password);
  params.append('submit', 'Login');

  const response = await fetch('https://ta.yrdsb.ca/live/index.php', {
    method: 'POST',
    redirect: 'manual', // manual, *follow, error
    body: params,
  });
  console.log(response.headers.get('set_cookie'));
  let sessionToken = response.headers
    .get('set-cookie')
    .split('session_token=')[2]
    .split(';')[0];
  console.log(sessionToken);
  return sessionToken;
}

//getSessionToken('335525291', '6rx8836f');
