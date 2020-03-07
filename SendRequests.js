var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var FormData = require('form-data');

/*
const sendRequest = new XMLHttpRequest();
const url = 'https://ta.yrdsb.ca/live/index.php';
sendRequest.open('POST', url, false);

var formData = new FormData();
formData.append('subject_id', '0');
formData.append('username', 'USE');
formData.append('password', 'PAS');
formData.append('submit', 'Login');

sendRequest.send(formData);

sendRequest.onreadystatechange = e => {
  console.log(sendRequest.responseText);
};

 */

/*

function SendRequest() {
  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', 'https://ta.yrdsb.ca/live/index.php', false);

  var formData = new FormData();
  formData.append('subject_id', '0');
  formData.append('username', '335525291');
  formData.append('password', '6rx8836f');
  formData.append('submit', 'Login');

  console.log(formData);

  request.send(formData);
  console.log(request.response);

};

SendRequest();
*/
function testy() {
  var request = new XMLHttpRequest();
  // POST to httpbin which returns the POST data as JSON
  request.open('POST', 'https://httpbin.org/post', /* async = */ false);

  var formData = new FormData();
  formData.append('key1', 'value1');
  formData.append('key2', 'value2');

  request.send(formData);
  console.log(request.response);
};

testy();
