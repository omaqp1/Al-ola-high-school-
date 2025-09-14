import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Trophy, 
  Music, 
  Palette, 
  Computer, 
  Globe,
  Heart,
  Zap,
  Target,
  Calendar
} from 'lucide-react';
import styles from './Activities.module.css';

const Activities: React.FC = () => {
  const activityCategories = [
    {
      icon: <Trophy className={styles.categoryIcon} />,
      title: ' الشطرنج',
      description: 'نوادي الشطرنج، البطولات، ودروس الاستراتيجية',
      count: 12,
      color: 'sports'
    },
    {
      icon: <Music className={styles.categoryIcon} />,
      title: 'الموسيقى والأداء',
      description: 'أوركسترا، جوقة، فرقة موسيقية، وعروض مسرحية',
      count: 8,
      color: 'music'
    },
    {
      icon: <Palette className={styles.categoryIcon} />,
      title: 'الفنون والإبداع',
      description: 'الفنون البصرية، التصميم الرقمي، وورشات العمل الإبداعية',
      count: 6,
      color: 'arts'
    },
    {
      icon: <Computer className={styles.categoryIcon} />,
      title: 'التكنولوجيا والابتكار',
      description: 'أندية البرمجة، الروبوتات، ومسابقات العلوم والتكنولوجيا',
      count: 7,
      color: 'tech'
    },
    {
      icon: <Globe className={styles.categoryIcon} />,
      title: 'الثقافة واللغات',
      description: 'أندية دولية وجمعيات لغوية',
      count: 5,
      color: 'culture'
    },
    {
      icon: <Heart className={styles.categoryIcon} />,
      title: 'خدمة المجتمع',
      description: 'أعمال تطوعية ومشاريع ذات أثر اجتماعي',
      count: 9,
      color: 'service'
    }
  ];

  const featuredActivities = [
    {
      title: "نادي الشطرنج",
      category: 'الرياضة',
      description: 'نمي مهارات التفكير الاستراتيجي والتخطيط من خلال المنافسة الودية والدروس.',
      schedule: 'الثلاثاء والخميس، 17:00-15:30',
      location: 'مختبر الحاسوب 2',
      members: 14,
      level: 'كل المستويات',
      image: '../../../public/Chess-pieces.webp',
      achievements: ['فوز الطالبان عمر مهلوس و مصطفى بالبطولة', 'تأهل للنهائيات '],
      skills: ['التركيز', 'التفكير الاستراتيجي', 'حل المشكلات', ' التفكير النقدي']
    },
    {
      title: 'علم الفلك',
      category: 'الأكاديميا',
      description: 'استكشاف الكون، النجوم، والكواكب من خلال الأنشطة العملية والنظرية.',
      schedule: 'الاثنين والأربعاء، 17:30-16:00',
      location: 'قاعة العلوم',
      members: 15,
      level: 'مبتدئ إلى متقدم',
      image: '../../../public/space-and-astronomy.webp',
      achievements: ['نجاح حفل الربيع', 'جوائز الأداء المجتمعي'],
      skills: ['التفكير النقدي', 'تعلم بإستمرار', 'استكشاف', 'تفكير إبداعي']
    },
    {
      title: 'نادي العمل البيئي',
      category: 'خدمة المجتمع',
      description: 'تعزيز الاستدامة والوعي البيئي من خلال مشاريع في الحرم الجامعي والمجتمع.',
      schedule: 'الجمعة، 15:30-14:00',
      location: 'مبنى العلوم',
      members: 18,
      level: 'كل المستويات',
      image: 'https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg',
      achievements: ['مشروع الحديقة المدرسية', 'قيادة مبادرة إعادة التدوير'],
      skills: ['القيادة', 'علوم البيئة', 'إدارة المشاريع', 'المناصرة']
    },
    {
      title: 'فريق كرة السلة',
      category: 'الرياضة',
      description: 'المشاركة في بطولات المنطقة وتطوير المهارات الرياضية وروح الفريق.',
      schedule: 'الاثنين، الأربعاء، الجمعة، 16:30-15:00',
      location: 'المجمع الرياضي',
      members: 18,
      level: 'تنافسي',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg',
      achievements: ['نصف نهائي المنطقة', 'جائزة الروح الرياضية'],
      skills: ['الأداء الرياضي', 'التفكير الاستراتيجي', 'القيادة', 'اللياقة البدنية']
    },
    {
      title: 'استوديو الفنون الرقمية',
      category: 'الفنون',
      description: 'إنشاء أعمال فنية رقمية ورسوم متحركة ومشاريع وسائط متعددة باستخدام برامج احترافية.',
      schedule: 'الثلاثاء، 16:30-15:00',
      location: 'استوديو الفنون',
      members: 22,
      level: 'مبتدئ إلى متقدم',
      image: 'https://images.pexels.com/photos/5212332/pexels-photo-5212332.jpeg',
      achievements: ['معرض الفن الطلابي', 'جوائز الوسائط الرقمية'],
      skills: ['التصميم الرقمي', 'التفكير الإبداعي', 'المهارات التقنية', 'التواصل البصري']
    },
    {
      title: 'نموذج الأمم المتحدة',
      category: 'الأكاديميا',
      description: 'تطوير مهارات الدبلوماسية والنقاش أثناء مناقشة القضايا والحلول العالمية.',
      schedule: 'الخميس، 17:30-16:00',
      location: 'قاعة المؤتمرات',
      members: 28,
      level: 'كل المستويات',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      achievements: ['مؤتمر الأمم المتحدة الإقليمي', 'جائزة أفضل وفد'],
      skills: ['الإلقاء', 'البحث', 'الدبلوماسية', 'التفكير النقدي']
    }
  ];

  const upcomingEvents = [
    {
      title: 'عرض المواهب السنوي',
      date: '2024-04-15',
      time: '19:00',
      location: 'القاعة الرئيسية',
      type: 'الأداء'
    },
    {
      title: 'مسابقة معرض العلوم',
      date: '2024-04-22',
      time: '09:00',
      location: 'مبنى العلوم',
      type: 'الأكاديميا'
    },
    {
      title: 'بطولة الرياضة',
      date: '2024-04-28',
      time: '14:00',
      location: 'المجمع الرياضي',
      type: 'الرياضة'
    },
    {
      title: 'افتتاح معرض الفن',
      date: '2024-05-05',
      time: '18:00',
      location: 'معرض الفن',
      type: 'الفنون'
    }
  ];

  const benefits = [
    {
      icon: <Target className={styles.benefitIcon} />,
      title: 'تطوير المهارات',
      description: 'اكتسب مواهب جديدة وعزز قدراتك من خلال الخبرة العملية'
    },
    {
      icon: <Users className={styles.benefitIcon} />,
      title: 'الروابط الاجتماعية',
      description: 'ابنِ صداقات دائمة ووسّع شبكتك الاجتماعية مع زملاء يشاركونك الاهتمامات'
    },
    {
      icon: <Trophy className={styles.benefitIcon} />,
      title: 'الاعتراف بالإنجازات',
      description: 'احصل على التقدير لجهودك وإنجازاتك في مختلف المسابقات والفعاليات'
    },
    {
      icon: <Zap className={styles.benefitIcon} />,
      title: 'النمو الشخصي',
      description: 'ابنِ الثقة ومهارات القيادة واكتشف اهتمامات وشغف جديد'
    }
  ];

  return (
    <div className={styles.activities}>
      <Hero
        title="الأنشطة اللامنهجية"
        subtitle="ما وراء الصفوف الدراسية"
        description="اكتشف شغفك وطور مهارات جديدة من خلال مجموعتنا المتنوعة من الأندية والرياضة والأنشطة"
        height="medium"
      />

      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>أثري تجربتك</h2>
              <p className={styles.overviewDescription}>
                في مدرسة العلا، يمتد التعلم إلى ما وراء الصفوف الدراسية. برنامجنا الشامل للأنشطة 
                اللامنهجية يوفر للطلاب فرصًا لاستكشاف اهتماماتهم، 
                تطوير مهارات جديدة، وبناء صداقات دائمة أثناء متابعة شغفهم.
              </p>
              <p className={styles.overviewDescription}>
                سواء كنت مهتمًا بالرياضة، الفنون، التكنولوجيا، أو خدمة المجتمع، 
                لدينا أنشطة ستلهمك وتتحداك لتنمو على الصعيد الشخصي 
                والأكاديمي.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>47</div>
                <div className={styles.statLabel}>أندية نشطة</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>850+</div>
                <div className={styles.statLabel}>مشاركون</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>جوائز محققة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>فئات الأنشطة</h2>
            <p className={styles.sectionSubtitle}>
              استكشف مجموعتنا الواسعة من فئات الأنشطة وابحث عن ما يناسبك
            </p>
          </div>
          <div className={styles.categoriesGrid}>
            {activityCategories.map((category, index) => (
              <Card key={index} className={`${styles.categoryCard} ${styles[category.color]}`} hoverable>
                <div className={styles.categoryContent}>
                  {category.icon}
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  <div className={styles.categoryCount}>
                    {category.count} نشاط
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>أنشطة مميزة</h2>
            <p className={styles.sectionSubtitle}>
              اكتشف بعضًا من أكثر برامجنا شعبية ونجاحًا
            </p>
          </div>
          <div className={styles.activitiesGrid}>
            {featuredActivities.map((activity, index) => (
              <Card key={index} className={styles.activityCard} hoverable>
                <div className={styles.activityImage}>
                  <img src={activity.image} alt={activity.title} />
                  <div className={styles.activityCategory}>{activity.category}</div>
                </div>
                <div className={styles.activityContent}>
                  <div className={styles.activityHeader}>
                    <h3 className={styles.activityTitle}>{activity.title}</h3>
                    <div className={styles.activityLevel}>{activity.level}</div>
                  </div>
                  <p className={styles.activityDescription}>{activity.description}</p>
                  
                  <div className={styles.activityDetails}>
                    <div className={styles.activityDetail}>
                      <Calendar className={styles.detailIcon} />
                      <span>{activity.schedule}</span>
                    </div>
                    <div className={styles.activityDetail}>
                      <Users className={styles.detailIcon} />
                      <span>{activity.members} عضو</span>
                    </div>
                  </div>

                  <div className={styles.activitySkills}>
                    <h4 className={styles.skillsTitle}>المهارات المطوّرة:</h4>
                    <div className={styles.skillTags}>
                      {activity.skills.map((skill, idx) => (
                        <span key={idx} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.activityAchievements}>
                    <h4 className={styles.achievementsTitle}>أحدث الإنجازات:</h4>
                    <ul className={styles.achievementsList}>
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className={styles.achievement}>
                          <Trophy className={styles.achievementIcon} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>لماذا تنضم لأنشطتنا؟</h2>
            <p className={styles.sectionSubtitle}>
              اكتشف فوائد المشاركة في الأنشطة اللامنهجية
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <Card key={index} className={styles.benefitCard}>
                <div className={styles.benefitContent}>
                  {benefit.icon}
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.events}>
        <div className={styles.container}>
          <div className={styles.eventsContent}>
            <div className={styles.eventsText}>
              <h2 className={styles.sectionTitle}>الفعاليات القادمة</h2>
              <p className={styles.eventsDescription}>
                لا تفوّت هذه الفعاليات والمنافسات المثيرة. 
                انضم إلينا ونحن نحتفل بالمواهب، الإنجازات، وروح المجتمع.
              </p>
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
                      <div className={styles.eventMeta}>
                        <span className={styles.eventTime}>{event.time}</span>
                        <span className={styles.eventLocation}>{event.location}</span>
                      </div>
                      <div className={`${styles.eventType} ${styles[event.type.toLowerCase()]}`}>
                        {event.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.eventsImage}>
              <img 
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg" 
                alt="طلاب يشاركون في الأنشطة"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>جاهز للمشاركة؟</h2>
            <p className={styles.ctaDescription}>
              انضم إلى أحد أنشطتنا المتنوعة وابدأ رحلتك في الاكتشاف، 
              النمو، والإنجاز. مرحب بالأعضاء الجدد دائمًا!
            </p>
            <div className={styles.ctaActions}>
              <Button  className={styles.mr4}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  سجّل اليوم
                </Link>
              </Button>
              <Button  className={styles.mr5}>
                <Link to="/dashboard" style={{  textDecoration: 'none' }}>
                  عرض الجدول
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
