import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TrendingSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="flex flex-col justify-between p-1 m-2 bg-white min-w-80 rounded-2xl shadow-sharp hover:shadow-crisp hover:transition-all"
      >
        <div className="w-full overflow-hidden rounded-2xl h-60">
          <Skeleton style={{ height: "100%" }} />
        </div>
        <div className="px-2">
          <div className="flex justify-between py-2">
            <strong className="font-comfortaa text-vivid-green-cyan">
              Trending 🔥
            </strong>

            <span className="w-4/12 text-end font-manrope text-vivid-purple">
              <Skeleton />
            </span>
          </div>
          <div className="flex justify-start pt-4">
            <h2 className="w-11/12 h-12 line-clamp-3 text-ellipsis text-wrap">
              <Skeleton count={2} style={{ height: "1rem" }} />
            </h2>
          </div>
          <div className="flex justify-start py-2">
            <span className="w-6/12 text-sm text-vivid-red">
              <Skeleton />
            </span>
          </div>
        </div>
      </div>
    ));
};

export default TrendingSkeleton;
