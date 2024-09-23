/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { dateCalculator } from "../utils/calculators";

const TrendingCard = ({ data }) => {
  return (
    <NavLink to="article">
      <div
        key={data?.publishedAt}
        className="flex flex-col justify-between p-1 m-2 bg-white min-w-80 rounded-2xl shadow-sharp hover:shadow-crisp hover:transition-all"
      >
        <div className="w-full overflow-hidden rounded-2xl h-60">
          <img className="object-cover w-full h-full" src={data?.image} />
        </div>
        <div className="px-2">
          <div className="flex justify-between py-2">
            <strong className="font-comfortaa text-vivid-green-cyan">
              Trending 🔥
            </strong>

            <span className="w-4/12 text-end font-manrope text-vivid-purple">
              {dateCalculator(data?.publishedAt)}
            </span>
          </div>
          <div className="flex justify-start pt-4">
            <h2 className="w-11/12 h-12 font-semibold line-clamp-3 text-ellipsis text-wrap">
              {data?.title}
            </h2>
          </div>
          <div className="flex justify-start py-2">
            <span
              className="w-6/12 text-sm text-vivid-red"
              href={data?.source.url}
            >
              {data?.source?.name}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TrendingCard;
