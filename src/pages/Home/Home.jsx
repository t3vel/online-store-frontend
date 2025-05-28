import AdvantagesList from '@/components/home/AdvantagesList/AdvantagesList';
import Banner from '@/components/home/Banner/Banner';
import Header from '@/components/layout/Header/Header';
import BestProducts from '@/components/home/BestProduct/BestProduct';
import StartWith from '@/components/home/StartWith/StartWith';
import FarmToHome from '@/components/home/FarmToHome/FarmToHome';
import PostArticle from '@/components/home/PostArticle/PostArticle';
import NewsLetter from '@/components/home/NewsLetter/NewsLetter';
import Footer from '@/components/layout/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AdvantagesList />
      <BestProducts />
      <StartWith />
      <FarmToHome />
      <PostArticle />
      <NewsLetter />
      <Footer />
    </>
  );
}
