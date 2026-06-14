const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
      required: true,
    },

    quantity: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    expiryTime: {
      type: String,
      required: true,
    },

    donorName: {
      type: String,
      required: true,
    },

    donorEmail: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Available",
    },

    requestedBy: {
      type: String,
      default: "",
    },

    requestStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);