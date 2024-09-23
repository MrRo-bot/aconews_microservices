import { Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Search from "./pages/Search";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/article" element={<Article />} errorElement={<Error />} />
        <Route path="/search" element={<Search />} errorElement={<Error />} />
      </Routes>
    </>
  );
}

export default App;
