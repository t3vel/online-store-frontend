import AdvantagesList from "./components/AdvantagesList/AdvantagesList";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BestProducts from "./components/BestProduct/BestProduct";
import StartWith from "./components/StartWith/StartWith";
import FarmToHome from "./components/FarmToHome/FarmToHome";
import PostArticle from "./components/PostArticle/PostArticle";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AdvantagesList />
      <BestProducts />
      <StartWith />
      <FarmToHome />
      <PostArticle />
    </>
  );
}

export default App;
