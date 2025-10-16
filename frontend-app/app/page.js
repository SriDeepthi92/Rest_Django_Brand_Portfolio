// app/page.js

export default function HomePage() {
  return (
    <>
      {/* ───── HERO SECTION ───── */}
<section
        className="hero-section relative"
        style={{
          backgroundImage: "url('/rug-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl lg:text-7xl font-heading text-white mb-6">
            Timeless Rugs, Modern Interiors
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg">
            Handcrafted with passion and heritage — for homes that appreciate elegance.
          </p>
          <a className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full">
            Explore Collection
          </a>
        </div>
      </section>

      {/* ───── FEATURE SECTIONS ───── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/rugs/feature1.png"
              alt="Craftsmanship"
              className="rounded-2xl shadow-lg w-full"
            />
            <div>
              <h2 className="text-4xl font-semibold mb-4 font-heading">
                Exceptional Craftsmanship
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every rug we create is the result of years of artistry, skill, and
                dedication.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2">
              <img
                src="/rugs/feature2.png"
                alt="Design Variety"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-4xl font-semibold mb-4 font-heading">
                Timeless Design Variety
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you love minimalism or bold tradition, our collections reflect
                styles that never fade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
