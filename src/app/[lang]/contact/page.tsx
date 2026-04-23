'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function Contact() {
  const params = useParams();
  const { t, language, setLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Sync URL language with context
  React.useEffect(() => {
    if (params.lang && (params.lang === 'en' || params.lang === 'km')) {
      setLanguage(params.lang as 'en' | 'km');
    }
  }, [params.lang, setLanguage]);

  // Initialize page transitions
  usePageTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="starfield" />

      <section className="section">
        <div className="container">
          <div className="section-label">Contact Us</div>
          <h1 className="section-title">Get in <span className="grad-cyan">Touch</span></h1>
          <div className="h-line" />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.8, maxWidth: 800, margin: '0 auto' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section" style={{ padding: '80px clamp(16px, 4vw, 40px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 24 }}>
            {[
              { icon: '📧', title: t('contact.email'), info: [t('contact.email1'), t('contact.email2'), t('contact.responseTime')], color: '#0ABADF' },
              { icon: '📞', title: t('contact.phone'), info: [t('contact.phone1'), t('contact.phone2'), t('contact.phoneHours')], color: '#51B41C' },
              { icon: '📍', title: t('contact.address'), info: [t('contact.addressFull')], color: '#EDEC3A' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(20px, 4vw, 28px)', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#fff' }}>{item.title}</h3>
                {item.info.map((info, j) => (
                  <p key={j} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 6 }}>{info}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{ padding: '80px clamp(16px, 4vw, 40px)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label">Send Message</div>
            <h2 className="section-title">We'd Love to <span className="grad-yellow">Hear</span> From You</h2>
            <div className="h-line" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="glass-card" style={{ padding: 'clamp(24px, 4vw, 40px)', maxWidth: 800, margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 24 }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.formName')}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
                    {t('contact.emailField')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.formEmail')}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
                    {t('contact.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.formPhone')}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
                    {t('contact.serviceInterest')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    <option value="">{t('contact.selectService')}</option>
                    <option value="software-sales">{t('contact.softwareSales')}</option>
                    <option value="software-rental">{t('contact.softwareRental')}</option>
                    <option value="custom-development">{t('contact.customDevelopment')}</option>
                    <option value="cloud-infrastructure">{t('contact.cloudInfrastructure')}</option>
                    <option value="cybersecurity">{t('contact.cybersecurity')}</option>
                    <option value="training-support">{t('contact.trainingSupport')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: 13, marginBottom: 8 }}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.formMessage')}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.2)',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      fontFamily: "'DM Sans', sans-serif",
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #0ABADF, #0E62A2)',
                  border: 'none',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.3s ease'
                }}
              >
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">Got <span className="grad-green">Questions?</span></h2>
            <div className="h-line" style={{ margin: '16px auto 0', background: 'linear-gradient(90deg, #51B41C, #0ABADF)' }} />
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))', gap: 24 }}>
            {[
              { q: t('faq.developmentTime'), a: t('faq.developmentTimeAnswer'), icon: '⏱️' },
              { q: t('faq.training'), a: t('faq.trainingAnswer'), icon: '🎓' },
              { q: t('faq.payment'), a: t('faq.paymentAnswer'), icon: '💳' },
              { q: t('faq.khmerLanguage'), a: t('faq.khmerLanguageAnswer'), icon: '🇰🇭' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(20px, 4vw, 28px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ fontSize: 24, marginRight: 12, background: 'rgba(81,180,28,0.15)', width: 40, height: 40, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: '#fff', margin: 0 }}>{item.q}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontSize: 15 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
