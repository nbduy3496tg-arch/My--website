import { PigBreed } from '../types';

interface ResultsSectionProps {
  results: { breed: PigBreed; score: number }[];
  userConditions: any;
  onReset: () => void;
}

export function ResultsSection({ results, onReset }: ResultsSectionProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-blue-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Rất phù hợp';
    if (score >= 60) return 'Khá phù hợp';
    return 'Có thể phù hợp';
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-3">
          🎉 Kết quả tư vấn cho bạn
        </h2>
        <p className="text-base md:text-xl text-gray-600">
          Dựa trên điều kiện của bạn, đây là các giống heo phù hợp nhất:
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {results.map((result, index) => (
          <BreedResultCard 
            key={result.breed.id} 
            breed={result.breed} 
            score={result.score}
            getScoreColor={getScoreColor}
            getScoreLabel={getScoreLabel}
            index={index}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>🔄</span>
          <span>Tư vấn lại</span>
        </button>
        <a
          href="mailto:nbduy3496tg@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>📧</span>
          <span>Liên hệ bác sĩ thú y</span>
        </a>
      </div>

      {/* Additional Info */}
      <div className="mt-10 bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
          <span>💡</span>
          <span>Lưu ý quan trọng</span>
        </h3>
        <ul className="space-y-3 text-base md:text-lg text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Kết quả tư vấn dựa trên thông tin bạn cung cấp, hãy cân nhắc kỹ trước khi quyết định.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Nên tham khảo ý kiến bác sĩ thú y trước khi mua heo giống để đảm bảo sức khỏe.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Chọn mua heo giống tại cơ sở uy tín, có giấy tờ và đảm bảo tiêm phòng đầy đủ.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Chuẩn bị chuồng trại, thức ăn và kiến thức chăm sóc trước khi đón heo giống về.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span>Vệ sinh chuồng trại định kỳ, tiêm phòng đúng lịch để heo khỏe mạnh, ít bệnh.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

interface BreedResultCardProps {
  breed: PigBreed;
  score: number;
  getScoreColor: (score: number) => string;
  getScoreLabel: (score: number) => string;
  index: number;
}

function BreedResultCard({ breed, score, getScoreColor, getScoreLabel, index }: BreedResultCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
      index === 0 ? 'ring-4 ring-blue-400' : ''
    }`}>
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-white">
        <img 
          src={breed.image} 
          alt={breed.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
          <span className="text-6xl md:text-8xl">🐷</span>
        </div>
        {index === 0 && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <span>🏆</span>
            <span>Phù hợp nhất</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name and Score */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{breed.name}</h3>
            <p className="text-base text-gray-500">{breed.nameVn}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-blue-600">{score}%</div>
            <div className="text-sm font-semibold text-gray-500">{getScoreLabel(score)}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`${getScoreColor(score)} h-3 rounded-full transition-all duration-500`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <QuickStat icon="🌡️" text={breed.heatToleranceText} />
          <QuickStat icon="🦠" text={breed.diseaseResistanceText} />
          <QuickStat icon="📈" text={breed.growthRateText} />
          <QuickStat icon="💰" text={breed.costText} />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">
          {breed.description}
        </p>

        {/* Action Button */}
        <a
          href="mailto:nbduy3496tg@gmail.com?subject=Tư vấn chi tiết về giống heo ${breed.name}"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-center py-3 rounded-xl transition-all duration-300"
        >
          👉 Tư vấn thú y chi tiết
        </a>
      </div>
    </div>
  );
}

interface QuickStatProps {
  icon: string;
  text: string;
}

function QuickStat({ icon, text }: QuickStatProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
      <span className="text-lg md:text-xl">{icon}</span>
      <span className="text-xs md:text-sm text-gray-700 font-medium">{text}</span>
    </div>
  );
}
