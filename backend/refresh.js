const axios = require("axios");
require("dotenv").config();

var options = {
  method: 'POST',
  url: 'https://oauth2.googleapis.com/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: process.env.GOOGLE_GRANT_CODE,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    code: process.env.GOOGLE_CODE,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).then(data=>console.log(data))
.catch(function (error) {
  console.error(error);
});