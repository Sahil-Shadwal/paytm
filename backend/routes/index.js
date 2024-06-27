const express = require('express');

const router = express.Router();

module.exports = router;

//* This follows the Node.js convention of error-first callbacks, where the first argument to the callback is reserved for an error object, and subsequent arguments represent successful response 
//? The callback function is passed three arguments: the request, the response, and the next middleware function in the application’s request-response cycle.

// app.listen(3000, function(err){
//     if(err){
//         console.log('Error in running the server');
//     }
//     console.log('Server is running on port', 3000);
// })
