import AdvantagesList from '@/components/home/AdvantagesList/AdvantagesList';
import Banner from '@/components/home/Banner/Banner';
import BestProducts from '@/components/home/BestProduct/BestProduct';
import StartWith from '@/components/home/StartWith/StartWith';
import FarmToHome from '@/components/home/FarmToHome/FarmToHome';
import PostArticle from '@/components/home/PostArticle/PostArticle';
import NewsLetter from '@/components/home/NewsLetter/NewsLetter';

export default function Home() {
  return (
    <>
      <Banner />
      <AdvantagesList />
      <BestProducts />
      <StartWith />
      <FarmToHome />
      <PostArticle />
      <NewsLetter />
    </>
  );
}
