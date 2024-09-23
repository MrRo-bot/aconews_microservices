const express = require("express");
const router = express.Router();

const { getSearchResults, getTrendingNews } = require("./getnewsdata");

router.get("/fetchTrendingNews", async (req, res) => {
  const category = req.query.category; // e.g., '/fetchTrendingNews?category=sports'
  const lang = req.query.lang;
  const country = req.query.country;
  const max = req.query.max;
  console.log(category, max, lang, country);
  try {
    // Simulate fetching news (replace with actual logic)
    const trendingNews = await getTrendingNews(category, max, lang, country);

    res.status(200).json(trendingNews);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Failed to fetch trending news", error });
  }
});

router.get("/fetchSearchNews", async (req, res) => {
  const search = req.query.search; // e.g., '/fetchTrendingNews?category=sports'
  const lang = req.query.lang;
  const country = req.query.country;
  const max = req.query.max;
  try {
    const searchResults = await getSearchResults(search, max, lang, country);

    res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);

    res.status(500).json({ status: "Failed to Search News", error });
  }
});

module.exports = router;
