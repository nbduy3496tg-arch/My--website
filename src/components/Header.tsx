export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center shadow-lg border-4 border-white/30">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-blue-700">D</span>
                <span className="text-3xl md:text-4xl font-bold text-blue-800">U</span>
                <span className="text-3xl md:text-4xl font-bold text-blue-700">Y</span>
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-lg md:text-xl font-semibold text-blue-100 mb-1">
              BÁC SĨ THÚ Y BẠN CỦA MỌI NHÀ
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              TƯ VẤN VỀ CÁC GIỐNG CHÓ VÀ CÁCH CHĂM SÓC PHÒNG BỆNH TRÊN CHÓ
            </h2>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-5">
          <p className="text-base md:text-lg text-center text-blue-50 leading-relaxed">
            🌾 Nhập điều kiện chăn nuôi thực tế của gia đình bạn, hệ thống sẽ đề xuất giống heo phù hợp nhất – 
            <span className="font-semibold"> dễ nuôi, ít bệnh, hiệu quả kinh tế cao</span>.
          </p>
        </div>
      </div>
    </header>
  );
}
