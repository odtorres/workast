const HTTP_STATUS_CODE = require("./httpstatuscode")
const dotenv = require('dotenv');
dotenv.config();

const appSettings = {
  //api
  API_PORT: process.env.PORT?process.env.PORT:"4000",
  API_TOKEN: process.env.API_TOKEN,
  API_ENV: process.env.SITE_ENV ? process.env.SITE_ENV : "development",
  API_URL: "/api/v1",
  API_VERSION: 0,
  //db
  DB_NAME: process.env.DB_NAME ? process.env.DB_NAME :"workast",
  DB_URL: process.env.DB_URL ? process.env.DB_URL : "127.0.0.1:27017",
  //http code
  HTTP_STATUS_CODE: HTTP_STATUS_CODE,
  
};

module.exports = appSettings;
