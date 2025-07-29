import styles from './OurMission.module.css';
import banner from '@/assets/banners/mission.png';
import NewsLetter from '@/components/home/NewsLetter/NewsLetter';
export default function OurMission() {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <img src={banner} alt="Our Mission Banner" className={styles.banner} />
        <h1 className={styles.title}>About Right Bite</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.story}>
          <h2 className={styles.secondTitle}>Our story</h2>
          <p className={styles.text}>
            Suspendisse eleifend efficitur erat, in molestie ex porttitor quis.
            Sed vestibulum elit in condimentum porttitor. Mauris sem nulla,
            mollis at semper ac, viverra in nunc. Sed nec luctus velit. In
            sagittis erat non enim luctus luctus. Sed nec magna tellus.
            Phasellus maximus eu nunc non vehicula. Vestibulum finibus accumsan
            mauris nec egestas. Cras convallis, augue quis ullamcorper
            imperdiet, arcu libero tempor magna, at pulvinar dolor justo ut
            odio. Mauris at nisl turpis. Donec at lorem et libero varius
            facilisis in eleifend magna. Morbi malesuada, ipsum dignissim
            maximus consequat, sem turpis dictum velit, vel gravida nulla velit
            sit amet lacus. Nam bibendum nisl non neque feugiat pretium. Proin
            faucibus vehicula convallis. Phasellus nec pulvinar sapien. Maecenas
            tempus egestas vestibulum.
          </p>
        </div>

        <div className={styles.product}>
          <h2 className={styles.secondTitle}>Our product</h2>
          <p className={styles.text}>
            Nunc pharetra aliquet convallis. Aenean et elementum tellus. Donec
            pharetra, est in eleifend iaculis, mauris magna vestibulum lectus,
            eget volutpat tortor felis et lorem. Aenean mattis sodales odio, eu
            feugiat purus consectetur non. Nulla volutpat egestas aliquam.
            Mauris efficitur elementum diam nec pulvinar. Phasellus ultricies
            risus varius orci ullamcorper, sit amet dictum risus cursus. Cras
            venenatis velit ac consequat dignissim. Nullam eget aliquet ex, non
            varius diam. Etiam in lobortis lectus. Praesent quis condimentum
            leo. Morbi cursus velit non lacinia dictum. Fusce placerat ultricies
            metus. Donec lacinia consectetur erat nec auctor. Pellentesque ac
            orci lectus.
          </p>
        </div>

        <div className={styles.carousel}></div>

        <div className={styles.future}>
          <h2 className={styles.secondTitle}>Our future</h2>
          <p className={styles.text}>
            Suspendisse at eros non augue fermentum dictum. Aenean tempor nulla
            sem. Vestibulum sollicitudin quam nunc, eu consectetur nisi laoreet
            eu. Suspendisse tincidunt laoreet convallis. Pellentesque a
            convallis sem. Nunc et mauris eget tellus mollis ultricies et eu
            odio. Duis imperdiet velit commodo enim aliquam, ac auctor mauris
            semper. Donec posuere sem vel ante pretium aliquet. Praesent semper
            vel leo sed varius. Proin quis quam non urna commodo dapibus vitae
            sit amet felis. Quisque luctus tempus aliquet. Donec eu purus
            venenatis elit pulvinar interdum. Sed eu dolor consectetur turpis
            congue hendrerit. Phasellus fringilla pellentesque magna ut
            molestie. Morbi sit amet venenatis dolor. Pellentesque convallis,
            sapien vitae accumsan gravida, dolor ligula auctor lacus, ac commodo
            orci mauris eu nulla.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
