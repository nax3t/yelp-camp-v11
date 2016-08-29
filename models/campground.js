var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   created_at: { type: Date, default: Date.now },
   price: Number,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

// Getter
campgroundSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
campgroundSchema.path('price').set(function(num) {
  return num * 100;
});

module.exports = mongoose.model("Campground", campgroundSchema);