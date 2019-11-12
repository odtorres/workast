/* Status Code Definitions 
    URL: https://www.w3.org/Protocols/rfc2616/rfc2616.html
*/

module.exports = {
    "OK":200,//The request has succeeded,
    "Created":201,//The request has been fulfilled and resulted in a new resource being created,
    "Bad Request":400,//The request could not be understood by the server due to malformed syntax,
    "Unauthorized":401,//The request requires user authentication,
    "Payment Required":402,//Payment Required,
    "Forbidden":403,//Forbidden,
    "Not Found":404,//The server has not found anything matching the Request-URI,
    "Method Not Allowed":405,//Unprocessable Entity,
    "Internal Server Error":500 ,//The server encountered an unexpected condition which prevented it from fulfilling the request
    "Not Implemented":501 ,//The server does not support the functionality required to fulfill the request.
}