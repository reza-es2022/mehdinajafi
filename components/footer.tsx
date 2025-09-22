export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-3">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">درباره ما</h3>
          <p className="text-gray-400 leading-relaxed">
            بزرگترین شرکت کارشناسی خودرو با مدیریت مهندس مهدی نجفی. بیش از ۲۰
            سال سابقه، دارای مجوز رسمی اتحادیه، و استفاده از به‌روزترین تجهیزات
            کارشناسی.
          </p>
        </div>
        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">ارتباط با ما</h3>
          <ul className="space-y-2 mb-6">
            <li>📍 تهران، شرق تهران</li>
            <li>📞 ۰۹۱۲۷۶۴۹۶۲۲</li>
            <li>☎️ ۰۹۱۲۰۹۱۹۷۶۴</li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400">
              📘 اینستاگرام
            </a>
            <a href="#" className="hover:text-blue-400">
              💬 واتساپ
            </a>
            <a href="#" className="hover:text-blue-400">
              📺 تلگرام
            </a>
          </div>
        </div>
        {/* Map */}
        {/* Map Links */}
        <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-lg w-full max-w-sm">
          <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
            {/* Location Pin Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.656 0 3-1.343 3-3S13.656 5 12 5 9 6.343 9 8s1.344 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-7.333 8-14A8 8 0 1 0 4 8c0 6.667 8 14 8 14z"
              />
            </svg>
            آدرس و مسیریابی
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href={`https://neshan.org/maps/places/4d6058a0eb6c2eb62b029fbe563a8636#c35.655-51.493-15z-0p`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                {/* Google Maps Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <span>مسیریاب نشان</span>
              </a>
            </li>

            <li>
              <a
                href={`https://balad.ir/p/%D8%AA%D8%B4%D8%AE%DB%8C%D8%B5-%D8%B1%D9%86%DA%AF-%D9%86%D8%AC%D9%81%DB%8C-tehran-nei-_car-evaluation-center-PN8uYYTpzWTJNu`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
              >
                {/* Globe Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7H2.458z"
                  />
                </svg>
                <span>مسیریاب بلد</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} همیار خودرو – همه حقوق محفوظ است.
      </div>
    </footer>
  );
}
