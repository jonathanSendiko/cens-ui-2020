const express = require("express");
const Participant = require("../models/participantModel");

const router = express.Router();

router.get("/testing", async (req, res) => {
  try {
    const participant = new Participant({
      teamName: "Neodroid",
      university: "Universitas Indonesia",
      country: "Indonesia",
      teamCaptain: "Kevin",
      captainEmail: "Kevin@gmail.com",
      captainNumber: "085945644450",
      member1: "Saffan",
      member2: "Jonathan",
    });
    const newParticipant = await participant.save();
    res.send(newParticipant);
  } catch (error) {
    res.send({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    let {
      teamName,
      university,
      country,
      teamCaptain,
      captainEmail,
      captainNumber,
      member1,
      member2,
    } = req.body;

    //Making sure all fields are filled
    if (
      !teamName ||
      !university ||
      !country ||
      !teamCaptain ||
      !captainEmail ||
      !captainNumber ||
      !member1 ||
      !member2
    ) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }
    const existingEmail = await Participant.findOne({
      captainEmail: captainEmail,
    });
    const existingTeamName = await Participant.findOne({ teamName: teamName });
    //Validating uniqueness of participant
    if (existingEmail)
      return res
        .status(400)
        .json({ msg: "A Team using this email has been registered" });

    if (existingTeamName)
      return res
        .status(400)
        .json({ msg: "A Team using this name has been registered" });

    const newParticipant = new Participant({
      teamName,
      university,
      country,
      teamCaptain,
      captainEmail,
      captainNumber,
      member1,
      member2,
    });
    const registeredParticipant = await newParticipant.save();
    res.json(registeredParticipant);
  } catch (error) {
    res.send({ message: error.message });
  }
});
module.exports = router;
