import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function ReceiverDashboard() {
  const [donations, setDonations] = useState([]);

  const totalRequests = donations.length;

  useEffect(() => {
    fetchRequestedDonations();
  }, []);

  const fetchRequestedDonations = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/donations"
      );

      const requested = res.data.donations.filter(
        (donation) => donation.requestStatus === "Requested"
      );

      setDonations(requested);
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
          Receiver Dashboard
        </h1>

        <p
          className="mb-10"
          style={{
            color: "var(--text-muted)",
          }}
        >
          View all food donations requested by receivers and NGOs.
        </p>

        <div className="mb-12">
          <div
            className="p-6 rounded-3xl shadow-sm max-w-sm"
            style={{
              backgroundColor: "var(--bg-card)",
            }}
          >
            <h3
              style={{
                color: "var(--text-muted)",
              }}
            >
              Total Requested Donations
            </h3>

            <p
              className="text-4xl font-bold mt-2"
              style={{
                color: "var(--accent)",
              }}
            >
              {totalRequests}
            </p>
          </div>
        </div>

        {donations.length === 0 ? (
          <div
            className="p-8 rounded-3xl text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              color: "var(--text-muted)",
            }}
          >
            No requested donations found.
          </div>
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
                    className="mt-4"
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
                      backgroundColor: "#EEF7E4",
                      color: "var(--accent)",
                    }}
                  >
                    Requested
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ReceiverDashboard;