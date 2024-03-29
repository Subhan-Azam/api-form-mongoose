const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
  },
},{timestamps:true});

export default mongoose.models.user || mongoose.model("user", userSchema);
