const express = require("express");

const app = express();

app.use(express.static("Public"));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function(){
  console.log("server has started");
});
