import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-card)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color: "var(--primary)",
              }}
            >
              MealBridge
            </h2>

            <p
              style={{
                color: "var(--text-muted)",
              }}
            >
              Connecting surplus food with communities,
              reducing waste, and supporting Sustainable
              Development Goal 12.
            </p>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              style={{
                color: "var(--text-dark)",
              }}
            >
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Home
              </Link>

              <Link
                to="/donate"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Donate Food
              </Link>

              <Link
                to="/donations"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                Browse Donations
              </Link>
            </div>
          </div>

          <div>
            <h3
              className="font-semibold mb-4"
              style={{
                color: "var(--text-dark)",
              }}
            >
              Impact
            </h3>

            <div
              className="space-y-2"
              style={{
                color: "var(--text-muted)",
              }}
            >
              <p>🍛 Reduce Food Waste</p>
              <p>🤝 Support Communities</p>
              <p>🌱 Promote Sustainability</p>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-sm border-t"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          © 2026 MealBridge • Every Meal Counts.
        </div>
      </div>
    </footer>
  );
}

export default Footer;