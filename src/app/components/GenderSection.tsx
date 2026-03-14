export function GenderSection() {
  const malePercentage = 42;
  const femalePercentage = 58;
  const otherPercentage = 0;
  
  // Рассчитываем углы для кругового графика (donut chart)
  const total = 100;
  const maleAngle = (malePercentage / total) * 360;
  const femaleAngle = (femalePercentage / total) * 360;
  
  return (
    <div className="mx-4 mb-3 bg-neutral-800 rounded-[6px] p-4">
      <h2 className="text-base font-bold mb-4" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
        Пол
      </h2>
      
      {/* Donut Chart */}
      <div className="flex justify-center mb-4">
        <svg width="300" height="160" viewBox="0 0 300 160">
          {/* Мужской - голубой (42%) - 42% от 180° = 75.6° */}
          <path
            d="M 40 150 A 110 110 0 0 1 130 42 L 142 80 A 70 70 0 0 0 78 150 Z"
            fill="#5eb3f6"
            stroke="#000000"
            strokeWidth="2.5"
          />
          
          {/* Женский - серо-голубой (58%) - 58% от 180° = 104.4° */}
          <path
            d="M 130 42 A 110 110 0 0 1 260 150 L 222 150 A 70 70 0 0 0 142 80 Z"
            fill="#6b93b8"
            stroke="#000000"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      
      {/* Легенда */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#5eb3f6]"></div>
            <span className="text-sm text-neutral-300">Мужской</span>
          </div>
          <span className="text-sm font-semibold">{malePercentage}%</span>
        </div>
        
        <div className="h-px bg-neutral-700"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6b93b8]"></div>
            <span className="text-sm text-neutral-300">Женский</span>
          </div>
          <span className="text-sm font-semibold">{femalePercentage}%</span>
        </div>
        
        <div className="h-px bg-neutral-700"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
            <span className="text-sm text-neutral-300">Другое</span>
          </div>
          <span className="text-sm font-semibold">{otherPercentage}%</span>
        </div>
      </div>
    </div>
  );
}