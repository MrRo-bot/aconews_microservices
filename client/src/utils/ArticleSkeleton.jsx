import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArticleSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div
        key={index}
        className="flex w-full gap-1 p-2 mx-auto bg-white sm:p-4 shadow-natural hover:transition-all hover:shadow-crisp sm:gap-6 lg:p-2 lg:gap-5 min-h-40 rounded-2xl xl:p-6"
      >
        <div className="flex flex-col justify-between w-7/12">
          <div>
            <div className="text-xs xl:text-lg sm:text-base sm:font-bold font-manrope text-vivid-purple">
              <Skeleton style={{ width: "30%" }} />
            </div>

            <div className="pt-2 font-bold sm:text-3xl lg:text-xl line-clamp-3 xl:line-clamp-3 lg:line-clamp-2 text-ellipsis text-wrap">
              <Skeleton count={3} style={{ height: "2rem", width: "80%" }} />
            </div>
          </div>

          <div>
            <span className="text-sm xl:text-lg text-vivid-red sm:font-bold">
              <Skeleton style={{ width: "20%" }} />
            </span>
          </div>
        </div>

        <div className="w-5/12 h-full aspect-[4/3] overflow-hidden rounded-2xl">
          <Skeleton style={{ height: "100%" }} />
        </div>
      </div>
    ));
};

export default ArticleSkeleton;
