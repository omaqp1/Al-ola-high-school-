import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import styles from './Header.module.css';
import logo from '../../../public/logo.svg'; // الأفضل استيراد الصورة هيك

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const عناصر_التنقل = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'عن المدرسة' },
    { path: '/specializations', label: 'البرامج' },
    { path: '/teachers', label: 'المعلمين' },
    { path: '/bagrut', label: 'البجروت' },
    { path: '/news', label: 'الأخبار' },
    { path: '/activities', label: 'الأنشطة' },
    { path: '/dashboard', label: 'لوحة التحكم' },
    { path: '/contact', label: 'تواصل معنا' },
  ];

  const تبديل_القائمة = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* الشعار */}
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="شعار المدرسة" className={styles.logoIcon} />
          <span className={styles.logoText}>مدرسة العلا</span>
        </Link>

        {/* قائمة التنقل */}
        <nav 
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} 
          role="navigation"
        >
          <ul className={styles.navList}>
            {عناصر_التنقل.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${
                    location.pathname === item.path ? styles.navLinkActive : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* زر القائمة للموبايل */}
        <button
          className={styles.menuToggle}
          onClick={تبديل_القائمة}
          aria-label="فتح أو إغلاق القائمة"
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
};

export default Header;
