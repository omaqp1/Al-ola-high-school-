import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import { Mail, Award, BookOpen, Users, Star } from 'lucide-react';
import styles from './Teachers.module.css';

import def from '../../../public/def.jpg'
const Teachers: React.FC = () => {
  const teachers = [
  {
    name: 'د. احمد محسن ',
    subject: 'الرياضيات',
    education: 'دكتوراه في الرياضيات، جامعة تل أبيب',
    experience: '15 سنة',
    specialties: ['الجبر', 'التفاضل والتكامل', 'الإحصاء'],
    image: def,
    email: 's.cohen@excellence.edu.il',
    achievements: ['جائزة التميز في التدريس 2023', 'باحثة منشورة في الأدب العربي']
  },
  {
    name: 'بروف. دافيد ليفي',
    subject: 'الفيزياء والهندسة',
    education: 'ماجستير في الفيزياء، الجامعة العبرية',
    experience: '12 سنة',
    specialties: ['الفيزياء الكمية', 'الهندسة الميكانيكية', 'البحث المخبري'],
    image: def,
    email: 'd.levy@excellence.edu.il',
    achievements: ['أفضل معلم لعام 2022', 'محكم معرض العلوم لمدة 8 سنوات']
  },
  {
    name: 'الآنسة راشيل جرين',
    subject: 'الأحياء والكيمياء',
    education: 'ماجستير في الكيمياء الحيوية، معهد وايزمان',
    experience: '10 سنوات',
    specialties: ['علم الأحياء الجزيئي', 'الكيمياء العضوية', 'أساليب البحث'],
    image: def,
    email: 'r.green@excellence.edu.il',
    achievements: ['مربية متميزة 2023', 'جائزة اختيار الطلاب 2021']
  },
  {
    name: 'السيد مايكل براون',
    subject: 'الأدب الإنجليزي',
    education: 'ماجستير في الأدب الإنجليزي، جامعة أكسفورد',
    experience: '18 سنة',
    specialties: ['شكسبير', 'الأدب الحديث', 'الكتابة الإبداعية'],
    image: def,
    email: 'm.brown@excellence.edu.il',
    achievements: ['جائزة التميز الأدبي', 'مؤلف منشور لثلاثة كتب']
  },
  {
    name: 'الآنسة مايا احمد',
    subject: 'اللغة العبرية وآدابها',
    education: 'ماجستير في الأدب العبري، جامعة بار-إيلان',
    experience: '14 سنة',
    specialties: ['العبرية الكلاسيكية', 'الشعر الحديث', 'الفنون اللغوية'],
    image: def,
    email: 'm.israeli@excellence.edu.il',
    achievements: ['جائزة التميز في اللغة العبرية', 'قائدة تطوير المناهج']
  },
  {
    name: 'د. أحمد حسن',
    subject: 'التاريخ والعلوم الاجتماعية',
    education: 'دكتوراه في الدراسات الشرق أوسطية، جامعة حيفا',
    experience: '16 سنة',
    specialties: ['تاريخ الشرق الأوسط', 'العلوم السياسية', 'الدراسات الثقافية'],
    image: def,
    email: 'a.hassan@excellence.edu.il',
    achievements: ['تميز قسم التاريخ', 'جائزة القيادة المجتمعية']
  },
  {
    name: 'الآنسة ليزا تشين',
    subject: 'الفنون والتصميم',
    education: 'ماجستير في الفنون البصرية، أكاديمية بتسلئيل',
    experience: '11 سنة',
    specialties: ['التصميم الرقمي', 'الفنون الجميلة', 'التصوير الفوتوغرافي'],
    image: def,
    email: 'l.chen@excellence.edu.il',
    achievements: ['جائزة الإبداع الفني', 'منظمة معرض الفنون الطلابي']
  },
  {
    name: 'السيد دانييل جولد',
    subject: 'الموسيقى والفنون الأدائية',
    education: 'بكالوريوس في أداء الموسيقى، الأكاديمية الموسيقية بالقدس',
    experience: '13 سنة',
    specialties: ['الموسيقى الكلاسيكية', 'نظرية الموسيقى', 'قيادة الأوركسترا'],
    image: def,
    email: 'd.gold@excellence.edu.il',
    achievements: ['جائزة التميز الموسيقي', 'قائد أوركسترا المدرسة']
  }
];


  const departments = [
  {
    name: 'قسم العلوم والتكنولوجيا (STEM)',
    description: 'الرياضيات، العلوم، والتكنولوجيا',
    teachers: 18,
    subjects: ['الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء', 'علوم الحاسوب']
  },
  {
    name: 'قسم العلوم الإنسانية',
    description: 'اللغات، الآداب، والعلوم الاجتماعية',
    teachers: 15,
    subjects: ['اللغة العبرية', 'اللغة الإنجليزية', 'التاريخ', 'الجغرافيا', 'الفلسفة']
  },
  {
    name: 'قسم الفنون',
    description: 'الفنون الإبداعية والأدائية',
    teachers: 8,
    subjects: ['الفنون البصرية', 'الموسيقى', 'المسرح', 'الرقص', 'الإعلام الرقمي']
  },
  {
    name: 'قسم اللغات',
    description: 'اللغات الأجنبية والدراسات الثقافية',
    teachers: 10,
    subjects: ['اللغة العربية', 'اللغة الفرنسية', 'اللغة الإسبانية', 'اللغة الروسية', 'الدراسات الثقافية']
  }
];


  return (
    <div className={styles.teachers}>
      <Hero
        title="تعرف على كادرنا المتميز"
        subtitle="التميز في التعليم"
        description="فريقنا المكرّس من المعلمين ذوي الخبرة ملتزم بإلهام وتوجيه كل طالب نحو النجاح الأكاديمي"
        height="medium"
      />

      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2 className={styles.sectionTitle}>كادر عالمي المستوى</h2>
              <p className={styles.overviewDescription}>
                في أكاديمية التميز، معلمونا أكثر من مجرد مربّين – هم مرشدون، مبتكرون، ومدافعون متحمسون عن نجاح الطالب.
                يجمع كادرنا بين الخبرة المتنوعة، الدرجات العلمية المتقدمة، وسنوات الخبرة التعليمية لخلق بيئة تعليمية لا مثيل لها.
              </p>
              <p className={styles.overviewDescription}>
                كل معلم يتم اختياره بعناية لما يمتلكه من خبرة في مادته، تميّز في التعليم، والتزام بنمو الطالب.
                كما يقومون بتحديث معارفهم وأساليبهم التعليمية باستمرار لضمان حصول طلابنا على أحدث وأفضل طرق التعليم.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>85+</div>
                <div className={styles.statLabel}>معلمون خبراء</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>يحملون درجات علمية متقدمة</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>12</div>
                <div className={styles.statLabel}>متوسط سنوات الخبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredTeachers}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>كادر متميز</h2>
            <p className={styles.sectionSubtitle}>
              تعرّف على بعض معلمينا المتميزين الذين يجعلون أكاديمية التميز خاصة
            </p>
          </div>
          <div className={styles.teachersGrid}>
            {teachers.map((teacher, index) => (
              <Card key={index} className={styles.teacherCard} hoverable>
                <div className={styles.teacherImage}>
                  <img src={teacher.image} alt={teacher.name} />
                  <div className={styles.contactOverlay}>
                    <a href={`mailto:${teacher.email}`} className={styles.contactButton}>
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
                <div className={styles.teacherContent}>
                  <h3 className={styles.teacherName}>{teacher.name}</h3>
                  <p className={styles.teacherSubject}>{teacher.subject}</p>
                  <div className={styles.teacherDetails}>
                    <div className={styles.teacherDetail}>
                      <BookOpen className={styles.detailIcon} />
                      <span>{teacher.education}</span>
                    </div>
                    <div className={styles.teacherDetail}>
                      <Users className={styles.detailIcon} />
                      <span>{teacher.experience} سنوات خبرة</span>
                    </div>
                  </div>
                  <div className={styles.specialties}>
                    <h4 className={styles.specialtiesTitle}>التخصصات:</h4>
                    <div className={styles.specialtyTags}>
                      {teacher.specialties.map((specialty, idx) => (
                        <span key={idx} className={styles.specialtyTag}>
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>
                      <Award className={styles.achievementIcon} />
                      الإنجازات
                    </h4>
                    <ul className={styles.achievementList}>
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className={styles.achievement}>
                          <Star className={styles.starIcon} />
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

      <section className={styles.departments}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>الأقسام الأكاديمية</h2>
            <p className={styles.sectionSubtitle}>
              يتم تنظيم كادرنا في أقسام متخصصة لتقديم خبرة مركّزة
            </p>
          </div>
          <div className={styles.departmentsGrid}>
            {departments.map((department, index) => (
              <Card key={index} className={styles.departmentCard} hoverable>
                <div className={styles.departmentContent}>
                  <h3 className={styles.departmentName}>{department.name}</h3>
                  <p className={styles.departmentDescription}>{department.description}</p>
                  <div className={styles.departmentStats}>
                    <div className={styles.departmentStat}>
                      <Users className={styles.statIcon} />
                      <span>{department.teachers} معلمون</span>
                    </div>
                  </div>
                  <div className={styles.departmentSubjects}>
                    <h4 className={styles.subjectsTitle}>المواد:</h4>
                    <div className={styles.subjectsList}>
                      {department.subjects.map((subject, idx) => (
                        <span key={idx} className={styles.subjectTag}>
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesContent}>
            <h2 className={styles.sectionTitle}>فلسفتنا التعليمية</h2>
            <div className={styles.valuesList}>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <Users />
                </div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>التعلم المتمركز حول الطالب</h3>
                  <p className={styles.valueDescription}>
                    نكيف أساليبنا التعليمية لتلبية أسلوب التعلم والسرعة الفريدة لكل طالب.
                  </p>
                </div>
              </div>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <BookOpen />
                </div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>الابتكار المستمر</h3>
                  <p className={styles.valueDescription}>
                    يقوم معلمونا بتحديث أساليبهم باستمرار وفق أحدث الأبحاث التعليمية والتقنية.
                  </p>
                </div>
              </div>
              <div className={styles.value}>
                <div className={styles.valueIcon}>
                  <Award />
                </div>
                <div className={styles.valueContent}>
                  <h3 className={styles.valueTitle}>معايير التميّز</h3>
                  <p className={styles.valueDescription}>
                    نحافظ على معايير أكاديمية عالية مع توفير الدعم اللازم لكل طالب للنجاح.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
);
}
export default Teachers;
