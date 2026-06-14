import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      localStorage.setItem(
        "mealbridgeUser",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful!");

      if (res.data.user.role === "Donor") {
        navigate("/donor-dashboard");
      } else {
        navigate("/receiver-dashboard");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
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
            Welcome Back
          </h1>

          <p
            className="text-center mb-8"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Login to continue your MealBridge journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <button
              type="submit"
              className="w-full p-4 rounded-xl text-white font-semibold"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;