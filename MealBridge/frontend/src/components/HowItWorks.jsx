import {
  FaHandHoldingHeart,
  FaClipboardCheck,
  FaUtensils,
} from "react-icons/fa";

function HowItWorks() {
  return (
    <section
      className="max-w-7xl mx-auto px-8 py-24"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div className="text-center mb-16">
        <h2
          className="text-5xl font-bold mb-4"
          style={{
            color: "var(--text-dark)",
          }}
        >
          How MealBridge Works
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg"
          style={{
            color: "var(--text-muted)",
          }}
        >
          A simple process that transforms surplus food into meaningful
          community impact.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div
          className="p-10 rounded-3xl text-center shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "var(--primary-light)",
            }}
          >
            <FaHandHoldingHeart
              className="text-4xl"
              style={{
                color: "var(--primary)",
              }}
            />
          </div>

          <h3
            className="text-2xl font-bold mb-3"
            style={{
              color: "var(--text-dark)",
            }}
          >
            Donate Food
          </h3>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            Restaurants, hostels, events and households share surplus food
            that would otherwise be wasted.
          </p>
        </div>

        <div
          className="p-10 rounded-3xl text-center shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "#FFF3DD",
            }}
          >
            <FaClipboardCheck
              className="text-4xl"
              style={{
                color: "var(--secondary)",
              }}
            />
          </div>

          <h3
            className="text-2xl font-bold mb-3"
            style={{
              color: "var(--text-dark)",
            }}
          >
            Request Food
          </h3>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            NGOs and receivers browse available donations and request the
            food they need.
          </p>
        </div>

        <div
          className="p-10 rounded-3xl text-center shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
          }}
        >
          <div
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "#EEF7E4",
            }}
          >
            <FaUtensils
              className="text-4xl"
              style={{
                color: "var(--accent)",
              }}
            />
          </div>

          <h3
            className="text-2xl font-bold mb-3"
            style={{
              color: "var(--text-dark)",
            }}
          >
            Feed Communities
          </h3>

          <p
            style={{
              color: "var(--text-muted)",
            }}
          >
            Surplus meals reach people who need them, reducing waste and
            creating real social impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;