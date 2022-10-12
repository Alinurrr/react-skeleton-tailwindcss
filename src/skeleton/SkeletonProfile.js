import React from 'react';

function SkeletonProfile(props) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-5">
            <div className="bg-slate-200 mb-3 w-24 h-24 rounded-full shadow-lg" />
            <div className="h-4 my-2 w-3/12 bg-slate-200 rounded" />
            <div className="h-3 my-1 w-5/12 bg-slate-200 rounded" />
            <div className="h-3 my-1 w-4/12 bg-slate-200 rounded" />
          </div>
        </div>
      </div>

    </>
  );
}

export default SkeletonProfile;