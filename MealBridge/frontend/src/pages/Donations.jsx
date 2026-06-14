import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/donations"
      );

      setDonations(res.data.donations);
    } catch (error) {
      console.error(error);
    }
  };

  const requestFood = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/donations/request/${id}`,
        {
          requestedBy: JSON.parse(
            localStorage.getItem("mealbridgeUser")
          ).name,
        }
      );

      alert("Food Requested Successfully!");
      fetchDonations();
    } catch (error) {
      console.error(error);
      alert("Request Failed");
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div className="max-w-7xl mx-auto p-8">
        <h1
          className="text-5xl font-bold text-center mb-3"
          style={{
            color: "var(--text-dark)",
          }}
        >
          Available Donations
        </h1>

        <p
          className="text-center mb-12"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Browse available food donations and request what your community needs.
        </p>

        {donations.length === 0 ? (
          <p
            className="text-center"
            style={{
              color: "var(--text-muted)",
            }}
          >
            No donations available.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.map((donation) => (
              <div
                key={donation._id}
                className="p-6 rounded-3xl shadow-sm"
                style={{
                  backgroundColor: "var(--bg-card)",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: "var(--text-dark)",
                  }}
                >
                  {donation.foodName}
                </h2>

                <div
                  className="space-y-2"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  <p>📦 Quantity: {donation.quantity}</p>
                  <p>📍 Location: {donation.location}</p>
                  <p>⏰ Expiry: {donation.expiryTime}</p>
                </div>

                {donation.requestedBy && (
                  <p
                    className="mt-3"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    🤝 Requested By: {donation.requestedBy}
                  </p>
                )}

                <div className="mt-5">
                  <span
                    className="px-3 py-2 rounded-xl font-semibold"
                    style={{
                      backgroundColor:
                        donation.requestStatus === "Requested"
                          ? "#EEF7E4"
                          : "#FFF3DD",
                      color:
                        donation.requestStatus === "Requested"
                          ? "var(--accent)"
                          : "var(--secondary)",
                    }}
                  >
                    {donation.requestStatus}
                  </span>
                </div>

                {donation.requestStatus === "Requested" ? (
                  <div
                    className="mt-5 p-3 rounded-xl text-center font-semibold"
                    style={{
                      backgroundColor: "#EEF7E4",
                      color: "var(--accent)",
                    }}
                  >
                    ✓ Requested
                  </div>
                ) : (
                  <button
                    onClick={() => requestFood(donation._id)}
                    className="mt-5 w-full p-3 rounded-xl font-semibold text-white transition"
                    style={{
                      backgroundColor: "var(--primary)",
                    }}
                  >
                    Request Food
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Donations;