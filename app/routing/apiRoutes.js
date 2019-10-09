



var friends = require("../data/friends");

//GET route to display JSON of all possible friends
module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){

        var newEntry = req.body;

        function generateDiff() {
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
        }
    

    //     //grab array of new answers
    
    //     //compare to array of numbers from previous answers, friends api
    
    //     //compare one by one, always storing the lowest result
    
    //     //
        }
        var savedName = "";
        var savedPic = "";
        var savedDiff = "";
        for (var i = 0; i < friends.length; i++){
            var ans = generateDiff();
            if (ans < savedDiff) {
                savedDiff = ans;
                savedPic = person.photo;
                savedName = person.name;
            }
        }
        res.json(
            {
                name: savedName,
                pic: savedPic
            }
        );
    }

)};








//loop through freinds

//math

//store result

//end of loop, array of all results. pick the highest as the best match.

//return that person





// app.post("/api/friends", function(req, res){

// })

//res.json(friends);
