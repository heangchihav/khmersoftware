'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function Services() {
  const params = useParams();
  const { t, language, setLanguage } = useLanguage();

  // Sync URL language with context
  React.useEffect(() => {
    if (params.lang && (params.lang === 'en' || params.lang === 'km')) {
      setLanguage(params.lang as 'en' | 'km');
    }
  }, [params.lang, setLanguage]);

  // Initialize page transitions
  usePageTransition();

  return (
    <>
      <div className="starfield" />

      <section className="section">
        <div className="container">
          <div className="section-label">Our Services</div>
          <h1 className="section-title">Services Built for <span className="grad-cyan">Growth</span></h1>
          <div className="h-line" />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.8, maxWidth: 800, margin: '0 auto' }}>
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Software Sales */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 40, marginBottom: 16 }}>💼</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('services.softwareSales')}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  {t('services.salesDescription')}
                </p>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('services.availableSolutions')}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
                  {[
                    t('services.businessManagement'),
                    t('services.accounting'),
                    t('services.inventory'),
                    t('services.crm'),
                    t('services.pos'),
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: 12, fontSize: 14 }}>{item}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <a href={`/${language}/contact`} className="btn-primary">
                    {t('services.getAQuote')} →
                  </a>
                  <a href={`tel:+85523456789`} className="btn-outline">
                    {t('services.callUs')}
                  </a>
                </div>
              </div>
              <div style={{ background: 'rgba(10,186,223,0.1)', padding: '32px', borderRadius: 16 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#fff' }}>{t('services.keyFeatures')}</h3>
                {[
                  { title: t('services.khmerSupport'), desc: 'Full interface and documentation in Khmer language' },
                  { title: t('services.taxCompliance'), desc: 'Compliant with Cambodian tax regulations' },
                  { title: t('services.multiCurrency'), desc: 'Support for both KHR and USD currencies' },
                  { title: t('services.freeInstallation'), desc: 'Free setup and training included' },
                ].map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 12, marginBottom: 16 }}>
                    <span style={{ color: '#0ABADF', fontSize: 20 }}>✓</span>
                    <div>
                      <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>{feature.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 24, padding: '16px', background: 'linear-gradient(135deg, #0ABADF, #0E62A2)', borderRadius: 12, textAlign: 'center' }}>
                  <p style={{ color: '#fff', fontWeight: 600, marginBottom: 4 }}>{t('services.startingFrom')} $499</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>{t('services.oneTimePayment')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Rental */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
              <div style={{ background: 'rgba(81,180,28,0.1)', padding: '32px', borderRadius: 16 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#fff' }}>{t('services.rentalBenefits')}</h3>
                {[
                  { title: t('services.noUpfront'), desc: 'Start with minimal initial investment' },
                  { title: t('services.flexiblePlans'), desc: 'Monthly or annual subscription options' },
                  { title: t('services.latestVersion'), desc: 'Always get the latest features and updates' },
                  { title: t('services.prioritySupport'), desc: '24/7 technical support included' },
                ].map((benefit, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 12, marginBottom: 16 }}>
                    <span style={{ color: '#51B41C', fontSize: 20 }}>✓</span>
                    <div>
                      <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>{benefit.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{t('services.softwareRental')}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                  {t('services.rentalDescription')}
                </p>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('services.subscriptionPlans')}</h3>
                {[
                  { name: t('services.basicPlan'), price: '$29/month', desc: t('services.essentialFeatures') },
                  { name: t('services.professionalPlan'), price: '$79/month', desc: t('services.advancedFeatures') },
                  { name: t('services.enterprisePlan'), price: '$199/month', desc: t('services.fullFeatured') },
                ].map((plan, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
                    <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>{plan.name} - {plan.price}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{plan.desc}</p>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24 }}>
                  <a href={`/${language}/contact`} className="btn-primary" style={{ background: 'linear-gradient(135deg, #51B41C, #0ABADF)' }}>
                    {t('services.getAQuote')} →
                  </a>
                  <a href={`tel:+85523456789`} className="btn-outline" style={{ borderColor: '#51B41C', color: '#51B41C' }}>
                    {t('services.callUs')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔧</div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 700, marginBottom: 20, color: '#fff' }}>{t('services.customDevelopment')}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                  {t('services.developmentDescription')}
                </p>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('services.developmentServices')}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: 24 }}>
                  {[
                    t('services.webDevelopment'),
                    t('services.mobileDevelopment'),
                    t('services.databaseDevelopment'),
                    t('services.apiDevelopment'),
                    t('services.ecommerce'),
                  ].map((item, i) => (
                    <li key={i} style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: '#A855F7' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <a href={`/${language}/contact`} className="btn-primary" style={{ background: 'linear-gradient(135deg, #A855F7, #0ABADF)' }}>
                    {t('services.getAQuote')} →
                  </a>
                  <a href={`tel:+85523456789`} className="btn-outline" style={{ borderColor: '#A855F7', color: '#A855F7' }}>
                    {t('services.callUs')}
                  </a>
                </div>
              </div>
              <div style={{ background: 'rgba(168,85,247,0.1)', padding: '32px', borderRadius: 16 }}>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#fff' }}>{t('services.developmentProcess')}</h3>
                {[
                  { num: '1', title: t('services.consultation'), desc: t('services.understandingRequirements') },
                  { num: '2', title: t('services.planningDesign'), desc: t('services.creatingSpecifications') },
                  { num: '3', title: t('services.development'), desc: t('services.buildingSolution') },
                  { num: '4', title: t('services.testingDeployment'), desc: t('services.qualityAssurance') },
                  { num: '5', title: t('services.supportMaintenance'), desc: t('services.ongoingAssistance') },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 16, marginBottom: 20 }}>
                    <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #A855F7, #0ABADF)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, flexShrink: 0 }}>
                      {step.num}
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>{step.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 24, padding: '16px', background: 'linear-gradient(135deg, #A855F7, #0ABADF)', borderRadius: 12, textAlign: 'center' }}>
                  <p style={{ color: '#fff', fontWeight: 600, marginBottom: 4 }}>{t('services.customPricing')}</p>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>Based on project scope and requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
