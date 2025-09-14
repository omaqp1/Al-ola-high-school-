
import React from 'react';
import Hero from '../../components/Hero/Hero';
{/*import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';*/}
import { 
  CheckCircle,

} from 'lucide-react';
import styles from './Bagrut.module.css';

const Bagrut: React.FC = () => {

  {/*const subjects = [
    {
      name: 'اللغة العبرية',
      units: '4-5',
      type: 'أساسي',
      description: 'فهم المقروء، الكتابة، تحليل الأدب'
    },
    {
      name: 'اللغة الإنجليزية',
      units: '4-5', 
      type: 'أساسي',
      description: 'إتقان اللغة، الأدب، التعبير الكتابي'
    },
    {
      name: 'الرياضيات',
      units: '3-5',
      type: 'أساسي',
      description: 'الجبر، الهندسة، التفاضل والتكامل (للمستويات المتقدمة)'
    },
    {
      name: 'التاريخ',
      units: '2-3',
      type: 'أساسي',
      description: 'تاريخ إسرائيل والعالم، التحليل التاريخي'
    },
    {
      name: 'المواطنة',
      units: '2',
      type: 'أساسي',
      description: 'المدنيات، الحكومة، القيم الديمقراطية'
    },
    {
      name: 'العلوم',
      units: '3-5',
      type: 'اختياري',
      description: 'فيزياء، كيمياء، أحياء (اختر 1-2)'
    },
    {
      name: 'العلوم الاجتماعية',
      units: '3-4',
      type: 'اختياري',
      description: 'جغرافيا، علم النفس، علم الاجتماع'
    },
    {
      name: 'الفنون',
      units: '3-4',
      type: 'اختياري',
      description: 'الفنون البصرية، الموسيقى، المسرح'
    }
  ];*/}

 {/* const requirements = [
    {
      icon: <Award className={styles.requirementIcon} />,
      title: 'المتطلبات الدنيا',
      points: [
        'على الأقل 20 وحدة استحقاق إجمالاً',
        'يجب إنهاء المواد الأساسية',
        'النجاح في جميع الامتحانات',
        'الحضور المنتظم طوال فترة الدراسة'
      ]
    },
    {
      icon: <Target className={styles.requirementIcon} />,
      title: 'الاستعداد للجامعة',
      points: [
        'الرياضيات: يوصى بـ 4-5 وحدات',
        'الإنجليزية: مطلوب 4-5 وحدات',
        'مواد علمية لبرامج العلوم والهندسة',
        'درجات عالية للبرامج التنافسية'
      ]
    },
    {
      icon: <TrendingUp className={styles.requirementIcon} />,
      title: 'مسار التميز',
      points: [
        '25+ وحدة للتميز الأكاديمي',
        'مستويات متقدمة في المواد الرئيسية',
        'مشاريع بحثية وعروض تقديمية',
        'القيادة وخدمة المجتمع'
      ]
    }
  ];
*/}



  return (
    <div className={styles.bagrut}>
      <Hero
        title="فهم نظام البجروت"
        subtitle="شهادة الثانوية"
        description="دليلك الشامل لامتحانات البجروت والمتطلبات للنجاح الأكاديمي"
        height="medium"
      />

      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>ما هو البجروت؟</h2>
              <p className={styles.overviewDescription}>
                البجروت (בגרות) هو شهادة الثانوية الرسمية في إسرائيل، تعادل شهادة الثانوية العامة مع مؤهلات إضافية لدخول الجامعة. هو نظام امتحانات شامل يقيم معرفة ومهارات الطلاب في عدة مواد.
              </p>
              <p className={styles.overviewDescription}>
                الحصول على شهادة البجروت ضروري للقبول الجامعي في إسرائيل ومعترف بها دولياً. الشهادة تدل ليس فقط على إنهاء المرحلة الثانوية، بل على الجاهزية الأكاديمية للتعليم العالي.
              </p>
              <div className={styles.keyPoints}>
                <div className={styles.keyPoint}>
                  <CheckCircle className={styles.keyPointIcon} />
                  <span>مطلوبة للقبول الجامعي</span>
                </div>
                <div className={styles.keyPoint}>
                  <CheckCircle className={styles.keyPointIcon} />
                  <span>مؤهل معترف به دولياً</span>
                </div>
                <div className={styles.keyPoint}>
                  <CheckCircle className={styles.keyPointIcon} />
                  <span>تظهر التميز الأكاديمي</span>
                </div>
              </div>
            </div>
            <div className={styles.overviewImage}>
              <img 
                src="https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg" 
                alt="طلاب يدرسون"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* أكمل ترجمة باقي الأقسام بنفس النمط */}

    </div>
  );
};

export default Bagrut;
