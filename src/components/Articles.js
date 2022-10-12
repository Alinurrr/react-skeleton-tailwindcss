import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

function Articles(props) {

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setArticles(data)
    }, 1000)
  })

  return (
    <>
      <h3 className="font-black text-gray-800 md:text-3xl text-xl mb-5">Article</h3>



      <div className="flex flex-col justify-center">
        {
          articles ?
            (
              articles.map(article => (
                <div className="article my-2" key={article.id}>
                  <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                    <div className="w-full md:w-1/3 bg-white grid place-items-center">
                      <img src={`https://picsum.photos/id/` + article.id + `/200/300`} alt="random" className="rounded-xl h-52 w-full object-cover" />
                    </div>
                    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">

                      <h3 className="font-black text-gray-800 md:text-3xl text-xl">{article.title}</h3>
                      <p className="md:text-lg text-gray-500 text-base">{article.body}</p>

                    </div>
                  </div>
                </div>
              ))
            )
            :
            <div>Loading...</div>

        }

      </div>


    </>
  );
}

export default Articles;