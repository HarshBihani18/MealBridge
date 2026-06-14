function SDGSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-8 py-24"
      style={{
        backgroundColor: "var(--bg-page)",
      }}
    >
      <div
        className="rounded-3xl p-12 text-center"
        style={{
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="text-6xl mb-6">
          🌍
        </div>

        <h2
          className="text-4xl font-bold mb-6"
          style={{
            color: "var(--text-dark)",
          }}
        >
          Supporting Sustainable Development Goal 12
        </h2>

        <p
          className="text-lg max-w-3xl mx-auto leading-relaxed"
          style={{
            color: "var(--text-muted)",
          }}
        >
          MealBridge contributes to SDG 12:
          Responsible Consumption and Production.
          By reducing food waste and redistributing
          surplus meals, we help create a more
          sustainable and equitable community.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div>
            <h3
              className="text-3xl font-bold"
              style={{
                color: "var(--primary)",
              }}
            >
              🍛
            </h3>

            <p
              className="mt-3"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Reduce Food Waste
            </p>
          </div>

          <div>
            <h3
              className="text-3xl font-bold"
              style={{
                color: "var(--secondary)",
              }}
            >
              🤝
            </h3>

            <p
              className="mt-3"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Support Communities
            </p>
          </div>

          <div>
            <h3
              className="text-3xl font-bold"
              style={{
                color: "var(--accent)",
              }}
            >
              🌱
            </h3>

            <p
              className="mt-3"
              style={{
                color: "var(--text-muted)",
              }}
            >
              Build Sustainability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SDGSection;