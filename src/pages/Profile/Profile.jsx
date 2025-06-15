import styles from './Profile.module.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs';
import Sidebar from '@components/common/Sidebar/Sidebar';
import PersonalInfo from '@components/common/PersonalInfo/PersonalInfo';
import ShippingAdress from '@components/common/ShippingAdress/ShippingAdress';
import MyOrders from '@components/profile/OrdersTable/OrdersTable';

export default function Profile() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Breadcrumbs />
          <div className={styles.username}>
            <p className={styles.name}>Adam Wilson</p>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#BABABA" />
            </svg>
          </div>
        </div>
        <div className={styles.content}>
          <Sidebar />
          <main className={styles.main}>
            <PersonalInfo />
            {/* <MyOrders /> */}

            <section className={styles.shippingAddress}>
              <ShippingAdress />
            </section>

            <div className={styles.btnsContainer}>
              <button className={styles.btnChange}>Change Password</button>
              <button className={styles.btnSubscribe}>
                Subscribe the Newsletter
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
