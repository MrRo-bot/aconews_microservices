const axios = require("axios");

const host = "https://gnews.io/api/v4/";
// const apiKey = '4c2156200ec3389903702ec444fd89a8' hellomrrobot
// const apiKey = "f18e57eaf74f9672e8a1eafb44d99788"; bhavesh
// const apiKey = "8eb5582c0ee1c905cddadba474e64f91"; //outlook
const apiKey = "451f8d86d3abacc5923165c8140c87f7"; //official gmail

const getTrendingNews = (
  category = "general",
  max = "10",
  lang = "en",
  country = "in"
) => {
  return new Promise((resolve, reject) => {
    const api = `${host}top-headlines?category=${category}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
    axios
      .get(api)
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => reject(err));
  });
};

const getSearchResults = (search, max = "10", lang = "en", country = "us") => {
  return new Promise((resolve, reject) => {
    const api = `${host}search?q=${search}&lang=${lang}&country=${country}&max=${max}&apikey=${apiKey}`;
    axios
      .get(api)
      .then((result) => resolve(result.data))
      .catch((err) => reject(err));
  });
};

module.exports = { getTrendingNews, getSearchResults };
