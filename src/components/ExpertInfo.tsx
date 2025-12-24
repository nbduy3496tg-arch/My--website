interface ExpertInfoProps {
  icon: string;
  label: string;
  value: string;
  isEmail?: boolean;
}

export function ExpertInfo({ icon, label, value, isEmail = false }: ExpertInfoProps) {
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 bg-gray-50 rounded-xl">
      <span className="text-xl md:text-2xl flex-shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1">
        <p className="text-sm md:text-base text-gray-600 font-medium">{label}</p>
        {isEmail ? (
          <a 
            href={`mailto:${value}`}
            className="text-base md:text-lg text-blue-600 hover:text-blue-700 font-semibold"
          >
            {value}
          </a>
        ) : (
          <p className="text-base md:text-lg text-gray-800 font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
}
