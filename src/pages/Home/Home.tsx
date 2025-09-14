import React from 'react';
import Hero from '../../components/Hero/Hero';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import { Users, Award, BookOpen, Target, ArrowRight, Star, Calendar, Trophy } from 'lucide-react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Award className={styles.featureIcon} />,
      title: 'التميز في التعليم',
      description: 'برامج أكاديمية رائدة ونتائج ممتازة في امتحانات البجروت.'
    },
    {
      icon: <Users className={styles.featureIcon} />,
      title: 'معلمون خبراء',
      description: 'معلمون مؤهلون ملتزمون بنجاح الطلاب.'
    },
    {
      icon: <BookOpen className={styles.featureIcon} />,
      title: 'برامج شاملة',
      description: 'مجموعة واسعة من التخصصات لتناسب اهتمامات كل طالب.'
    },
    {
      icon: <Target className={styles.featureIcon} />,
      title: 'جاهزية للمستقبل',
      description: 'نعد الطلاب للنجاح في الجامعة والحياة المهنية.'
    }
  ];

  const stats = [
    { number: '200+', label: 'طالب' },
    { number: '95%', label: 'نسبة النجاح في البجروت' },
    { number: '19+', label: 'معلم خبير' },
    { number: '5+', label: 'تخصصات' }
  ];

  const news = [
    {
      title: 'إعلان الفائزين في معرض العلوم',
      date: '15 مارس 2024',
      excerpt: 'طلابنا حققوا نجاحاً كبيراً في معرض العلوم الإقليمي بمشاريع مبتكرة في الكيمياء وعلم الأحياء.'
    },
    {
      title: 'افتتاح مختبر الحاسوب الجديد',
      date: '10 مارس 2024',
      excerpt: 'افتتاح مختبر تقني حديث لدعم برنامج الحاسوب المتنامي لدينا.'
    },
    {
      title: 'فريق كرة السلة يصل للنهائيات',
      date: '5 مارس 2024',
      excerpt: 'فريق أكاديمية التميز لكرة السلة يتأهل لنهائيات بطولة المنطقة.'
    }
  ];

  return (
    <div className={styles.home}>
      <Hero
        title="مرحبا بكم في مدرسة العلا الثانوية"
        subtitle="تمكين قادة المستقبل"
        description="حيث يلتقي التفوق الأكاديمي بالنمو الشخصي. انضم إلى مجتمعنا وحقق كامل إمكانياتك."
        height="large"
      >
        <Button  className={styles.heroButton}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            اكتشف قصتنا
          </Link>
        </Button>
        <Button className={styles.heroButton2}>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            احجز زيارة
          </Link>
        </Button>
      </Hero>

      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>لماذا تختار مدرسة العلا</h2>
            <p className={styles.sectionSubtitle}>
              نحن نقدم تجربة تعليمية شاملة تعد الطلاب للنجاح
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Card key={index} className={styles.featureCard} hoverable>
                <div className={styles.featureContent}>
                  {feature.icon}
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.programs}>
        <div className={styles.container}>
          <div className={styles.programsContent}>
            <div className={styles.programsText}>
              <h2 className={styles.sectionTitle}>البرامج الأكاديمية</h2>
              <p className={styles.sectionDescription}>
                اكتشف مجموعتنا المتنوعة من التخصصات المصممة لتناسب اهتمامات وأهداف كل طالب. من العلوم إلى الإنسانيات، نقدم برامج شاملة تعد الطلاب لامتحانات البجروت وما بعدها.
              </p>
              <div className={styles.programsFeatures}>
                <div className={styles.programFeature}>
                  <Star className={styles.programFeatureIcon} />
                  <span>الابتكار والإبداع</span>
                </div>
                <div className={styles.programFeature}>
                  <Trophy className={styles.programFeatureIcon} />
                  <span>التميز الأكاديمي</span>
                </div>
                <div className={styles.programFeature}>
                  <BookOpen className={styles.programFeatureIcon} />
                  <span> تخصصات البيولوجيا و الكيمياء و الفيزياء </span>
                </div>
              </div>
              <Button className={styles.exploreButton}>
                <Link to="/specializations" style={{ color: 'inherit', textDecoration: 'none' }}>
                  استكشف البرامج <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className={styles.programsImage}>
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg" 
                alt="طلاب في الصف"
                className={styles.programImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.news}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>آخر الأخبار والفعاليات</h2>
            <p className={styles.sectionSubtitle}>
              تابع أحدث المستجدات في أكاديمية التميز
            </p>
          </div>
          <div className={styles.newsGrid}>
            {news.map((item, index) => (
              <Card key={index} className={styles.newsCard} hoverable>
                <div className={styles.newsContent}>
                  <div className={styles.newsDate}>
                    <Calendar size={16} />
                    {item.date}
                  </div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsExcerpt}>{item.excerpt}</p>
                  <Link to="/news" className={styles.newsLink}>
                    اقرأ المزيد <ArrowRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          <div className={styles.newsActions}>
            <Button variant="outline" className={styles.viewAllButton}>
              <Link to="/news" style={{ color: 'inherit', textDecoration: 'none' }}>
                عرض كل الأخبار
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
