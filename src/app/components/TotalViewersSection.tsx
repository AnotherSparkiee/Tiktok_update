import { InfoIcon } from '@/app/components/InfoIcon';
import { ArrowUpCircleIcon } from '@/app/components/ArrowUpCircleIcon';

export function TotalViewersSection() {
  return (
    <div className="mx-4 mt-3 mb-3 bg-neutral-800 rounded-[6px] p-4">
      <div className="flex items-center gap-0.5 mb-2">
        <h2 className="text-base font-bold" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
          Всего зрителей
        </h2>
        <InfoIcon />
      </div>
      <div className="text-4xl font-bold mb-1" style={{ fontFamily: 'TikTok Sans, sans-serif' }}>
        160
      </div>
      <div className="flex items-center gap-1 text-sm text-neutral-400">
        <div className="text-[#5eb3f6]">
          <ArrowUpCircleIcon />
        </div>
        <span><span className="text-[#5eb3f6]">+1</span> (в сравнении со вчерашним днем)</span>
      </div>
    </div>
  );
}