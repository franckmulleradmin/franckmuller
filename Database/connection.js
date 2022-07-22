const mongoose = require("mongoose");
// "mongodb+srv://ditechabdul:ditechabdul@frunckmuller.ugjjj.mongodb.net/frunckmuller";
var uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.l5tp4.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected Successfuly");
  })
  .catch((err) => {
    console.log(err, "COnnection Failed");
  });
