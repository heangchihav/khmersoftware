'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageTransition } from '@/hooks/usePageTransition';

export default function About() {
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
          <div className="section-label">About Us</div>
          <h1 className="section-title">About <span className="grad-cyan">KhmerSoftware</span></h1>
          <div className="h-line" />
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, lineHeight: 1.8, maxWidth: 800, margin: '0 auto' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: 'clamp(20px, 4vw, 40px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 32, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('about.ourStory')}</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 12 }}>
                  {t('about.storyText1')}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 12 }}>
                  {t('about.storyText2')}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.7, marginBottom: 12 }}>
                  {t('about.storyText3')}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))', gap: 24 }}>
                {[
                  { val: '50+', label: t('about.projectsCompleted'), color: '#0ABADF' },
                  { val: '5+', label: t('about.yearsExperience'), color: '#51B41C' },
                  { val: '100+', label: t('about.happyClients'), color: '#EDEC3A' },
                  { val: '15+', label: t('about.teamMembers'), color: '#0E62A2' },
                ].map((stat, i) => (
                  <div key={i} style={{ textAlign: 'center', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: 12 }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: stat.color, marginBottom: 8 }}>{stat.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 24 }}>
            <div className="glass-card" style={{ padding: 'clamp(24px, 4vw, 32px)' }}>
              <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, #0ABADF, #0E62A2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('about.mission')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                {t('about.missionText')}
              </p>
            </div>
            <div className="glass-card" style={{ padding: 'clamp(24px, 4vw, 32px)' }}>
              <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, #EDEC3A, #51B41C)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, marginBottom: 16, color: '#fff' }}>{t('about.vision')}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">What Sets Us <span className="grad-yellow">Apart</span></h2>
            <div className="h-line" style={{ margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 20 }}>
            {[
              { icon: '🌍', title: t('about.localExpertise'), desc: t('about.localExpertiseText'), color: '#0ABADF' },
              { icon: '💰', title: t('about.affordablePricing'), desc: t('about.affordablePricingText'), color: '#51B41C' },
              { icon: '🕐', title: t('about.support247'), desc: t('about.support247Text'), color: '#EDEC3A' },
              { icon: '🇰🇭', title: t('about.khmerLanguage'), desc: t('about.khmerLanguageText'), color: '#A855F7' },
              { icon: '⚡', title: t('about.fastImplementation'), desc: t('about.fastImplementationText'), color: '#0E62A2' },
              { icon: '✅', title: t('about.qualityGuaranteed'), desc: t('about.qualityGuaranteedText'), color: '#51B41C' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: 'clamp(16px, 3vw, 24px)', textAlign: 'center' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#fff' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: 14 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-glass" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '20px' }}>
              <div className="section-label" style={{ marginBottom: 8, fontSize: 12 }}>Get Started</div>
              <h2 className="section-title" style={{ marginBottom: 12, fontSize: "clamp(28px, 4vw, 42px)" }}>
                Ready to <span className="grad-cyan">Join</span><br />Our Success?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.6, maxWidth: 520, margin: '0 auto 32px', textAlign: 'center' }}>
                {t('common.readyToTransformSubtitle')}
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                <a href={`/${language}/contact`} className="btn-primary" style={{ fontSize: 15, padding: '14px 32px', minWidth: '160px' }}>
                  {t('about.getStarted')} →
                </a>
                <a href={`/${language}/services`} className="btn-outline" style={{ fontSize: 15, padding: '14px 32px', minWidth: '160px' }}>
                  {t('about.viewServices')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
