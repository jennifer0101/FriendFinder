var friendsData = require("../data/friends");

//GET route to display JSON of all possible friends
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        //loop through new entry
        var newEntry = req.body;
        var newScoreArray = [];
        for (var i = 0; i < newEntry.scores.length; i++) {
            newScoreArray.push(parseInt(req.body.scores[i]))
        }
        req.body.scores = newScoreArray;

        //loop through friends array
        var compareFriendsArray = [];
        for (var i = 0; i < friendsData.length; i++) {
            var totalVariance = 0;
            //loop through scores to compare friends
            for (var j = 0; j < matchFriend.scores.length; j++) {
                var totalVariance = Math.abs(matchFriend[i].score[j] - parseInt(newEntry.scores[j]));
            }
            //push result into totalVariance array
            compareFriendsArray.push(totalVariance);
        }

        //find best match
        for (var i = 0; i < compareFriendsArray.length; i++) {
            if (compareFriendsArray[i] <= totalVariance[bestFriend]) {
                bestFriend = i;
            }
        }

        //return the best match
        var theVeryBestest = friendsData[bestMatch];
        res.json(theVeryBestest);

        //push new submission to freinds array
        friendsData.push(req.body);
    }

    )
};