const axios = require('axios');

exports.handler = function (event, context, callback) {
  const isbn = event.queryStringParameters.isbn;
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  axios.get(url)
    .then(book => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(book.data)
      });
    })
    .catch(ex => callback(ex));
}