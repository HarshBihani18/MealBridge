import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function DonateFood() {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    location: "",
    expiryTime: "",
    donorName: "",
    donorEmail: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/donations",
        formData
      );

      alert("Donation Added Successfully!");

      setFormData({
        foodName: "",
        quantity: "",
        location: "",
        expiryTime: "",
        donorName: "",
        donorEmail: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add donation");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="p-10 rounded-3xl shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h1
            className="text-4xl font-bold text-center mb-3"
            style={{
              color: "var(--text-dark)",
            }}
          >
            Donate Food
          </h1>

          <p
            className="text-center mb-8"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Share surplus food and help reduce waste while supporting communities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Food Name"
              value={formData.foodName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  foodName: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  quantity: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  location: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Expiry Time"
              value={formData.expiryTime}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  expiryTime: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="text"
              placeholder="Donor Name"
              value={formData.donorName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  donorName: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="email"
              placeholder="Donor Email"
              value={formData.donorEmail}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  donorEmail: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <button
              type="submit"
              className="w-full p-4 rounded-xl text-white font-semibold transition"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              Submit Donation
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DonateFood;