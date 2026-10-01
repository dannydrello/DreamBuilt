import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ARTICLES } from '../data/articles';
import { ImageWithFallback } from '../components/ImageWithFallback';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-24 px-4 text-center">
        <h1 className="text-3xl font-serif text-[#20221F] dark:text-white mb-4">Article Not Found</h1>
        <p className="text-sm text-[#20221F]/70 dark:text-white/60 mb-6">The editorial piece you requested is not available.</p>
        <button
          onClick={() => navigate('/journal')}
          className="px-5 py-2.5 bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] text-xs font-mono uppercase tracking-wider font-semibold rounded-sm"
        >
          Return to Journal
        </button>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug);

  return (
    <article className="min-h-screen bg-[#F4F1EB] dark:bg-[#121311] pt-36 pb-32 px-4 md:px-8 lg:px-12 text-[#20221F] dark:text-[#F4F1EB] transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div>
          <button
            onClick={() => navigate('/journal')}
            className="text-xs font-mono uppercase tracking-widest text-[#977B58] hover:text-[#20221F] dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            ← Back to all essays
          </button>
        </div>

        <header className="space-y-6">
          <div className="flex items-center gap-3 text-xs text-[#20221F]/60 dark:text-white/50 font-mono">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#20221F] dark:text-white tracking-tight leading-[1.12]">
            {article.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#20221F]/75 dark:text-white/80 font-serif italic leading-relaxed pt-2">
            "{article.subtitle}"
          </p>

          <div className="flex items-center gap-3.5 pt-6 border-t border-[#D8D0C3] dark:border-white/10">
            <div className="w-9 h-9 rounded-full bg-[#EAE5DC] dark:bg-[#1A1C19] flex items-center justify-center font-serif text-sm text-[#20221F] dark:text-white">
              {article.author.name.charAt(0)}
            </div>
            <div className="text-xs">
              <span className="font-semibold block text-[#20221F] dark:text-white text-sm">{article.author.name}</span>
              <span className="text-[#20221F]/60 dark:text-white/50 font-mono">{article.author.role}</span>
            </div>
          </div>
        </header>

        <div className="border border-[#D8D0C3] dark:border-white/10 overflow-hidden bg-[#20221F] shadow-xs">
          <ImageWithFallback
            src={article.heroImage}
            alt={article.heroImageAlt}
            fallbackTitle={article.title}
            aspectRatioClass="aspect-[16/10]"
            className="object-cover"
          />
        </div>

        {/* Spacious, uncluttered reading typography */}
        <div className="space-y-12 text-lg sm:text-xl text-[#20221F]/85 dark:text-white/80 font-sans leading-loose font-light">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-8">
              {section.heading && (
                <h2 className="text-3xl sm:text-4xl font-serif text-[#20221F] dark:text-white pt-6 leading-snug">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.pullQuote && (
                <blockquote className="my-12 pl-8 border-l-2 border-[#977B58] font-serif italic text-2xl sm:text-3xl text-[#20221F] dark:text-white bg-[#FAF8F5] dark:bg-[#1A1C19] py-6 pr-6 leading-relaxed">
                  "{section.pullQuote}"
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Author Bio Card */}
        <div className="p-10 bg-[#FAF8F5] dark:bg-[#1A1C19] border border-[#D8D0C3] dark:border-white/10 mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-[#20221F] dark:text-white">Written by {article.author.name}</h3>
            <p className="text-xs sm:text-sm text-[#20221F]/70 dark:text-white/60 font-sans font-light">
              Part of DreamBuilt’s ongoing design research into domestic light, acoustics, and enduring materiality.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3.5 text-xs font-mono uppercase tracking-wider font-semibold bg-[#20221F] dark:bg-[#F4F1EB] text-white dark:text-[#121311] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-sm"
          >
            Start your project →
          </button>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-[#D8D0C3] dark:border-white/10 pt-16 mt-16 space-y-8">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#20221F] dark:text-white">Further Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => navigate(`/journal/${rel.slug}`)}
                  className="p-6 border border-[#D8D0C3] dark:border-white/10 bg-white dark:bg-[#1A1C19] cursor-pointer hover:border-[#977B58] transition-colors space-y-2"
                >
                  <div className="text-[11px] font-mono text-[#20221F]/60 dark:text-white/50">{rel.category} · {rel.readTime}</div>
                  <h4 className="text-xl font-serif text-[#20221F] dark:text-white leading-snug">{rel.title}</h4>
                  <span className="text-xs text-[#977B58] font-mono inline-block pt-1">Read essay →</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
