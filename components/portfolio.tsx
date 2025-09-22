export default function Portfolio() {
  const jobs = [
    { src: "/hyundai.jpg", alt: "کارشناسی خودرو HYUNDAI" },
    { src: "/bmw.jpg", alt: "کارشناسی خودرو BMW" },
    { src: "/kmc.jpg", alt: "کارشناسی خودرو KMC" },

    { src: "/nissan.jpg", alt: "کارشناسی خودرو NISSAN" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          نمونه کارهای انجام شده
        </h2>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={job.src}
                alt={job.alt}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
