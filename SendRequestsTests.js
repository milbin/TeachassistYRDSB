var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function sendRequest() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function(event) {
    console.log(this.responseText);
    console.log(xhr.responseURL);
  });

  xhr.open(
    'POST',
    'https://ta.yrdsb.ca/live/index.php?subject_id=0&username=335525291&password=6rx8836f&submit=Login',
    false,
  );
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send();
}

sendRequest();
