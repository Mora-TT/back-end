

const mongoose = require("mongoose");
const url = 'mongodb+srv://kaja:Kajanan1234@electro.u9gv5.mongodb.net/EasyMailDB?retryWrites=true&w=majority';

//to connect or create our database
mongoose.connect(url, { useUnifiedTopology : true, useNewUrlParser : true , }).then(async () => {
   
   console.log("Connection successful");
}).catch((e) => console.log("No connection"));



