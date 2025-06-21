import { useState } from 'react';
import styles from './Profile.module.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs';
import Sidebar from '@components/common/Sidebar/Sidebar';
import PersonalInfo from '@components/common/PersonalInfo/PersonalInfo';
import ShippingAdress from '@components/common/ShippingAdress/ShippingAdress';
import MyOrders from '@components/profile/OrdersTable/OrdersTable';
import Logout from '@components/profile/Logout/Logout';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Breadcrumbs />
          <div className={styles.username}>
            <p className={styles.name}>Adam Wilson</p>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="#BABABA" />
            </svg>
          </div>
        </div>

        <div className={styles.content}>
          <Sidebar active={activeTab} onChange={setActiveTab} />

          <main className={styles.main}>
            {activeTab === 'personal' && (
              <>
                <PersonalInfo />
                <div className={styles.btnsContainer}>
                  <button className={styles.btnChange}>Change Password</button>
                </div>
                <section className={styles.shippingAddress}>
                  <ShippingAdress />
                </section>
              </>
            )}

            {activeTab === 'orders' && <MyOrders />}
            {activeTab === 'logout' && <Logout />}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
