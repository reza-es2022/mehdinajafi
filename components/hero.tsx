"use client";
export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">
          خیالت راحت! رنگ و بدنه خودرو زیر ذره‌بین ما
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-gray-600 mb-6">با مدیریت مهندس مهدی نجفی</p>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          {/* <a href="tel:+989127649622">
            
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
              رزرو نوبت
            </button>
          </a> */}
          <CallButton />

          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
          >
            اطلاعات بیشتر
          </button>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div
              dir="rtl"
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 my-8 p-6 text-right leading-relaxed max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="mb-6 border-b pb-4">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  ✅ بزرگترین شرکت تخصصی کارشناسی
                </h2>
                <p className="text-gray-600 mt-2">
                  ⭐️⭐️ <span className="font-semibold">همیار خودرو</span> —
                  شماره ثبت
                  <span className="font-bold"> 521405 </span> ⭐️⭐️
                </p>
              </div>

              {/* Body */}
              <div className="space-y-6 text-gray-800">
                {/* خدمات ویژه */}
                <section>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    خدمات ویژه
                  </h3>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>
                      ✳️ اعزام کارشناس سیار رسمی با 20 سال سابقه در کل تهران
                    </li>
                    <li>☀️ دارای اتاق نور شرق تهران + مجوز رسمی از اتحادیه</li>
                    <li>⚡️ مجهز به جک بالابر و لامپ UV</li>
                  </ul>
                </section>

                {/* مدیریت */}
                <section>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    مدیریت
                  </h3>
                  <p>
                    ✅ مدیریت توسط <strong>مهندس مهدی نجفی</strong>، با
                    سابقه‌ترین کارشناس خودرو تهران (کد رسمی، رتبه 1 مراکز خرید و
                    فروش خودرو، مدرک کارشناسی خودرو از دانشگاه شریف)
                  </p>
                </section>

                {/* موارد کارشناسی */}
                <section>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    موارد کارشناسی
                  </h3>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>⚜️ تشخیص رنگ، فنی، موتوری و گیربکس</li>
                    <li>⚜️ دیاگ تخصصی</li>
                    <li>
                      ❇️ ارائه برگه کارشناسی 100% تضمینی با هولوگرام و سربرگ
                      معتبر
                    </li>
                    <li>
                      ✔️ بازدید انواع خودروهای خارجی، ایرانی و موتورسیکلت‌ها
                    </li>
                    <li>✳️ بازدید بیش از ۴۲۰ نقطه خودرو</li>
                    <li>✅ مشاوره خرید و فروش خودرو</li>
                    <li>
                      ✅ بررسی رنگ‌شدگی، تصادف، تعویض، استوک، بتونه، چپی، دوتیکه
                    </li>
                  </ul>
                </section>

                {/* تجهیزات و بررسی‌ها */}
                <section>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    تجهیزات و بررسی‌ها
                  </h3>
                  <ul className="list-disc pr-5 space-y-1">
                    <li>☆ دستگاه‌های دیجیتال اسکنر رنگ به‌روز ☆</li>
                    <li>✔️ بررسی فنی و مکانیکی، گیربکس، جلوبندی</li>
                    <li>✔️ دیاگ تخصصی و برق + بررسی دقیق کیلومتر</li>
                    <li>✔️ بررسی اصالت و مدارک خودرو</li>
                    <li>✔️ قیمت‌گذاری و میزان افت قیمت پس از بازدید</li>
                    <li>✔️ بررسی دقیق آپشن‌ها</li>
                  </ul>
                </section>

                {/* آموزش */}
                <section>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">
                    آموزش
                  </h3>
                  <p>♻️ آموزش تخصصی کارشناسی خودرو</p>
                </section>
              </div>

              {/* Footer */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Visual */}
        <div className="mt-10">
          <img
            src="/hero.jpg"
            alt="Cybersecurity illustration"
            className="mx-auto w-96 rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

function CallButton() {
  const [showModal, setShowModal] = useState(false);
  const phone = "+989127649622";

  const handleClick = () => {
    if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
      // 📱 Mobile → open dialer
      window.location.href = `tel:${phone}`;
    } else {
      // 💻 Desktop → show modal
      setShowModal(true);
    }
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        رزرو نوبت
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              📞 شماره تماس
            </h2>
            <p className="text-gray-600 mb-4">
              لطفا برای ارسال کاشناس با این شماره تماس بگیرید.
            </p>
            <p className="mb-2">
              {" "}
              <span dir="ltr" className="font-bold ">
                {phone}
              </span>
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
