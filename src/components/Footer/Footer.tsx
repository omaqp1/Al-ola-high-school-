import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, BookOpen } from 'lucide-react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.section}>
            <div className={styles.logo}>
              <BookOpen className={styles.logoIcon} />
              <span className={styles.logoText}>مدرسة العلا الثانوية المختلطة</span>
            </div>
            <p className={styles.description}>
              نُمكّن الطلاب بالمعرفة والمهارات والقيم لمستقبل ناجح.
              التميز في التعليم منذ عام 1985.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
              <Facebook />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
              <Instagram />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
              <Twitter />
              </a>
            </div>
            </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>الروابط السريعة</h3>
            <ul className={styles.linkList}>
              <li><Link to="/about" className={styles.link}>من نحن</Link></li>
              <li><Link to="/specializations" className={styles.link}>البرامج</Link></li>
              <li><Link to="/teachers" className={styles.link}>معلمونا</Link></li>
              <li><Link to="/bagrut" className={styles.link}>نظام البجروت</Link></li>
              <li><Link to="/news" className={styles.link}>الأخبار والفعاليات</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>الموارد الطلابية</h3>
            <ul className={styles.linkList}>
              <li><Link to="/dashboard" className={styles.link}>بوابة الطلاب</Link></li>
              <li><Link to="/activities" className={styles.link}>الأنشطة</Link></li>
              <li><a href="#" className={styles.link}>التقويم الأكاديمي</a></li>
              <li><a href="#" className={styles.link}>المكتبة</a></li>
              <li><a href="#" className={styles.link}>الدعم</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>معلومات الاتصال</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} />
                <span>بيت حنينا، الجوزة 25</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} />
                <span>02-502-3618</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} />
                <span>info@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} مدرسة العلا الثانوية المختلطة. جميع الحقوق محفوظة.</p>
            <p>تم تصميم وتطوير الموقع بواسطة المبرمج عمر مهلوس</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>سياسة الخصوصية</a>
            <a href="#" className={styles.bottomLink}>شروط الخدمة</a>
            <a href="#" className={styles.bottomLink}>إمكانية الوصول</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
