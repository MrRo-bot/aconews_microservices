import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import ArticleCard from "../components/ArticleCard";
// import { newsData } from "../utils/dummy";

const Search = () => {
  const [searchList, setSearchList] = useState([]);

  const [searchUrl, setSearchUrl] = useState({
    url: import.meta.env.VITE_BASE_URL,
    search: "",
    endPoint: "fetchSearchNews",
    country: "in",
    language: "en",
    max: 10,
  });

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (searchUrl.search === "") return; //when search textfield is empty

      try {
        const article = await axios.get(
          `${searchUrl.url}${searchUrl.endPoint}?search=${searchUrl.search}&country=${searchUrl.country}&lang=${searchUrl.language}&max=${searchUrl.max}`
        );
        if (article.status === 200) {
          setSearchList(article.data.articles);
        }
      } catch (error) {
        console.log(error.name, error.message);
      }
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [searchUrl]);

  return (
    <>
      <main className="relative min-h-screen bg-cyan-bluish-gray/20">
        <NavLink to="/">
          <div className="flex justify-between p-4 sm:mx-auto sm:w-11/12 lg:w-9/12">
            <div className="grid w-8 h-8 bg-gray-700 rounded-full lg:w-12 lg:h-12 mix-blend-color place-items-center">
              <img
                loading="lazy"
                className="w-4 lg:w-6"
                src="./arrow-left.svg"
              />
            </div>
          </div>
        </NavLink>

        <h1 className="my-10 text-3xl font-black text-center sm:text-5xl text-vivid-cyan-blue">
          Search for articles
        </h1>

        <div className="w-5/6 mx-auto sm:w-4/6">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <img
                loading="lazy"
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                src="./searchSmall.svg"
              />
            </div>
            <input
              onChange={(e) =>
                setSearchUrl((prev) => ({ ...prev, search: e.target.value }))
              }
              type="search"
              id="search"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search your articles"
              required
            />
          </div>
        </div>
        {searchList.length > 0 ? (
          <div className="flex flex-col gap-2 p-4 mt-4 lg:mt-8 lg:grid lg:grid-cols-2 sm:mx-auto sm:w-11/12 lg:w-8/12 sm:gap-6">
            {searchList?.map((article) => {
              return <ArticleCard key={article.publishedAt} data={article} />;
            })}
          </div>
        ) : (
          <img
            loading="lazy"
            className="absolute w-4/6 -translate-x-1/2 -translate-y-1/2 max-w-80 sm:w-2/6 lg:w-3/6 xl:w-3/6 sm:mt-5 left-1/2 top-1/2"
            src="./searchPlaceholder.svg"
          />
        )}
      </main>
    </>
  );
};

export default Search;
