import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { 
  Microscope, 
  Calculator, 
  BookOpen,
  Globe,
  Landmark,
  Leaf,

  Cross
} from 'lucide-react';
import styles from './Specializations.module.css';

const Specializations: React.FC = () => {
  const programs = [
    {
      icon: <Microscope className={styles.programIcon} />,
      title: 'الأحياء ',
      description: 'استكشاف الحياة من الخلايا إلى الأنظمة البيئية، مع التركيز على الفهم العلمي والتفكير النقدي.',
      subjects: ['الخلايا', 'جسم الانسان', 'العمليات الحيوية', 'مختبر الاحياء'  ],
      level: '5 وحدات',
      color: 'blue'
    },
    {
      icon: <Calculator className={styles.programIcon} />,
      title: 'الرياضيات',
      description: 'برنامج متكامل في الرياضيات لتقوية مهارات التفكير والتحليل المنطقي وحل المشكلات.',
      subjects: ['رياضيات متقدمة', 'إحصاء', 'جبر', 'حساب التفاضل والتكامل'],
      level: '5-3 وحدات',
      color: 'green'
    },
    {
      icon: <BookOpen className={styles.programIcon} />,
      title: 'اللغة الإنجليزية',
      description: 'إتقان اللغة الإنجليزية من خلال مهارات القراءة، الكتابة، الاستماع والتحدث.',
      subjects: ['قواعد', 'محادثة', 'كتابة أكاديمية', 'أدب إنجليزي'],
      level: '3-5 وحدات',
      color: 'purple'
    },
    {
      icon: <BookOpen className={styles.programIcon} />,
      title: 'كيمياء',
      description:" استكشاف عالم الذرات والجزيئات، وفهم التفاعلات الكيميائية في الحياة اليومية.",
      subjects: ['كيمياء عضوية', 'كيمياء غير عضوية', 'كيمياء حيوية', 'مخبر '],
      level: '5 وحدات',
      color: 'red'
    },
    {
      icon: <Landmark className={styles.programIcon} />,
      title: 'التاريخ',
      description: 'رحلة عبر العصور لفهم الأحداث التاريخية وكيف أثرت في حاضرنا.',
      subjects: ['التاريخ القديم', 'التاريخ الحديث', 'تاريخ المنطقة', 'السياسة'],
      level: '1-5 وحدات',
      color: 'orange'
    },
    {
      icon: <Cross className={styles.programIcon} />,
      title: 'التربية الدينية',
      description: 'تعلم الأسس الدينية والقيم الأخلاقية مع فهم أعمق للنصوص الدينية.',
      subjects: ['القرآن الكريم', 'الحديث الشريف', 'العقيدة', 'الفقه'],
      level: '1-5 وحدات',
      color: 'teal'
    },
    {
      icon: <Globe className={styles.programIcon} />,
      title: 'الجغرافيا',
      description: 'استكشاف العالم: الطبيعة، الموارد، المجتمعات، والتغيرات البيئية.',
      subjects: ['جغرافيا طبيعية', 'جغرافيا بشرية', 'خرائط', 'تنمية مستدامة'],
      level: '5 وحدات',
      color: 'indigo'
    },
    {
      icon: <Leaf className={styles.programIcon} />,
      title: 'البيئة',
      description: 'فهم النظم البيئية وحماية البيئة من خلال الدراسة والبحث.',
      subjects: ['التلوث البيئي', 'المناخ', 'التنوع الحيوي', 'إدارة الموارد'],
      level: '5 وحدات',
      color: 'pink'
    }
  ];

  const requirements = [
    {
      title: 'المتطلبات الأساسية',
      items: [
        'اللغة العبرية (1-5 وحدات)', 
        'اللغة الإنجليزية (3-5 وحدات)', 
        'الرياضيات (3-5 وحدات)',
        'التاريخ (1-5 وحدات)', 
        'اللغة العربية(1-5 وحدات)'
      ]
    },
    {
      title: 'التخصصات',
      items: [
        'اختر تخصصًا أو تخصصين رئيسيين',
        'إكمال عدد الوحدات المطلوبة',
        'المشاركة في مشاريع عملية',
        'عرض مشروع التخرج النهائي'
      ]
    },
    {
      title: 'دراسات إضافية',
      items: [
        'ابحاث علمية',
        'مشاريع جماعية',
        'ورش عمل',
        'دورات تدريبية'
      ]
    }
  ];

  return (
    <div className={styles.specializations}>
      <Hero
        title="التخصصات الأكاديمية"
        subtitle="اختر طريقك"
        description="اكتشف مجموعة واسعة من البرامج التعليمية المتخصصة المصممة لتناسب اهتماماتك وأهدافك المستقبلية."
        height="medium"
      />

      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>ابحث عن شغفك</h2>
              <p className={styles.overviewDescription}>
                في مدرسة العلا نؤمن أن لكل طالب مواهب واهتمامات فريدة. برامجنا المتنوعة
                تساعدك على استكشاف شغفك مع بناء المعرفة والمهارات اللازمة للنجاح في امتحانات البجروت وما بعدها.
              </p>
              <p className={styles.overviewDescription}>
                كل برنامج يجمع بين الدراسة الأكاديمية الصارمة والتطبيق العملي، مما يضمن
                استعدادك للجامعة والفرص المهنية المستقبلية.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>8</div>
                <div className={styles.statLabel}>تخصصات</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>نسبة نجاح</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>35+</div>
                <div className={styles.statLabel}>مواد دراسية</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.programs}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>برامجنا</h2>
            <p className={styles.sectionSubtitle}>
              اختر من بين مجموعة متنوعة من التخصصات الأكاديمية
            </p>
          </div>
          <div className={styles.programsGrid}>
            {programs.map((program, index) => (
              <Card key={index} className={`${styles.programCard} ${styles[program.color]}`} hoverable>
                <div className={styles.programHeader}>
                  {program.icon}
                  <div className={styles.programLevel}>{program.level}</div>
                </div>
                <div className={styles.programContent}>
                  <h3 className={styles.programTitle}>{program.title}</h3>
                  <p className={styles.programDescription}>{program.description}</p>
                  <div className={styles.programSubjects}>
                    <h4 className={styles.subjectsTitle}>المواضيع الرئيسية:</h4>
                    <ul className={styles.subjectsList}>
                      {program.subjects.map((subject, idx) => (
                        <li key={idx} className={styles.subject}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.requirements}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>متطلبات البرنامج</h2>
            <p className={styles.sectionSubtitle}>
              تعرّف على هيكلية ومتطلبات برامجنا الأكاديمية
            </p>
          </div>
          <div className={styles.requirementsGrid}>
            {requirements.map((requirement, index) => (
              <Card key={index} className={styles.requirementCard}>
                <div className={styles.requirementContent}>
                  <h3 className={styles.requirementTitle}>{requirement.title}</h3>
                  <ul className={styles.requirementList}>
                    {requirement.items.map((item, idx) => (
                      <li key={idx} className={styles.requirementItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>جاهز لاختيار طريقك؟</h2>
            <p className={styles.ctaDescription}>
              مستشارونا الأكاديميون هنا لمساعدتك على اختيار التخصص المناسب الذي يتماشى مع اهتماماتك وأهدافك المستقبلية.
            </p>
            <div className={styles.ctaActions}>
              <Button  size="large" className={styles.mr5}>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  احجز استشارة
                </Link>
              </Button>
              <Button  size="large" className={styles.mr4}>
                <Link to="/bagrut" style={{ textDecoration: 'none' }}>
                  تعرف على البجروت
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specializations;
