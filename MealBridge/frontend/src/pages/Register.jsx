import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Donor",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful!");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Donor",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div className="max-w-md mx-auto px-4 py-16">
        <div
          className="p-8 rounded-3xl shadow-sm"
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
            Create Account
          </h1>

          <p
            className="text-center mb-8"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Join MealBridge and start making an impact.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  role: e.target.value,
                })
              }
              className="w-full p-4 rounded-xl border"
              style={{
                borderColor: "var(--border)",
              }}
            >
              <option>Donor</option>
              <option>Receiver</option>
            </select>

            <button
              type="submit"
              className="w-full p-4 rounded-xl text-white font-semibold"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;