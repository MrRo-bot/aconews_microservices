/* eslint-disable react/prop-types */

import ArticleSkeleton from "../../utils/ArticleSkeleton";
import ArticleCard from "../ArticleCard";

const Articles = ({ data }) => {
  return (
    <>
      <section className="sm:mt-6 lg:mt-12">
        <h2 className="px-2 pt-6 text-2xl font-bold sm:text-4xl sm:mx-auto sm:w-11/12 lg:w-10/12 font-comfortaa text-luminous-vivid-orange">
          Feed 📜
        </h2>
        <div className="flex flex-col gap-6 py-6 mx-2 lg:grid lg:grid-cols-2 sm:mx-auto sm:w-11/12 lg:w-10/12">
          {!data?.articles ? (
            <ArticleSkeleton cards={10} />
          ) : (
            data?.articles?.map((article) => {
              return <ArticleCard key={article.publishedAt} data={article} />;
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Articles;
