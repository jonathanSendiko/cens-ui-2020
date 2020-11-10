const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  teamName: { type: String, required: true, unique: true },
  university: { type: String, required: true },
  country: { type: String, required: true },
  teamCaptain: { type: String, required: true },
  captainEmail: { type: String, required: true, unique: true },
  captainNumber: { type: Number, required: true },
  member1: { type: String, required: true },
  member2: { type: String, required: true },
});

mongoose.model("participant", participantSchema);

module.exports = Participant = mongoose.model("participant", participantSchema);
