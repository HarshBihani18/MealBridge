import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-8 py-24 text-center"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div
        className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-8"
        style={{
          backgroundColor: "var(--primary-light)",
          color: "var(--primary)",
        }}
      >
        🌍 Supporting Sustainable Development Goal 12
      </div>

      <h1
        className="text-6xl font-bold leading-tight"
        style={{
          color: "var(--text-dark)",
        }}
      >
        Every Meal Counts.
        <br />
        Every Donation Matters.
      </h1>

      <p
        className="mt-8 text-xl max-w-3xl mx-auto leading-relaxed"
        style={{
          color: "var(--text-muted)",
        }}
      >
        Millions of people face food insecurity while perfectly edible food
        is discarded every day. MealBridge helps restaurants, households,
        events and NGOs connect surplus food with communities that need it.
      </p>

      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <Link
          to="/donate"
          className="px-7 py-3 rounded-xl font-semibold text-white transition"
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          Donate Food
        </Link>

        <Link
          to="/donations"
          className="px-7 py-3 rounded-xl font-semibold border"
          style={{
            borderColor: "var(--secondary)",
            color: "var(--secondary)",
            backgroundColor: "white",
          }}
        >
          Find Donations
        </Link>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        <div
          className="p-8 rounded-3xl shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h3
            className="text-4xl font-bold"
            style={{
              color: "var(--primary)",
            }}
          >
            1,250+
          </h3>

          <p
            className="mt-3"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Meals Shared
          </p>
        </div>

        <div
          className="p-8 rounded-3xl shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h3
            className="text-4xl font-bold"
            style={{
              color: "var(--accent)",
            }}
          >
            520+
          </h3>

          <p
            className="mt-3"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Families Helped
          </p>
        </div>

        <div
          className="p-8 rounded-3xl shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h3
            className="text-4xl font-bold"
            style={{
              color: "var(--secondary)",
            }}
          >
            320kg
          </h3>

          <p
            className="mt-3"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Food Waste Prevented
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;