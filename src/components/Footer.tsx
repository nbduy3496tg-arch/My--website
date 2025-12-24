export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🏥</span>
              <span>Về chúng tôi</span>
            </h3>
            <p className="text-blue-100 text-base leading-relaxed">
              Website tư vấn miễn phí về giống heo và cách chăm sóc, phòng bệnh. 
              Được xây dựng bởi bác sĩ thú y Nguyễn Bảo Duy với mong muốn hỗ trợ bà con nông dân 
              nuôi heo hiệu quả.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span>Liên hệ</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-xl">👨‍⚕️</span>
                <span>BS. Nguyễn Bảo Duy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📍</span>
                <span>Bệnh xá thú y, tỉnh Đồng Tháp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">📧</span>
                <a 
                  href="mailto:nbduy3496tg@gmail.com" 
                  className="text-blue-100 hover:text-white underline"
                >
                  nbduy3496tg@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🐷</span>
              <span>Dịch vụ</span>
            </h3>
            <ul className="space-y-2">
              <li>✓ Tư vấn chọn giống heo</li>
              <li>✓ Tư vấn chăm sóc heo</li>
              <li>✓ Hướng dẫn phòng bệnh</li>
              <li>✓ Điều trị bệnh cho vật nuôi</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-600 mt-8 pt-6 text-center">
          <p className="text-blue-200 text-base">
            © 2024 Bác Sĩ Thú Y Bạn Của Mọi Nhà. Được xây dựng với ❤️ cho bà con nông dân Việt Nam.
          </p>
        </div>
      </div>
    </footer>
  );
}
