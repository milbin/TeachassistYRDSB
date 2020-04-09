//const fetch = require('node-fetch');
//const {URLSearchParams} = require('url');
//const FormData = require('form-data');
import fetch from 'node-fetch';
import FormData from 'form-data';

async function sendHtmlPostRequest(url, params) {
  const formParams = new FormData();
  for (let param in params) {
    formParams.append(param, params[param]);
  }

  const response = await fetch(url, {
    method: 'POST',
    //redirect: 'error', // manual, *follow, error
    body: formParams,
  });

  return response;
}
module.exports = sendHtmlPostRequest;
