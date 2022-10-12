import React from 'react';

function SkeletonArticle(props) {
  return (
    <div>
      <div className="skeleton-article my-2">
        <div className="animate-pulse relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-gray grid place-items-center">
            <div className="rounded-xl bg-slate-200 h-52 w-full" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="h-4 bg-slate-200 rounded-md" />
            <div className="h-4 bg-slate-200 rounded-md" />
            <div className="h-4 w-2/3 bg-slate-200 rounded-md" />
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="h-3 bg-slate-200 rounded col-span-2" />
              <div className="h-3 bg-slate-200 rounded col-span-1" />
              <div className="h-3 bg-slate-200 rounded col-span-1" />
              <div className="h-3 bg-slate-200 rounded col-span-2" />
              <div className="h-3 bg-slate-200 rounded col-span-2" />
              <div className="h-3 bg-slate-200 rounded col-span-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonArticle;