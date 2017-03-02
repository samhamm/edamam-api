const express = require('express');
// Added the following line to bring in the dependency
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

// handles the route for our AJAX request to Edamam
app.get('/edamam/*', proxyEdamam);

function proxyEdamam(request, response) {
  console.log('Routing a Edamam request');
  (requestProxy({
    url: `https://api.edamam.com/search`,
    headers: {
      app_id: 'ID',
      app_key: 'KEY'}
  }))(request, response);
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
