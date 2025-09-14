
import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import {  
  Calendar, 
  Award, 
  TrendingUp,
  Clock,
  FileText,
  Settings,
  Download
} from 'lucide-react';
import styles from './Dashboard.module.css';
import def from '../../../public/def.jpg'
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studentInfo = {
  name: 'جوردان سميث',
  id: '2024001',
  grade: 'الصف الحادي عشر',
  class: 'المسار العلمي',
  email: 'jordan.smith@student.excellence.edu.il',
  phone: '+972-50-123-4567',
  avatar: def
};

const currentGrades = [
  { subject: 'الرياضيات', grade: 92, units: 5, trend: 'up' },
  { subject: 'الفيزياء', grade: 88, units: 5, trend: 'up' },
  { subject: 'الكيمياء', grade: 90, units: 4, trend: 'stable' },
  { subject: 'اللغة الإنجليزية', grade: 85, units: 4, trend: 'down' },
  { subject: 'اللغة العبرية', grade: 91, units: 4, trend: 'up' },
  { subject: 'التاريخ', grade: 87, units: 3, trend: 'stable' }
];

const upcomingEvents = [
  {
    title: 'امتحان الرياضيات',
    date: '2024-03-25',
    time: '09:00',
    type: 'امتحان',
    location: 'الغرفة 201'
  },
  {
    title: 'عرض معرض العلوم',
    date: '2024-03-28',
    time: '14:00',
    type: 'عرض',
    location: 'القاعة الرئيسية'
  },
  {
    title: 'اجتماع أولياء الأمور والمعلمين',
    date: '2024-04-02',
    time: '16:00',
    type: 'اجتماع',
    location: 'استراحة المعلمين'
  },
  {
    title: 'رحلة ميدانية - متحف العلوم',
    date: '2024-04-08',
    time: '08:00',
    type: 'النشاط',
    location: 'مغادرة الباص'
  }
];

const assignments = [
  {
    title: 'تقرير مختبر الفيزياء',
    subject: 'الفيزياء',
    dueDate: '2024-03-22',
    status: 'قيد الانتظار',
    priority: 'مرتفع'
  },
  {
    title: 'مقال اللغة الإنجليزية - تحليل أدبي',
    subject: 'اللغة الإنجليزية',
    dueDate: '2024-03-24',
    status: 'قيد التقدم',
    priority: 'متوسط'
  },
  {
    title: 'مجموعة مسائل الرياضيات رقم 12',
    subject: 'الرياضيات',
    dueDate: '2024-03-26',
    status: 'لم يبدأ',
    priority: 'متوسط'
  },
  {
    title: 'مشروع بحث التاريخ',
    subject: 'التاريخ',
    dueDate: '2024-03-30',
    status: 'مكتمل',
    priority: 'منخفض'
  }
];

const achievements = [
  { title: 'جائزة التميز في الرياضيات', date: '2024-02-15', type: 'academic' },
  { title: 'المركز الثاني في معرض العلوم', date: '2024-01-20', type: 'competition' },
  { title: 'حضور كامل - الفصل الأول', date: '2024-01-10', type: 'attendance' },
  { title: 'ممثل مجلس الطلاب', date: '2023-09-01', type: 'leadership' }
];


  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: <TrendingUp size={18} /> },
    { id: 'grades', label: 'الدرجات', icon: <Award size={18} /> },
    { id: 'schedule', label: 'الجدول الزمني', icon: <Calendar size={18} /> },
    { id: 'assignments', label: 'الواجبات', icon: <FileText size={18} /> },
    { id: 'achievements', label: 'الإنجازات', icon: <Award size={18} /> }
  ];

  const getGradeTrend = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className={`${styles.trendIcon} ${styles.up}`} size={16} />;
      case 'down':
        return <TrendingUp className={`${styles.trendIcon} ${styles.down}`} size={16} />;
      default:
        return <div className={styles.trendStable}>•</div>;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return styles.excellent;
    if (grade >= 80) return styles.good;
    if (grade >= 70) return styles.fair;
    return styles.needsImprovement;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return styles.completed;
      case 'in-progress':
        return styles.inProgress;
      case 'pending':
        return styles.pending;
      default:
        return styles.notStarted;
    }
  };

  const renderOverview = () => (
    <div className={styles.overview}>
      <div className={styles.overviewGrid}>
        <Card className={styles.statsCard}>
          <div className={styles.statsContent}>
            <h3 className={styles.statsTitle}>الأداء الأكاديمي</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>89.5</div>
                <div className={styles.statLabel}>المعدل العام</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25</div>
                <div className={styles.statLabel}>إجمالي الوحدات</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>4.2</div>
                <div className={styles.statLabel}>المعدل التراكمي</div>
              </div>
            </div>
          </div>
        </Card>

        <Card className={styles.quickActions}>
          <h3 className={styles.cardTitle}>إجراءات سريعة</h3>
          <div className={styles.actionButtons}>
            <Button variant="primary" onClick={() => setActiveTab('grades')}>
              <Award size={16} />
              عرض الدرجات
            </Button>
            <Button variant="outline" onClick={() => setActiveTab('assignments')}>
              <FileText size={16} />
              عرض الواجبات
            </Button>
            <Button variant="ghost">
              <Download size={16} />
              تحميل التقارير
            </Button>
          </div>
        </Card>
      </div>

      <div className={styles.recentActivity}>
        <Card>
          <h3 className={styles.cardTitle}>النشاط الأخيرة</h3>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <Award className={styles.icon} />
              </div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>تم نشر درجة جديدة: الرياضيات</div>
                <div className={styles.activityDate}>منذ ساعتين</div>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <FileText className={styles.icon} />
              </div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>تم تقديم الواجب: مختبر الفيزياء</div>
                <div className={styles.activityDate}>منذ يوم</div>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityIcon}>
                <Calendar className={styles.icon} />
              </div>
              <div className={styles.activityContent}>
                <div className={styles.activityTitle}>القادم: عرض معرض العلوم</div>
                <div className={styles.activityDate}>بعد 3 أيام</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className={styles.grades}>
      <div className={styles.gradesHeader}>
        <h3 className={styles.sectionTitle}>الدرجات الحالية</h3>
        <Button variant="outline" size="small" className={styles.downloadButton}>
          <Download size={16} />
          تحميل التقرير
        </Button>
      </div>
      <div className={styles.gradesGrid}>
        {currentGrades.map((grade, index) => (
          <Card key={index} className={styles.gradeCard}>
            <div className={styles.gradeContent}>
              <div className={styles.gradeHeader}>
                <div className={styles.gradeSubject}>{grade.subject}</div>
                <div className={styles.gradeTrend}>
                  {getGradeTrend(grade.trend)}
                </div>
              </div>
              <div className={styles.gradeScore}>
                <span className={`${styles.score} ${getGradeColor(grade.grade)}`}>
                  {grade.grade}
                </span>
                <span className={styles.units}>{grade.units} وحدات</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className={styles.schedule}>
      <h3 className={styles.sectionTitle}>الأحداث القادمة</h3>
      <div className={styles.eventsList}>
        {upcomingEvents.map((event, index) => (
          <Card key={index} className={styles.eventCard}>
            <div className={styles.eventContent}>
              <div className={styles.eventDate}>
                <div className={styles.eventMonth}>
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className={styles.eventDay}>
                  {new Date(event.date).getDate()}
                </div>
              </div>
              <div className={styles.eventDetails}>
                <h4 className={styles.eventTitle}>{event.title}</h4>
                <div className={styles.eventMeta}>
                  <div className={styles.eventTime}>
                    <Clock size={14} />
                    {event.time}
                  </div>
                  <div className={styles.eventLocation}>{event.location}</div>
                </div>
              </div>
              <div className={`${styles.eventType} ${styles[event.type]}`}>
                {event.type}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className={styles.assignments}>
      <h3 className={styles.sectionTitle}>الواجبات</h3>
      <div className={styles.assignmentsList}>
        {assignments.map((assignment, index) => (
          <Card key={index} className={styles.assignmentCard}>
            <div className={styles.assignmentContent}>
              <div className={styles.assignmentHeader}>
                <h4 className={styles.assignmentTitle}>{assignment.title}</h4>
                <div className={`${styles.assignmentStatus} ${getStatusColor(assignment.status)}`}>
                  {assignment.status.replace('-', ' ')}
                </div>
              </div>
              <div className={styles.assignmentMeta}>
                <div className={styles.assignmentSubject}>{assignment.subject}</div>
                <div className={styles.assignmentDue}>
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </div>
              </div>
              <div className={`${styles.assignmentPriority} ${styles[assignment.priority]}`}>
                {assignment.priority} أولوية
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className={styles.achievements}>
      <h3 className={styles.sectionTitle}>الإنجازات والجوائز</h3>
      <div className={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <Card key={index} className={styles.achievementCard}>
            <div className={styles.achievementContent}>
              <div className={styles.achievementIcon}>
                <Award className={styles.icon} />
              </div>
              <div className={styles.achievementDetails}>
                <h4 className={styles.achievementTitle}>{achievement.title}</h4>
                <div className={styles.achievementDate}>
                  {new Date(achievement.date).toLocaleDateString()}
                </div>
                <div className={`${styles.achievementType} ${styles[achievement.type]}`}>
                  {achievement.type}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.dashboard}>
      <Hero
        title="لوحة معلومات الطالب"
        subtitle="رحلتك الأكاديمية"
        description="تتبع تقدمك، عرض الدرجات، والبقاء منظمًا مع جميع معلوماتك الأكاديمية في مكان واحد"
        height="small"
      />

      <section className={styles.dashboardContent}>
        <div className={styles.container}>
          <div className={styles.dashboardLayout}>
            <div className={styles.sidebar}>
              <Card className={styles.profileCard}>
                <div className={styles.profileContent}>
                  <img 
                    src={studentInfo.avatar} 
                    alt={studentInfo.name}
                    className={styles.profileAvatar}
                  />
                  <div className={styles.profileInfo}>
                    <h3 className={styles.profileName}>{studentInfo.name}</h3>
                    <p className={styles.profileId}>ID: {studentInfo.id}</p>
                    <p className={styles.profileGrade}>{studentInfo.grade}</p>
                    <p className={styles.profileClass}>{studentInfo.class}</p>
                  </div>
                  <Button variant="ghost" size="small">
                    <Settings size={16} />
                    Settings
                  </Button>
                </div>
              </Card>

              <Card className={styles.navigation}>
                <nav className={styles.navList}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`${styles.navItem} ${activeTab === tab.id ? styles.navItemActive : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </Card>
            </div>

            <div className={styles.mainContent}>
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'grades' && renderGrades()}
              {activeTab === 'schedule' && renderSchedule()}
              {activeTab === 'assignments' && renderAssignments()}
              {activeTab === 'achievements' && renderAchievements()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;