function Stats() {
  return (
    <section className="max-w-5xl mx-auto px-8 pb-20">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-green-400">1,250+</h2>
          <p className="text-slate-400 mt-2">Meals Shared</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-green-400">520+</h2>
          <p className="text-slate-400 mt-2">Families Helped</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 text-center">
          <h2 className="text-4xl font-bold text-green-400">320kg</h2>
          <p className="text-slate-400 mt-2">Food Waste Prevented</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;