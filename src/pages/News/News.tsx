import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import styles from './News.module.css';

const News: React.FC = () => {
  const featuredArticle = {
    title: 'طلاب مدرسة العلا يفوزون في البطولة الشطرنجية في القدس',
    excerpt: 'طلاب مدرسة العلا يحققون إنجازًا رائعًا في مسابقة الشطرنج الوطنية، حيث فاز مصطفى بالمركز الثاني و حصل الطالب عمر على لقب "بطل الطاولة رقم 5" في البطولة التي أقيمت في القدس.',
    content: 'في إنجاز مميز يعكس التفوق والموهبة لدى طلاب مدرسة العلا, تمكن الطالب مصطفى من تحقيق المركز الثاني في بطولة شطرنج القدس التي أقيمت في القدس. كما أحرز الطالب عمر لقب "بطل الطاولة رقم 5"، مما يبرز مهاراته الاستراتيجية وقدرته على التفكير السريع تحت الضغط. هذا النجاح ليس فقط فخرًا للمدرسة، بل هو أيضًا شهادة على الجهود المستمرة التي تبذلها المدرسة في دعم وتنمية مواهب طلابها في مختلف المجالات. تهانينا الحارة لمصطفى وعمر ولكل من ساهم في هذا الإنجاز الرائع!',
    author: '',
    date: '2024-03-15',
    category: 'إنجازات',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
    tags: ['علوم', 'مسابقة', 'إنجازات', 'طلاب']
  };

  const newsArticles = [
    {
      title: 'افتتاح غرفة الحاسوب الجديد',
      excerpt: 'مختبر مجهز بأحدث الأجهزة والبرمجيات لدعم برنامج علوم الحاسوب لدينا.',
      author: 'قسم التقنية',
      date: '2024-03-10',
      category: 'تقنية',
      image: 'https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg',
      tags: ['تقنية', 'مختبر', ' الحاسوب']
    },
    {
      title: 'فريق الشطرنج يصل إلى النهائي',
      excerpt: 'فريق الشطرنج في أكاديمية التميز يتأهل إلى نهائي البطولة بعد موسم ممتاز.',
      author: 'قسم الرياضة',
      date: '2024-03-08',
      category: 'رياضة',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg',
      tags: ['رياضة', 'شطرنج', 'بطولة']
    },
    {
      title: 'برنامج MUN',
      excerpt: 'شراكة جديدة مع مدارس أوروبية توفر فرص تبادل ثقافي وتعليمي للطلاب.',
      author: 'قسم البرامج',
      date: '2024-03-05',
      category: 'برامج',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      tags: ['تبادل', 'ثقافي', 'برامج']
    },
    {
      title: 'إضافة تخصص الفيزياء',
      excerpt: "توسيع منهج العلوم لدينا ليشمل تخصص الفيزياء لطلاب الصفوف العليا.",
      author: 'قسم التخصصات',
      date: '2024-03-01',
      category: 'فنون',
      image: 'https://images.pexels.com/photos/5212332/pexels-photo-5212332.jpeg',
      tags: ['فنون', 'معرض', 'إبداع']
    },
    {
      title: 'نادي البيئة يزرع حديقة المدرسة',
      excerpt: 'قام الطلاب بإنشاء مساحة حديقة مستدامة لتعزيز الوعي البيئي والتغذية الصحية.',
      author: 'نادي البيئة',
      date: '2024-02-28',
      category: 'بيئة',
      image: 'https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg',
      tags: ['بيئة', 'استدامة', 'حديقة']
    },
    {
      title: 'برنامج تدريب أولمبياد الرياضيات',
      excerpt: 'برنامج مكثف لتحضير الطلاب للمسابقات الإقليمية والوطنية في الرياضيات.',
      author: 'قسم الرياضيات',
      date: '2024-02-25',
      category: 'أكاديمي',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg',
      tags: ['رياضيات', 'أولمبياد', 'مسابقة']
    },
    {
      title: 'نجاح مؤتمر أولياء الأمور والمعلمين',
      excerpt: 'حضور قياسي في المؤتمرات الفصلية يعزز التعاون بين المدرسة والأسرة.',
      author: 'الإدارة',
      date: '2024-02-20',
      category: 'مجتمع',
      image: 'https://images.pexels.com/photos/5212670/pexels-photo-5212670.jpeg',
      tags: ['أولياء الأمور', 'مجتمع', 'تعليم']
    },
    {
      title: 'نتائج انتخابات مجلس الطلاب',
      excerpt: 'تعرف على ممثليك الجدد الذين سيعبرون عن آراء الطلاب ويقودون المبادرات.',
      author: 'مجلس الطلاب',
      date: '2024-02-15',
      category: 'قيادة',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      tags: ['قيادة', 'مجلس الطلاب', 'ديمقراطية']
    }
  ];

  const upcomingEvents = [
    {
      title: 'معرض العلوم 2024',
      date: '2026-04-15',
      time: '09:00 - 16:00',
      location: 'القاعة الرئيسية'
    },
    {
      title: 'جولة لطلاب تخصص البيولوجيا',
      date: '2026-04-20',
      time: '19:00 - 21:00',
      location: 'الجامعة العبرية'
    },
    {
      title: 'يوم المهنة',
      date: '2026-04-25',
      time: '10:00 - 15:00',
      location: 'الفصول الدراسية المختلفة'
    },
    {
      title: 'يوم الرياضة',
      date: '2026-05-01',
      time: '08:00 - 16:00',
      location: 'المجمع الرياضي'
    }
  ];

  const categories = [
    'الكل',
    'أكاديمي',
    'رياضة',
    'فنون',
    'تقنية',
    'مجتمع',
    'إنجازات',
    'برامج'
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'أكاديمي': styles.academic,
      'رياضة': styles.sports,
      'فنون': styles.arts,
      'تقنية': styles.technology,
      'مجتمع': styles.community,
      'إنجازات': styles.achievement,
      'برامج': styles.programs,
      'بيئة': styles.environment,
      'قيادة': styles.leadership,
      'Facilities': styles.facilities
    };
    return colors[category] || styles.default;
  };

 return (
  <div className={styles.news}>
    <Hero
      title="الأخبار والفعاليات"
      subtitle="ابقَ على اطلاع"
      description="تابع أحدث الأخبار، الإنجازات، والفعاليات القادمة في أكاديمية التميز"
      height="medium"
    />

    <section className={styles.newsContent}>
      <div className={styles.container}>
        <div className={styles.newsLayout}>
          <div className={styles.mainContent}>
            {/* Featured Article */}
            <section className={styles.featured}>
              <Card className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                  <img src={featuredArticle.image} alt={featuredArticle.title} />
                  <div className={styles.featuredOverlay}>
                    <div className={`${styles.featuredCategory} ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </div>
                  </div>
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.featuredMeta}>
                    <div className={styles.metaItem}>
                      <Calendar size={16} />
                      {new Date(featuredArticle.date).toLocaleDateString('ar-EG')}
                    </div>
                    <div className={styles.metaItem}>
                      <User size={16} />
                      {featuredArticle.author}
                    </div>
                  </div>
                  <h1 className={styles.featuredTitle}>{featuredArticle.title}</h1>
                  <p className={styles.featuredExcerpt}>{featuredArticle.excerpt}</p>
                  <p className={styles.featuredText}>{featuredArticle.content}</p>
                  <div className={styles.featuredTags}>
                    {featuredArticle.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </section>

            {/* Category Filter */}
            <section className={styles.categories}>
              <h2 className={styles.sectionTitle}>تصفية حسب الفئة</h2>
              <div className={styles.categoryFilter}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </section>

            {/* News Articles */}
            <section className={styles.articles}>
              <h2 className={styles.sectionTitle}>آخر الأخبار</h2>
              <div className={styles.articlesGrid}>
                {newsArticles.map((article, index) => (
                  <Card key={index} className={styles.articleCard} hoverable>
                    <div className={styles.articleImage}>
                      <img src={article.image} alt={article.title} />
                      <div className={`${styles.articleCategory} ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </div>
                    </div>
                    <div className={styles.articleContent}>
                      <div className={styles.articleMeta}>
                        <div className={styles.metaItem}>
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('ar-EG')}
                        </div>
                        <div className={styles.metaItem}>
                          <User size={14} />
                          {article.author}
                        </div>
                      </div>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <p className={styles.articleExcerpt}>{article.excerpt}</p>
                      <div className={styles.articleTags}>
                        {article.tags.map((tag, idx) => (
                          <span key={idx} className={styles.tagSmall}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={styles.articleActions}>
                        <button className={styles.readMore}>
                          اقرأ المزيد <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Upcoming Events */}
            <Card className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>الفعاليات القادمة</h3>
              <div className={styles.eventsList}>
                {upcomingEvents.map((event, index) => (
                  <div key={index} className={styles.event}>
                    <div className={styles.eventDate}>
                      <div className={styles.eventMonth}>
                        {new Date(event.date).toLocaleDateString('ar-EG', { month: 'short' })}
                      </div>
                      <div className={styles.eventDay}>
                        {new Date(event.date).getDate()}
                      </div>
                    </div>
                    <div className={styles.eventDetails}>
                      <h4 className={styles.eventTitle}>{event.title}</h4>
                      <p className={styles.eventTime}>{event.time}</p>
                      <p className={styles.eventLocation}>{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Links */}
            <Card className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>روابط سريعة</h3>
              <div className={styles.quickLinks}>
                <a href="#" className={styles.quickLink}>
                  التقويم الأكاديمي
                  <ArrowRight size={14} />
                </a>
                <a href="#" className={styles.quickLink}>
                  أرشيف النشرة الإخبارية
                  <ArrowRight size={14} />
                </a>
                <a href="#" className={styles.quickLink}>
                  معرض الصور
                  <ArrowRight size={14} />
                </a>
                <a href="#" className={styles.quickLink}>
                  البيانات الصحفية
                  <ArrowRight size={14} />
                </a>
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>اشترك لتصلك الأخبار</h3>
              <p className={styles.newsletterDescription}>
                اشترك في نشرتنا الإخبارية لتصلك أحدث الأخبار والتحديثات مباشرة إلى بريدك الإلكتروني.
              </p>
              <form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className={styles.emailInput}
                />
                <br />
                <button type="submit" className={styles.subscribeButton}>
                  اشترك
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default News;