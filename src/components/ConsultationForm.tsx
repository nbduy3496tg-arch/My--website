import { useState } from 'react';

interface ConsultationFormProps {
  onConsult: (conditions: any) => void;
}

export function ConsultationForm({ onConsult }: ConsultationFormProps) {
  const [climate, setClimate] = useState<'hot' | 'cold' | 'temperate'>('hot');
  const [facility, setFacility] = useState<'family' | 'medium' | 'farm'>('family');
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>('low');
  const [priority, setPriority] = useState<'easy' | 'fast' | 'longterm'>('easy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConsult({ climate, facility, budget, priority });
  };

  return (
    <section id="consultation" className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-3">
            📋 Điền thông tin để nhận tư vấn
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Trả lời vài câu hỏi đơn giản để chúng tôi tìm giống heo phù hợp nhất với bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Climate Question */}
          <div className="space-y-3 md:space-y-4">
            <label className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-800">
              <span className="text-2xl">🌡️</span>
              <span>Khí hậu nơi bạn nuôi heo:</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'hot', label: 'Nóng / Ấm', icon: '☀️', desc: 'Như miền Nam, Đồng Tháp' },
                { value: 'cold', label: 'Lạnh / Mát', icon: '❄️', desc: 'Như miền Bắc mùa đông' },
                { value: 'temperate', label: 'Ôn hòa', icon: '🌤️', desc: 'Khí hậu dễ chịu' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setClimate(option.value as any)}
                  className={`p-4 md:p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                    climate === option.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-base md:text-lg text-gray-800">{option.label}</p>
                      <p className="text-sm md:text-base text-gray-500">{option.desc}</p>
                    </div>
                  </div>
                  {climate === option.value && (
                    <div className="mt-2 text-blue-600 font-semibold text-sm">
                      ✓ Bạn chọn này
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Facility Question */}
          <div className="space-y-3 md:space-y-4">
            <label className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-800">
              <span className="text-2xl">🏠</span>
              <span>Điều kiện nuôi của bạn:</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'family', label: 'Hộ gia đình nhỏ', icon: '🏡', desc: 'Nuôi 1-5 con, sân nhỏ' },
                { value: 'medium', label: 'Hộ nuôi vừa', icon: '🏘️', desc: 'Nuôi 5-20 con, có chuồng' },
                { value: 'farm', label: 'Trang trại', icon: '🌾', desc: 'Nuôi nhiều, chuồng trại kiên cố' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFacility(option.value as any)}
                  className={`p-4 md:p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                    facility === option.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-base md:text-lg text-gray-800">{option.label}</p>
                      <p className="text-sm md:text-base text-gray-500">{option.desc}</p>
                    </div>
                  </div>
                  {facility === option.value && (
                    <div className="mt-2 text-blue-600 font-semibold text-sm">
                      ✓ Bạn chọn này
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Question */}
          <div className="space-y-3 md:space-y-4">
            <label className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-800">
              <span className="text-2xl">💰</span>
              <span>Ngân sách cho con giống:</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'low', label: 'Thấp', icon: '💵', desc: 'Dưới 1 triệu đồng/con' },
                { value: 'medium', label: 'Trung bình', icon: '💵💵', desc: '1 - 3 triệu đồng/con' },
                { value: 'high', label: 'Cao', icon: '💵💵💵', desc: 'Trên 3 triệu đồng/con' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBudget(option.value as any)}
                  className={`p-4 md:p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                    budget === option.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-base md:text-lg text-gray-800">{option.label}</p>
                      <p className="text-sm md:text-base text-gray-500">{option.desc}</p>
                    </div>
                  </div>
                  {budget === option.value && (
                    <div className="mt-2 text-blue-600 font-semibold text-sm">
                      ✓ Bạn chọn này
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Priority Question */}
          <div className="space-y-3 md:space-y-4">
            <label className="flex items-center gap-2 text-lg md:text-xl font-bold text-gray-800">
              <span className="text-2xl">🎯</span>
              <span>Kế hoạch nuôi của bạn:</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'easy', label: 'Dễ nuôi, ít bệnh', icon: '✅', desc: 'Phù hợp người mới' },
                { value: 'fast', label: 'Phát triển nhanh', icon: '📈', desc: 'Hiệu quả sớm' },
                { value: 'longterm', label: 'Đầu tư lâu dài', icon: '🏆', desc: 'Nuôi giống chất lượng' }
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value as any)}
                  className={`p-4 md:p-5 rounded-xl border-2 transition-all duration-300 text-left ${
                    priority === option.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl">{option.icon}</span>
                    <div>
                      <p className="font-bold text-base md:text-lg text-gray-800">{option.label}</p>
                      <p className="text-sm md:text-base text-gray-500">{option.desc}</p>
                    </div>
                  </div>
                  {priority === option.value && (
                    <div className="mt-2 text-blue-600 font-semibold text-sm">
                      ✓ Bạn chọn này
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl md:text-2xl px-8 py-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <span className="text-2xl md:text-3xl">👉</span>
              <span>TƯ VẤN CÙNG BÁC SĨ THÚ Y</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
