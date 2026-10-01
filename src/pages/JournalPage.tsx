import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ARTICLES } from '../data/articles';
import { ImageWithFallback } from '../components/ImageWithFallback';

export const JournalPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-32 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header (Airy & uncluttered) */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#977B58] block">
            Architectural Writings & Essays
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#20221F] dark:text-white tracking-tight leading-[1.1]">
            The DreamBuilt Journal
          </h1>
          <p className="text-base sm:text-lg text-[#20221F]/75 dark:text-white/70 font-sans leading-relaxed font-light pt-2 max-w-2xl">
            Reflections on commissioning architecture, living with natural light, and choosing honest materials that age with grace.
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate(`/journal/${article.slug}`)}
              className="group cursor-pointer flex flex-col justify-between border border-[#D8D0C3] dark:border-white/10 bg-[#FAF8F5] dark:bg-[#1A1C19] p-8 transition-colors hover:border-[#977B58] space-y-6"
            >
              <div className="space-y-5">
                <div className="relative overflow-hidden bg-[#20221F] border border-[#D8D0C3] dark:border-white/10">
                  <ImageWithFallback
                    src={article.heroImage}
                    alt={article.heroImageAlt}
                    fallbackTitle={article.title}
                    aspectRatioClass="aspect-[16/10]"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-serif text-[#20221F] dark:text-white group-hover:text-[#977B58] transition-colors leading-snug">
                    {article.title}
                  </h2>
                </div>

                <p className="text-sm text-[#20221F]/70 dark:text-white/60 font-sans leading-relaxed line-clamp-3 font-light">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-[#D8D0C3] dark:border-white/10 flex items-center justify-between text-xs text-[#20221F]/70 dark:text-white/60">
                <span className="font-medium text-[#20221F] dark:text-white">{article.author.name}</span>
                <span className="font-mono text-xs text-[#977B58] group-hover:underline">Read Essay →</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
