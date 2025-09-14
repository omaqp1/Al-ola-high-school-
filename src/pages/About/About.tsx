import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';
import styles from './About.module.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className={styles.valueIcon} />,
      title: 'التميّز',
      description: 'نسعى لتحقيق أعلى المعايير في التعليم والتطوير الشخصي.'
    },
    {
      icon: <Heart className={styles.valueIcon} />,
      title: 'النزاهة',
      description: 'نبني الشخصية من خلال الصدق، الاحترام، والسلوك الأخلاقي.'
    },
    {
      icon: <Users className={styles.valueIcon} />,
      title: 'المجتمع',
      description: 'نوفّر بيئة داعمة حيث ينتمي الجميع ويزدهرون.'
    },
    {
      icon: <BookOpen className={styles.valueIcon} />,
      title: 'الابتكار',
      description: 'نتبنى الأفكار والتقنيات الجديدة لتعزيز تجارب التعلّم.'
    }
  ];

  const achievements = [
    {
      icon: <Award className={styles.achievementIcon} />,
      title: 'من أفضل 10 مدارس في بيت حنينا',
      description: 'مصنّفون بين أفضل المؤسسات التعليمية للتميّز الأكاديمي.'
    },
    {
      icon: <Trophy className={styles.achievementIcon} />,
      title: '95% قبول جامعي',
      description: 'خريجونا يحصلون باستمرار على القبول في الجامعات حول العالم.'
    },
    {
      icon: <Star className={styles.achievementIcon} />,
      title: 'نتائج بجروت متميزة',
      description: 'نحقق باستمرار نتائج أعلى من المعدّل في الامتحانات الوطنية.'
    }
  ];

  return (
    <div className={styles.about}>
      <Hero
        title="عن مدرسة العلا"
        subtitle="قصتنا"
        description="نبني قادة الغد من خلال التميّز في التعليم منذ عام 2019"
        height="medium"
      />

      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2 className={styles.sectionTitle}>قصتنا</h2>
              <p className={styles.storyDescription}>
                تأسست مدرسة العلا عام 2019 كمدرسة مجتمعية صغيرة برؤية كبيرة: 
                تقديم تعليم عالمي المستوى يُعدّ الطلاب للنجاح في عالم متغيّر باستمرار. 
                على مر العقود، نمونا لنصبح واحدة من أرقى المؤسسات التعليمية   
                نخدم أكثر من 200 طالب من خلفيات متنوعة.
              </p>
              <p className={styles.storyDescription}>
                التزامنا بالتميّز الأكاديمي يقابله التزامنا بتطوير أفراد متكاملين 
                يساهمون بشكل إيجابي في المجتمع. من خلال أساليب تدريس مبتكرة، 
                وتقنيات متقدّمة، وبيئة حاضنة، نمكّن طلابنا من الوصول إلى كامل إمكاناتهم.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img 
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg" 
                alt="مبنى المدرسة"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <div className={styles.missionItem}>
              <div className={styles.missionHeader}>
                <Eye className={styles.missionIcon} />
                <h3 className={styles.missionTitle}>رؤيتنا</h3>
              </div>
              <p className={styles.missionText}>
                أن نكون مؤسسة تعليمية رائدة تلهم وتمكّن الطلاب ليصبحوا متعلّمين مدى الحياة، 
                ومفكرين نقديين، ومواطنين عالميين مسؤولين يساهمون في بناء عالم أفضل.
              </p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionHeader}>
                <Target className={styles.missionIcon} />
                <h3 className={styles.missionTitle}>مهمتنا</h3>
              </div>
              <p className={styles.missionText}>
                تقديم تعليم استثنائي يجمع بين الصرامة الأكاديمية وتطوير الشخصية، 
                لإعداد الطلاب للنجاح في التعليم العالي والمسيرات المهنية المميزة، 
                مع غرس حب التعلّم وخدمة المجتمع.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>قيمنا الأساسية</h2>
            <p className={styles.sectionSubtitle}>
              هذه المبادئ الأساسية توجه كل ما نقوم به في مدرسة العلا
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <Card key={index} className={styles.valueCard} hoverable>
                <div className={styles.valueContent}>
                  {value.icon}
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.achievements}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>إنجازاتنا</h2>
            <p className={styles.sectionSubtitle}>
              تقدير لالتزامنا بالتميّز التعليمي
            </p>
          </div>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <Card key={index} className={styles.achievementCard}>
                <div className={styles.achievementContent}>
                  {achievement.icon}
                  <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                  <p className={styles.achievementDescription}>{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadership}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>فريق القيادة</h2>
            <p className={styles.sectionSubtitle}>
              تعرّف على المتخصصين المخلصين الذين يقودون مدرسة العلا
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            <Card className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg" 
                  alt="المديرة"
                />
              </div>
              <div className={styles.leaderContent}>
                <h3 className={styles.leaderName}>الدكتورة سارة كوهين</h3>
                <p className={styles.leaderTitle}>المديرة</p>
                <p className={styles.leaderBio}>
                  بخبرة تزيد عن 20 عامًا في التعليم، تقود الدكتورة كوهين مدرستنا برؤية 
                  وتفانٍ نحو نجاح الطلاب.
                </p>
              </div>
            </Card>
            <Card className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img 
                  src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg" 
                  alt="نائب المدير"
                />
              </div>
              <div className={styles.leaderContent}>
                <h3 className={styles.leaderName}>الأستاذ ديفيد ليفي</h3>
                <p className={styles.leaderTitle}>نائب المدير</p>
                <p className={styles.leaderBio}>
                  يشرف الأستاذ ليفي على تطوير المناهج الدراسية ويضمن أن برامجنا الأكاديمية 
                  تلبّي أعلى المعايير.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add these imports at the top
const Trophy = ({ className }: { className: string }) => (
  <Award className={className} />
);

const Star = ({ className }: { className: string }) => (
  <Award className={className} />
);

export default About;
