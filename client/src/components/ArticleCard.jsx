/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { dateCalculator } from "../utils/calculators";

const ArticleCard = ({ data }) => {
  return (
    <NavLink to="/article">
      <div
        key={data?.publishedAt}
        className="flex w-full gap-1 p-2 mx-auto bg-white sm:p-4 shadow-natural hover:transition-all hover:shadow-crisp sm:gap-6 lg:p-2 lg:gap-5 min-h-40 rounded-2xl xl:p-6"
      >
        <div className="flex flex-col justify-between w-7/12">
          <div>
            <div className="text-xs xl:text-lg sm:text-base sm:font-bold font-manrope text-vivid-purple">
              {dateCalculator(data?.publishedAt)}
            </div>

            <div className="pt-2 font-bold sm:text-3xl lg:text-xl line-clamp-3 xl:line-clamp-3 lg:line-clamp-2 text-ellipsis text-wrap">
              {data?.title}
            </div>
          </div>

          <div>
            <span
              className="text-sm xl:text-lg text-vivid-red sm:font-bold"
              href={data?.source?.url}
            >
              {data?.source?.name}
            </span>
          </div>
        </div>

        <div className="w-5/12 h-full aspect-[4/3] overflow-hidden rounded-2xl">
          <img className="object-cover h-full" src={data?.image} />
        </div>
      </div>
    </NavLink>
  );
};

export default ArticleCard;
