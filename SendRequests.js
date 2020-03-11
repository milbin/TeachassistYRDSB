var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function sendRequest(data) {
  console.log('sending request');

  const xhr = new XMLHttpRequest();

  let urlEncodedData = '',
    urlEncodedDataPairs = [],
    name;

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (name in data) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + '=' + encodeURIComponent(data[name]),
    );
  }

  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Define what happens on successful data submission
  xhr.addEventListener('load', function(event) {
    console.log(this.responseText);
  });

  xhr.open('POST', 'https://ta.yrdsb.ca/live/index.php', false);
  xhr.send(urlEncodedData);

  console.log(urlEncodedData);
}

sendRequest({
  subject_id: '0',
  username: '335525291',
  password: '6rx8836f',
  submit: 'Login',
});
