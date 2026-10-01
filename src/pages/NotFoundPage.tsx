import React from 'react';
import { useRouter } from '../context/RouterContext';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-[#F4F1EB] flex items-center justify-center px-4 py-24 text-center text-[#20221F]">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#977B58] block">
          404 · Unbuilt Space
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#20221F]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#20221F]/70 font-sans leading-relaxed font-light">
          The architectural plan or section you are seeking does not exist in our current index. It may have been relocated or updated.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-[#20221F] text-[#F4F1EB] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#68705C] transition-colors cursor-pointer"
          >
            Return Home
          </button>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 border border-[#D8D0C3] text-[#20221F] text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#EAE5DC] transition-colors cursor-pointer"
          >
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
};
