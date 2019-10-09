var path = require("path");

module.exports = function(app) {
//GET route to survey page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

//Default to home page if there is not matching route
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});
};



