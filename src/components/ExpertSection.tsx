import { ExpertInfo } from './ExpertInfo';

interface ExpertSectionProps {
  onStartConsultation?: () => void;
}

export function ExpertSection({ onStartConsultation: _ }: ExpertSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Expert Image */}
          <div className="lg:w-2/5 bg-gradient-to-br from-blue-100 to-white p-6 md:p-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center shadow-xl border-4 border-white">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl">👨‍⚕️</div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg">
                🐷
              </div>
            </div>
          </div>

          {/* Expert Info */}
          <div className="lg:w-3/5 p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
              🩺 Cố vấn chuyên môn
            </h2>

            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl">👤</span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800">
                    Bác sĩ thú y Nguyễn Bảo Duy
                  </h3>
                </div>
              </div>

              <ExpertInfo icon="🐖" label="Kinh nghiệm" value="5 năm làm việc thực tế tại phòng khám thú y" />
              <ExpertInfo icon="🏥" label="Nơi công tác" value="Bệnh xá thú y tại tỉnh Đồng Tháp" />
              <ExpertInfo icon="📊" label="Đề tài nghiên cứu" value="Điều trị bệnh cho chó" />
              <ExpertInfo icon="📧" label="Email liên hệ" value="nbduy3496tg@gmail.com" isEmail />
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center lg:text-left">
              <a 
                href="#consultation"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>👉</span>
                <span>BẮT ĐẦU TƯ VẤN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
