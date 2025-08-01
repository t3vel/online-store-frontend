import styles from './News.module.css';
import NewsCard from '@/components/news/NewCard/NewCard';

export default function News() {
  const newsData = [
    {
      id: 1,
      title: 'Which oil is best for cooking, frying or salads?',
      description:
        'Don\'t know which oil or fat to use in the kitchen? No wonder, the choice is really varied, and each type has its own characteristics. In this article we will advise you on how to use them and when to reach for canola oil, olive oil or coconut oil.',
      date: 'Wednesday, 02.07.2025',
      readTime: '14 min',
      image: 'https://picsum.photos/448/288',
    },
    {
      id: 2,
      title: 'Fitness recipe: a salad inspired by the taste of a Big Mac',
      description:
        'Everyone loves burgers. So today we decided to create a salad inspired by the legendary Big Mac. The combination of crunchy vegetables, potatoes, meat and dressing is simply sensational.',
      date: 'Tuesday, 01.07.2025',
      readTime: '8 min',
      image: 'https://picsum.photos/448/288',
    },
    {
      id: 3,
      title:
        'One of the most popular products will help you live to 100 years old',
      description:
        'Air-popped popcorn contains a lot of fiber, complex carbohydrates, and more polyphenols...',
      date: 'Monday, 30.06.2025',
      readTime: '2 min',
      image: 'https://picsum.photos/448/288',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>News</h1>
      <div className={styles.list}>
        {newsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
