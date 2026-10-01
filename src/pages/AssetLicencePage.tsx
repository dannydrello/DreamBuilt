import React from 'react';
import { useRouter } from '../context/RouterContext';
import { MEDIA_REGISTRY } from '../data/mediaRegistry';

export const AssetLicencePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-28 pb-24 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block mb-2">
            Audit & Attribution
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#20221F] dark:text-white mb-4 tracking-tight">
            Media Asset & Licence Record
          </h1>
          <p className="text-sm sm:text-base text-[#20221F]/80 dark:text-white/70 font-sans leading-relaxed font-light">
            In accordance with DreamBuilt’s strict editorial and copyright standards, this registry documents all atmospheric media, stock candidate assets, and conceptual studies utilized across the website.
          </p>
        </div>

        <div className="border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] overflow-x-auto shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] dark:bg-[#161815] border-b border-[#D8D0C3] dark:border-white/10 font-mono uppercase text-[#20221F]/70 dark:text-white/60">
              <tr>
                <th className="py-3.5 px-4">Asset / Placement</th>
                <th className="py-3.5 px-4">Creator & Source</th>
                <th className="py-3.5 px-4">Licence / Usage</th>
                <th className="py-3.5 px-4">Crop & Ratio</th>
                <th className="py-3.5 px-4">Rationale for DreamBuilt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8D0C3] dark:divide-white/10">
              {MEDIA_REGISTRY.map((asset) => (
                <tr key={asset.id} className="hover:bg-[#FAF8F5] dark:hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 font-medium text-[#20221F] dark:text-white">
                    <div className="font-serif text-sm">{asset.title}</div>
                    <div className="text-[11px] text-[#977B58] font-mono mt-0.5">{asset.intendedPlacement}</div>
                  </td>
                  <td className="py-4 px-4 text-[#20221F]/80 dark:text-white/70 font-mono">
                    <div>{asset.sourceCreator}</div>
                    <a
                      href={asset.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#977B58] hover:underline"
                    >
                      View Source ↗
                    </a>
                  </td>
                  <td className="py-4 px-4 text-[#20221F]/70 dark:text-white/60">
                    <span className="font-mono text-[11px]">{asset.license}</span>
                  </td>
                  <td className="py-4 px-4 text-[#20221F]/70 dark:text-white/60 font-mono text-[11px]">
                    {asset.aspectRatio}
                  </td>
                  <td className="py-4 px-4 text-[#20221F]/80 dark:text-white/70 max-w-xs leading-normal">
                    {asset.suitabilityRationale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <button
            onClick={() => navigate('/')}
            className="px-5 py-2.5 bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] text-xs font-mono uppercase tracking-wider font-semibold rounded-sm cursor-pointer"
          >
            ← Return to Home
          </button>
        </div>

      </div>
    </div>
  );
};
