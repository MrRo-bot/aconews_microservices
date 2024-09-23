/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Trending from "../components/Home/Trending";
import Articles from "../components/Home/Articles";

import { newsData } from "../utils/dummy";

const CategoryCard = ({ data, setUrlData }) => (
  <div
    onClick={() =>
      setUrlData((prev) => ({
        ...prev,
        category: data?.name.toLowerCase(),
      }))
    }
    key={data?.name}
    className="relative grid rounded-full cursor-pointer hover:scale-105 hover:transition-transform min-w-36 place-items-evenly"
  >
    <div className="absolute z-10 text-white -translate-x-1/2 -translate-y-1/2 rounded-full w-36 h-36 bg-black/50 font-comfortaa left-1/2 top-1/2"></div>
    <img
      className="z-0 object-cover rounded-full w-36 h-36"
      src={data?.url}
      alt={data?.name}
    />
    <div className="absolute z-20 font-bold text-white -translate-x-1/2 -translate-y-1/2 font-comfortaa left-1/2 top-1/2">
      {data?.name}
    </div>
  </div>
);
const Home = () => {
  const [data, setData] = useState({
    topHighlights: {},
    allArticles: {},
  });

  const [urlData, setUrlData] = useState({
    url: import.meta.env.VITE_BASE_URL,
    endPoint: "fetchTrendingNews",
    category: "general",
    country: "in",
    language: "en",
    max: 10,
  });

  useEffect(() => {
    const trendingNews = async () => {
      try {
        const trending = await axios.get(
          `${urlData.url}${urlData.endPoint}?category=${urlData.category}&country=${urlData.country}&lang=${urlData.language}&max=${urlData.max}`
        );
        if (trending.status === 200) {
          setData((prev) => ({
            ...prev,
            topHighlights: trending.data,
          }));
        }
      } catch (error) {
        console.log(error.name, error.message);
      }
    };

    trendingNews();
  }, [urlData]);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      try {
        const articles = await axios.get(
          `${urlData.url}${urlData.endPoint}?category=${urlData.category}&country=${urlData.country}&lang=${urlData.language}&max=${urlData.max}`
        );

        if (articles.status === 200) {
          setData((prev) => ({
            ...prev,
            allArticles: articles.data,
          }));
        }
      } catch (error) {
        console.log(error.name, error.message);
      }
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [urlData]);

  return (
    <>
      <header className="grid grid-cols-2 grid-rows-2 p-2 mx-auto sm:justify-between sm:grid-cols-none sm:grid-rows-none sm:flex sm:w-11/12 lg:w-10/12 lg:p-4">
        <div className="relative mb-auto w-28 sm:w-32 lg:w-44 max-w-64 after:content-['news'] after:absolute after:font-manrope after:text-xs lg:after:text-[18px] after:font-bold after:left-[115px] sm:after:left-[133px] lg:after:left-[183px] after:bottom-0  after:leading-3 lg:after:leading-4 after:pb-0.5 lg:after:pb-1 after:rounded-[2px] after:text-white after:bg-vivid-purple after:px-0.5 grid place-items-center ">
          <img src="./acowale-original.svg" alt="aconews" />
        </div>

        <div className="flex gap-1 sm:gap-4 col-span-full sm:col-auto sm:ml-auto sm:mr-2 md:mr-4 lg:mr-6 xl:mr-8 sm:justify-self-auto justify-self-center">
          <select
            onChange={(e) =>
              setUrlData((prev) => ({ ...prev, country: e.target.value }))
            }
            className="w-20 p-1 font-semibold rounded-md hover:transition-colors hover:bg-vivid-purple hover:text-white"
            name="language"
            id="language"
          >
            <option value="in" defaultChecked>
              India
            </option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong Kong</option>
            <option value="ie">Ireland</option>
            <option value="il">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="pk">Pakistan</option>
            <option value="pe">Peru</option>
            <option value="ph">Philippines</option>
            <option value="pt">Portugal</option>
            <option value="ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sg">Singapore</option>
            <option value="es">Spain</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="ua">Ukraine</option>
            <option value="gb">UK</option>
            <option value="us">USA</option>
          </select>
          <select
            onChange={(e) =>
              setUrlData((prev) => ({ ...prev, language: e.target.value }))
            }
            className="w-20 p-1 font-semibold rounded-md hover:transition-colors hover:bg-vivid-purple hover:text-white"
            name="country"
            id="country"
          >
            <option value="en" defaultChecked>
              English
            </option>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="nl">Dutch</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="ml">Malayalam</option>
            <option value="mr">Marathi</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>
            <option value="sv">Swedish</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="uk">Ukrainian</option>
          </select>
        </div>

        <div className="col-start-2 col-end-3 row-start-1 row-end-2">
          <div className="flex items-center justify-end gap-4 lg:gap-6">
            <NavLink to="search">
              <div className="grid p-1 rounded-full w-7 h-7 lg:h-10 lg:w-10 place-items-center bg-cyan-bluish-gray/20">
                <img loading="lazy" src="./search.svg " />
              </div>
            </NavLink>
            <div className="w-8 h-8 overflow-hidden rounded-full lg:h-12 lg:w-12">
              <img loading="lazy" src="./profile.png" alt="pp" />
            </div>
          </div>
        </div>
      </header>
      <main className="mt-5">
        {/* TRENDING ARTICLES */}
        <Trending data={data?.topHighlights} />

        {/* CATEGORIES */}
        <section className="sm:my-6 lg:my-12">
          <h2 className="px-2 pt-6 text-2xl font-bold sm:text-4xl sm:mx-auto sm:w-11/12 lg:w-10/12 font-comfortaa text-luminous-vivid-orange">
            Explore 🔍
          </h2>
          <div className="flex justify-start gap-3 px-2 py-6 overflow-x-auto sm:mx-auto sm:w-11/12 lg:w-10/12">
            {newsData?.categories?.map((category) => {
              return (
                <CategoryCard
                  key={category.name}
                  data={category}
                  setUrlData={setUrlData}
                />
              );
            })}
          </div>
        </section>

        {/* ARTICLES */}
        <Articles data={data?.allArticles} />

        <div className="flex items-center justify-center gap-6 p-5 pt-3">
          <div
            onClick={() =>
              setUrlData((prev) => ({
                ...prev,
                category:
                  newsData?.categories[
                    Math.floor(Math.random() * 9)
                  ]?.name?.toLowerCase(),
              }))
            }
            className="px-2 py-1 font-bold text-white cursor-pointer text-md md:text-xl hover:transition-transform hover:scale-110 bg-vivid-cyan-blue font-comfortaa rounded-xl"
          >
            <strong>Prev</strong>
          </div>

          <div
            onClick={() =>
              setUrlData((prev) => ({
                ...prev,
                category:
                  newsData?.categories[
                    Math.floor(Math.random() * 9)
                  ]?.name?.toLowerCase(),
              }))
            }
            className="px-2 py-1 font-bold text-white cursor-pointer text-md md:text-xl hover:transition-transform hover:scale-110 bg-vivid-cyan-blue font-comfortaa rounded-xl"
          >
            <strong>Next</strong>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
