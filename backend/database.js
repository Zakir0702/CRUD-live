const mongoose = require("mongoose");
async function dbConn() {
  const conn = await mongoose.connect(
    "mongodb+srv://zakir0702:zakir@cluster0.s8jd0e4.mongodb.net/crud-live-cse-c?retryWrites=true&w=majority&appName=Cluster0"
  );
  if (conn) {
    console.log("database connect successfully");
  } else {
    console.log("connection fail");
  }
}
module.exports = dbConn;
