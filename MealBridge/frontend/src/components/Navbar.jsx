import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link
          to="/"
          className="text-3xl font-extrabold transition"
          style={{
            color: "var(--primary)",
          }}
        >
          MealBridge
        </Link>

        <div
          className="hidden md:flex items-center gap-8"
          style={{
            color: "var(--text-dark)",
          }}
        >
          <Link to="/" className="hover:opacity-70 transition">
            Home
          </Link>

          <Link
            to="/donate"
            className="hover:opacity-70 transition"
          >
            Donate Food
          </Link>

          <Link
            to="/donations"
            className="hover:opacity-70 transition"
          >
            Donations
          </Link>

          <Link
            to="/donor-dashboard"
            className="hover:opacity-70 transition"
          >
            Donor Dashboard
          </Link>

          <Link
            to="/receiver-dashboard"
            className="hover:opacity-70 transition"
          >
            Receiver Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border transition"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg font-semibold text-white transition"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;