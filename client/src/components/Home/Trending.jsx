/* eslint-disable react/prop-types */

import TrendingSkeleton from "../../utils/TrendingSkeleton";
import TrendingCard from "../TrendingCard";

const Trending = ({ data }) => {
  return (
    <>
      {/* TOP HEADLINES */}
      <section className="pt-8 sm:my-6 lg:my-12">
        <h2 className="px-2 text-2xl font-bold sm:text-4xl sm:mx-auto sm:w-11/12 lg:w-10/12 font-comfortaa text-luminous-vivid-orange">
          Hottest News 🔥🔥🔥
        </h2>
        <div className="relative flex justify-start gap-4 py-6 overflow-x-scroll sm:mx-auto sm:w-11/12 lg:w-10/12">
          {!data?.articles ? (
            <TrendingSkeleton cards={10} />
          ) : (
            data?.articles?.map((article) => (
              <TrendingCard key={article.publishedAt} data={article} />
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Trending;
