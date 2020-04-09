import CookieManager from 'react-native-cookies';

const sendHtmlPostRequest = require('./SendRequests.js');

export default class ParseTA {
  async getSessionToken(username, password) {
    let params = {
      subject_id: '0',
      username: username,
      password: password,
      submit: 'Login',
    };
    let response = await sendHtmlPostRequest(
      'https://ta.yrdsb.ca/live/index.php',
      params,
    );
    //console.log(await response.text());
    // Get cookies as a request header string
    let taCookies = await CookieManager.get('https://ta.yrdsb.ca');
    let sessionToken = taCookies.session_token;
    return sessionToken;
  }
}

//let parseTA = new ParseTA();
//parseTA.getSessionToken('335525291', '6rx8836f');
