export default function Features() {
  const features = [
    {
      title: "بزرگترین شرکت کارشناسی خودرو",
      desc: "با مدیریت مهندس مهدی نجفی، ۲۰ سال سابقه، دارای مجوز رسمی اتحادیه و کد رسمی.",
      icon: "🏆",
    },
    {
      title: "تشخیص و کارشناسی کامل",
      desc: "بررسی رنگ، بدنه، فنی، موتوری و گیربکس با دستگاه‌های دیجیتال و دیاگ تخصصی.",
      icon: "🔍",
    },
    {
      title: "مجهزترین تجهیزات روز",
      desc: "اتاق نور شرق تهران، جک بالابر، لامپ UV و اسکنر دیجیتال رنگ.",
      icon: "⚙️",
    },
    {
      title: "گزارش تضمینی و مشاوره خرید",
      desc: "ارائه برگه کارشناسی ۱۰۰٪ تضمینی با هولوگرام و مشاوره تخصصی خرید و فروش خودرو.",
      icon: "📄",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          چرا ما را انتخاب کنید؟
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
