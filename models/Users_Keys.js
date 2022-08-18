const mongoose = require("mongoose");

const cryptoUserInfoSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  privateKey: {
    required: true,
    type: String,
  },
  exchange: {
    required: true,
    type: String,
  },
  cryptoName: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Data", cryptoUserInfoSchema);
