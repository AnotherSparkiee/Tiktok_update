import { Info } from 'lucide-react';
import { InfoIcon } from '@/app/components/InfoIcon';

export function TrafficSourcesSection() {
  const sources = [
    { name: 'Для вас', percentage: 89.2 },
    { name: 'Личный профиль', percentage: 7.2 },
    { name: 'Звук', percentage: 2.1 },
    { name: 'Другое', percentage: 1.5 },
    { name: 'Подписки', percentage: 0.0 },
    { name: 'Поиск', percentage: 0.0 }
  ];

  return (
    <div className="px-3 py-6 bg-neutral-800 mx-3 rounded-[6px] mb-6">
      <div className="flex items-center gap-0.5 mb-4">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>Источники трафика</h2>
        <InfoIcon />
      </div>
      
      <div className="space-y-4">
        {sources.map((source, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-normal" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>{source.name}</span>
              <span className="text-white font-medium">{source.percentage}%</span>
            </div>
            <div className="w-full h-2.5 bg-neutral-700 rounded-[1px] overflow-hidden">
              <div 
                className="h-full rounded-[1px]"
                style={{ width: `${source.percentage}%`, backgroundColor: '#5eb3f6' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}