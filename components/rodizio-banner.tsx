export function RodizioBanner() {
  return (
    <section className="relative w-full overflow-hidden rounded-xl border-2 border-red-600 mx-auto max-w-5xl my-8 px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/foto.jpeg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center gap-3">
        <h2 className="text-6xl font-extrabold text-red-600 tracking-widest uppercase drop-shadow-lg">
          RODIZIO
        </h2>
        <p className="text-white text-xl font-semibold">
          Pizzas &amp; Esfihas a vontade
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <span className="bg-red-600 text-white font-bold text-lg px-6 py-2 rounded-full">
            R$ 49,90 por pessoa
          </span>
          <span className="text-white text-sm">
            Sex, Sab e Dom &mdash; 18h as 23h
          </span>
        </div>
      </div>
    </section>
  )
}
