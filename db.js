const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/TP_5", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("DB connected !")
})
.catch(err => {
  console.error(err)
})