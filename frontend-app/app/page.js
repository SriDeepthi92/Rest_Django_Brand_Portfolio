// app/page.js
export default function HomePage() {
  return (
     <main>
{/* ───── HERO SECTION ───── */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/rug-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6 lg:px-12">
          <h1 className="text-white text-5xl lg:text-7xl font-heading mb-6">
            Timeless Rugs, Modern Interiors
          </h1>
          <p className="text-white text-lg lg:text-xl mb-8 max-w-lg">
            Handcrafted with passion and heritage — for homes that appreciate elegance.
          </p>
          <a
            href="/collections"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg transition"
          >
            Explore Collection
          </a>
        </div>
      </section>

      {/* ───── FEATURE SECTIONS ───── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/rugs/feature1.png" alt="Craftsmanship" className="rounded-2xl shadow-lg w-full" />
            <div>
              <h2 className="text-4xl font-semibold mb-4 font-heading">Exceptional Craftsmanship</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every rug we create is the result of years of artistry, skill, and dedication.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2">
              <img src="/rugs/feature2.png" alt="Design Variety" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div className="md:order-1">
              <h2 className="text-4xl font-semibold mb-4 font-heading">Timeless Design Variety</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you love minimalism or bold tradition, our collections reflect styles that never fade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}