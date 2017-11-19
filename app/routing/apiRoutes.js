




// Your apiRoutes.js file should contain two routes:
module.exports = function(app) {

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
var userData = require("../data/friends")

app.get("/api/friends", function(req, res) {
    res.json(friends);
})

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


app.post("/api/friends", function(req, res) {

  userData.push(req.body);


//if(sum )  --need to finish

for(var i = 0; i <userData.length; i++){
  scores = userData[i].scores;

  var sum = scores.reduce(add, 0);
  function add(a, b) {
    return a + b;
  }
  console.log("sum results " + sum)
 //console.log("userdata scores VALUE i " + scores);
}
//console.log("userdata scores " + userData[0].scores);




 


    });
  };