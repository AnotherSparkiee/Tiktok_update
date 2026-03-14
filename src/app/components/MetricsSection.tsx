import { Info } from 'lucide-react';
import { InfoIcon } from '@/app/components/InfoIcon';

export function MetricsSection() {
  return (
    <div className="px-3 pt-6 pb-0">
      <div className="flex items-center gap-0.5 mb-0">
        <h2 className="text-white text-lg font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>Основные метрики</h2>
        <InfoIcon />
      </div>
      <p className="text-neutral-400 text-[13px] mb-5" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 500 }}>Обновлено 28.01.2026.</p>
      
      <div className="grid grid-cols-2 gap-1.5">
        <div className="bg-[#1d2226] rounded-lg p-3.5 border border-[#2d6aa0] flex flex-col justify-between min-h-[100px]">
          <p className="text-white text-sm" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>Просмотры видео</p>
          <p className="text-white text-2xl mt-auto" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600 }}>1116</p>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-3.5 border border-neutral-700 flex flex-col justify-between min-h-[100px]">
          <p className="text-white text-sm leading-tight" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>Общая продолжительность просмотра</p>
          <p className="text-white mt-auto whitespace-nowrap" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600, fontSize: '18px' }}>4 ч.:50 мин.:21 с.</p>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-3.5 border border-neutral-700 flex flex-col justify-between min-h-[100px]">
          <p className="text-white text-sm" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>Среднее время просмотра</p>
          <p className="text-white text-2xl mt-auto" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600 }}>89.8 с.</p>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-3.5 border border-neutral-700 flex flex-col justify-between min-h-[100px]">
          <p className="text-white text-sm" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>Просмотрели видео полностью</p>
          <p className="text-white text-2xl mt-auto" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600 }}>4.12%</p>
        </div>
        
        <div className="bg-neutral-800 rounded-lg p-3.5 border border-neutral-700 flex flex-col justify-between min-h-[100px]">
          <p className="text-white text-sm" style={{ fontFamily: 'Proxima Nova, sans-serif', fontWeight: 400 }}>Новые подписчики</p>
          <p className="text-white text-2xl mt-auto" style={{ fontFamily: 'TikTok Sans, sans-serif', fontWeight: 600 }}>0</p>
        </div>
      </div>
    </div>
  );
}