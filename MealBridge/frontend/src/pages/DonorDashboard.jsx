import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function DonorDashboard() {
  const [donations, setDonations] = useState([]);

  const totalDonations = donations.length;

  const requestedDonations = donations.filter(
    (d) => d.requestStatus === "Requested"
  ).length;

  const availableDonations =
    totalDonations - requestedDonations;

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

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div className="max-w-7xl mx-auto p-8">
        <h1
          className="text-5xl font-bold mb-2"
          style={{
            color: "var(--text-dark)",
          }}
        >
          Donor Dashboard
        </h1>

        <p
          className="mb-10"
          style={{
            color: "var(--text-muted)",
          }}
        >
          Track your donations and community impact.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            className="p-6 rounded-3xl shadow-sm"
            style={{
              backgroundColor: "var(--bg-card)",
            }}
          >
            <h3
              style={{
                color: "var(--text-muted)",
              }}
            >
              Total Donations
            </h3>

            <p
              className="text-4xl font-bold mt-2"
              style={{
                color: "var(--primary)",
              }}
            >
              {totalDonations}
            </p>
          </div>

          <div
            className="p-6 rounded-3xl shadow-sm"
            style={{
              backgroundColor: "var(--bg-card)",
            }}
          >
            <h3
              style={{
                color: "var(--text-muted)",
              }}
            >
              Available
            </h3>

            <p
              className="text-4xl font-bold mt-2"
              style={{
                color: "var(--secondary)",
              }}
            >
              {availableDonations}
            </p>
          </div>

          <div
            className="p-6 rounded-3xl shadow-sm"
            style={{
              backgroundColor: "var(--bg-card)",
            }}
          >
            <h3
              style={{
                color: "var(--text-muted)",
              }}
            >
              Requested
            </h3>

            <p
              className="text-4xl font-bold mt-2"
              style={{
                color: "var(--accent)",
              }}
            >
              {requestedDonations}
            </p>
          </div>
        </div>

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

              {donation.requestedBy && (
                <p
                  className="mt-4"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  🤝 Requested By: {donation.requestedBy}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DonorDashboard;