import { useState } from 'react';
import { VideoAnalysisHeader } from '@/app/components/VideoAnalysisHeader';
import { VideoPreview } from '@/app/components/VideoPreview';
import { VideoStats } from '@/app/components/VideoStats';
import { TabNavigation } from '@/app/components/TabNavigation';
import { MetricsSection } from '@/app/components/MetricsSection';
import { ViewsChart } from '@/app/components/ViewsChart';
import { RetentionSection } from '@/app/components/RetentionSection';
import { TrafficSourcesSection } from '@/app/components/TrafficSourcesSection';
import { SearchQueriesSection } from '@/app/components/SearchQueriesSection';
import { OtherPublicationsSection } from '@/app/components/OtherPublicationsSection';
import { FireIcon } from '@/app/components/FireIcon';
import { ChevronRightIcon } from '@/app/components/ChevronRightIcon';
import { TotalViewersSection } from '@/app/components/TotalViewersSection';
import { ViewerTypesSection } from '@/app/components/ViewerTypesSection';
import { GenderSection } from '@/app/components/GenderSection';
import { AgeSection } from '@/app/components/AgeSection';
import { LocationsSection } from '@/app/components/LocationsSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-black text-white max-w-md mx-auto">
      <VideoAnalysisHeader />
      <VideoPreview />
      <VideoStats />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'overview' && (
        <>
          <div className="mx-4 mt-3 mb-6 bg-neutral-800 rounded-[6px]">
            <MetricsSection />
            <ViewsChart />
            
            {/* Информационный блок */}
            <div className="px-3 pb-4 mt-4">
              <div className="bg-neutral-700 rounded-[6px] p-3 text-sm text-neutral-300">
                На диаграмме показывается тренд данных а последние 7 дней после публикации.
              </div>
            </div>
            
            {/* Разделитель */}
            <div className="px-3 py-3">
              <div className="h-[1px] bg-neutral-700"></div>
            </div>
            
            {/* Блок с призывом к действию */}
            <div className="px-3 pb-4">
              <div className="text-sm text-neutral-300 flex gap-2 items-center justify-between py-1">
                <div className="flex gap-2 items-center">
                  <FireIcon />
                  <span className="font-medium text-white">Попробуйте продвижение, чтобы увеличить просмотры и вовлеченность.</span>
                </div>
                <ChevronRightIcon />
              </div>
            </div>
          </div>
          <RetentionSection />
          <TrafficSourcesSection />
          <SearchQueriesSection />
          <OtherPublicationsSection />
        </>
      )}
      
      {activeTab === 'viewers' && (
        <>
          <TotalViewersSection />
          <ViewerTypesSection />
          <GenderSection />
          <AgeSection />
          <LocationsSection />
        </>
      )}
    </div>
  );
}