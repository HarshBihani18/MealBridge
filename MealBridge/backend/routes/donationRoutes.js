const express = require("express");
const router = express.Router();

const Donation = require("../models/Donation");

// Create Donation
router.post("/", async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    res.status(201).json({
      success: true,
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Get All Donations
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find();

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Request Donation
router.put("/request/:id", async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(
      req.params.id,
      {
        requestedBy: req.body.requestedBy,
        requestStatus: "Requested",
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;