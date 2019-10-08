
var freinds = require("/../api/friends");

//GET route to display JSON of all possible friends
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
}

function generateDiff(); {
    
}

app.post("/../api/friends", function(req,res){
    var savedName = "";
    var savedPic = "";
    var savedDiff = "";
    for (var i = 0; i < friends.length; i++){
        var ans = generateDiff();
        if (ans < savedDiff) {
            savedDiff = ans;
            savedPic=person.photo;
            savedName=person.name;
        }
    }
}
//POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//loop through freinds

//math

//store result

//end of loop, array of all results. pick the highest as the best match.

//return that person





// app.post("/api/friends", function(req, res){

// })

//res.json(friends);