import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageSquare,
  Calendar,
  Users,
  GraduationCap,
  HeartHandshake
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiry: '',
    message: '',
    tour: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      inquiry: '',
      message: '',
      tour: false
    });
    alert('شكراً لرسالتك! سنعود إليك قريباً.');
  };

  const contactInfo = [
    {
      icon: <Phone className={styles.contactIcon} />,
      title: 'أرقام الهواتف',
      details: [
        { label: 'المكتب الرئيسي', value: '+972-3-123-4567' },
        { label: 'القبول والتسجيل', value: '+972-3-123-4568' },
        { label: 'الطوارئ', value: '+972-50-123-4569' }
      ]
    },
    {
      icon: <Mail className={styles.contactIcon} />,
      title: 'عناوين البريد الإلكتروني',
      details: [
        { label: 'المعلومات العامة', value: 'info@excellence.edu.il' },
        { label: 'القبول والتسجيل', value: 'admissions@excellence.edu.il' },
        { label: 'المدير/ة', value: 'principal@excellence.edu.il' }
      ]
    },
    {
      icon: <MapPin className={styles.contactIcon} />,
      title: 'العنوان',
      details: [
        { label: 'عنوان المدرسة', value: '123 شارع التعليم' },
        { label: 'تل أبيب', value: 'إسرائيل 61000' },
        { label: 'بالقرب من الحديقة المركزية', value: 'خطوط الحافلات 4، 18، 25' }
      ]
    },
    {
      icon: <Clock className={styles.contactIcon} />,
      title: 'ساعات العمل',
      details: [
        { label: 'الاثنين - الخميس', value: '7:30 صباحًا - 4:30 عصرًا' },
        { label: 'الجمعة', value: '7:30 صباحًا - 1:00 ظهرًا' },
        { label: 'الطوارئ', value: 'متاح 24/7' }
      ]
    }
];


  const departments = [
    {
      icon: <GraduationCap className={styles.departmentIcon} />,
      title: 'الشؤون الأكاديمية',
      contact: 'د. سارة كوهين',
      email: 'academics@excellence.edu.il',
      phone: '+972-3-123-4570',
      description: 'المناهج، الدرجات، والبرامج الأكاديمية'
    },
    {
      icon: <Users className={styles.departmentIcon} />,
      title: 'خدمات الطلاب',
      contact: 'الآنسة راشيل غرين',
      email: 'students@excellence.edu.il',
      phone: '+972-3-123-4571',
      description: 'دعم الطلاب، الإرشاد، والأنشطة'
    },
    {
      icon: <HeartHandshake className={styles.departmentIcon} />,
      title: 'علاقات أولياء الأمور',
      contact: 'السيد دافيد ليفي',
      email: 'parents@excellence.edu.il',
      phone: '+972-3-123-4572',
      description: 'التواصل مع أولياء الأمور ومشاركتهم'
    },
    {
      icon: <Calendar className={styles.departmentIcon} />,
      title: 'القبول والتسجيل',
      contact: 'الآنسة مايا احمد',
      email: 'admissions@excellence.edu.il',
      phone: '+972-3-123-4568',
      description: 'التسجيل وعملية التقديم'
    }
];


  const faqItems = [
    {
      question: 'ما هي متطلبات القبول؟',
      answer: 'يجب على الطلاب تقديم السجلات الأكاديمية، واجتياز اختبارات القبول، وإجراء مقابلة. المتطلبات المحددة تختلف حسب المرحلة الدراسية.'
    },
    {
      question: 'ما هو جدول المدرسة؟',
      answer: 'تبدأ الحصص من الساعة 8:00 صباحًا حتى 1:15 ظهرا من الاثنين إلى الخميس. أما يوم الجمعة و الاحد عطلة.'
    },
    {
      question: 'هل تقدمون منحًا دراسية؟',
      answer: 'نعم، نقدم منحًا دراسية أكاديمية ومنحًا على أساس الحاجة. تواصل مع مكتب القبول للحصول على مزيد من المعلومات.'
    },
    {
      question: 'ما هي الأنشطة اللامنهجية المتاحة؟',
      answer: 'نقدم أكثر من 40 نشاطًا تشمل الرياضة، الفنون، الأندية التكنولوجية، وبرامج خدمة المجتمع.'
    }
];


  return (
    <div className={styles.contact}>
      <Hero
        title="تواصل مع أكاديمية التفوق"
        subtitle="ابقَ على تواصل"
        description="نحن هنا للإجابة على أسئلتك ومساعدتك على اتخاذ خطوتك التالية في رحلتك التعليمية"
        height="medium"
      />

      <section className={styles.contactContent}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            <div className={styles.contactForm}>
              <Card className={styles.formCard}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>أرسل لنا رسالة</h2>
                  <p className={styles.formSubtitle}>
                    املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن
                  </p>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        <User size={16} />
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        <Mail size={16} />
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.input}
                        required
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        <Phone size={16} />
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="+972-XX-XXX-XXXX"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="inquiry" className={styles.label}>
                        نوع الاستفسار
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleInputChange}
                        className={styles.select}
                      >
                        <option value="">اختر نوع الاستفسار</option>
                        <option value="admissions">القبول والتسجيل</option>
                        <option value="academics">البرامج الأكاديمية</option>
                        <option value="activities">الأنشطة اللامنهجية</option>
                        <option value="general">معلومات عامة</option>
                        <option value="support">دعم الطلاب</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      <MessageSquare size={16} />
                      الموضوع *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder="وصف مختصر لاستفسارك"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      required
                      rows={6}
                      placeholder="يرجى تزويدنا بتفاصيل حول استفسارك..."
                    />
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="tour"
                      name="tour"
                      checked={formData.tour}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <label htmlFor="tour" className={styles.checkboxLabel}>
                      أرغب في تحديد موعد لزيارة المدرسة
                    </label>
                  </div>

                  <Button type="submit" variant="primary" size="large" className={styles.Button}>
                    <Send size={16} />
                    إرسال الرسالة
                  </Button>
                </form>
              </Card>
            </div>

            <div className={styles.contactInfo}>
              {/* Contact Information Cards */}
              <div className={styles.infoCards}>
                {contactInfo.map((info, index) => (
                  <Card key={index} className={styles.infoCard}>
                    <div className={styles.infoContent}>
                      <div className={styles.infoHeader}>
                        {info.icon}
                        <h3 className={styles.infoTitle}>{info.title}</h3>
                      </div>
                      <div className={styles.infoDetails}>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className={styles.infoDetail}>
                            <span className={styles.infoLabel}>{detail.label}:</span>
                            <span className={styles.infoValue}>{detail.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className={styles.mapCard}>
                <div className={styles.mapPlaceholder}>
                  <MapPin className={styles.mapIcon} />
                  <h3 className={styles.mapTitle}>قم بزيارة حرمنا الجامعي</h3>
                  <p className={styles.mapDescription}>
                    يقع في قلب تل أبيب، حرمنا الجميل يسهل الوصول إليه 
                    بواسطة المواصلات العامة ويوفر مواقف واسعة للزوار.
                  </p>
                  <Button variant="outline" size="small" className={styles.Button}>
                    الحصول على الاتجاهات
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.departments}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>جهات الاتصال بالأقسام</h2>
            <p className={styles.sectionSubtitle}>
              تواصل مباشرة مع القسم المناسب لاحتياجاتك
            </p>
          </div>
          <div className={styles.departmentsGrid}>
            {departments.map((dept, index) => (
              <Card key={index} className={styles.departmentCard} hoverable>
                <div className={styles.departmentContent}>
                  <div className={styles.departmentHeader}>
                    {dept.icon}
                    <h3 className={styles.departmentTitle}>{dept.title}</h3>
                  </div>
                  <p className={styles.departmentDescription}>{dept.description}</p>
                  <div className={styles.departmentContact}>
                    <div className={styles.contactPerson}>
                      <strong>{dept.contact}</strong>
                    </div>
                    <div className={styles.contactDetails}>
                      <div className={styles.contactDetail}>
                        <Mail size={14} />
                        <a href={`mailto:${dept.email}`}>{dept.email}</a>
                      </div>
                      <div className={styles.contactDetail}>
                        <Phone size={14} />
                        <a href={`tel:${dept.phone}`}>{dept.phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>الأسئلة المتكررة</h2>
            <p className={styles.sectionSubtitle}>
              ابحث عن إجابات سريعة للأسئلة الشائعة حول أكاديمية التفوق
            </p>
          </div>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <Card key={index} className={styles.faqCard}>
                <div className={styles.faqContent}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

};

export default Contact;