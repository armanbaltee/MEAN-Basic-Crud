const express  = require("express");
const routes = express.Router();
const controller= require('../controller/user.controller');
const middleware = require('../middleware/user.middleware');

routes.get('/viewdata', controller.viewData);
routes.post('/insertdata', middleware.insertdata ,controller.insertdata);
routes.put('/updatedata/:email', middleware.updatedata, controller.updatedata)
routes.delete('/deletedata/:email', middleware.deletedata, controller.deletedata)


module.exports = routes;    