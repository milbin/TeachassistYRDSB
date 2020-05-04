//  Copyright © 2020 Benjamin Tran and Sarah Tran. All rights reserved.

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
    // Get cookies as a request header string
    let taCookies = await CookieManager.get('https://ta.yrdsb.ca');
    let sessionToken = taCookies.session_token;
    return sessionToken;
  }

  async getTACourses(username, password) {
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

    let responseText;

    if (response == null) {
      return;
    } else {
      responseText = response.text().toString();
    }

    let courseNumber = 0;
    let i;
    console.log(responseText.split('<td>').toString); //FIXME: this is printing as an object? or when .toString used, undefined
    for (i in responseText.split('<td>')) {
      if (
        (i.includes('current mark = ') ||
          i.includes(
            'Please see teacher for current status regarding achievement in the course',
          ) ||
          i.includes('Click Here') ||
          i.includes('Level') ||
          i.includes('Block')) &&
        !i.includes('0000-00-00')
      ) {
        let courseName = i
          .split(':')[1]
          .split('<br>')[0]
          .trim();
        let roomNumber = i
          .split('rm. ')[1]
          .split('</td>')[0]
          .trim();
        let courseCode = i.split(' :')[0].trim();
      }
    }
  }
}
