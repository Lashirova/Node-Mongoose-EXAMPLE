const mongoose = require("mongoose");

const connectionURL = 'mongodb+srv://lachinAshirova:lachin_ashirova@cluster0.loww4.mongodb.net/users?retryWrites=true&w=majority'
;

mongoose.connect(connectionURL, {useNewUrlParser: true},
  (err)=>{
  if(!err) {
    console.log('Connection with MongoDB is Successfully established')
}
else {
    console.log('Connection with MongoDB is: '+ err)
}
  });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});



module.exports = mongoose;
