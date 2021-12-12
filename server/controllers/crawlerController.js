import request from "request";

export const bot = (req, res) => {
    request('http://127.0.0.1:5050/', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        /* console.log('body:', body); */ // Print the data received
        res.send(body); //Display the response on the website
      });
};
