const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://ak863928:Ashish%401999@cluster0.ijnegck.mongodb.net/Auth?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log(`Connected to MongoDB server`))
  .catch((error) =>
    console.log(`Connection Failed with MongoDB server.`, error)
  );
