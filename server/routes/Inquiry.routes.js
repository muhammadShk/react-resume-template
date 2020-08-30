const inquiryController = require("../controllers/Inquiry.controller");
const {authenticate} = require('../config/jwt.config');


module.exports = function(app){
    app.get("/api/inquiry",  inquiryController.list);
    app.post("/api/inquiry", inquiryController.create);

    // below routes are unnecessary for the resume app 
    // app.get("/api/inquiry/:id", inquiryController.detail);
    // app.put("/api/inquiry/:id", inquiryController.update);
    app.delete("/api/inquiry/:id", inquiryController.delete);
}