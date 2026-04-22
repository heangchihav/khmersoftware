'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const params = useParams();
  const { t, language, setLanguage } = useLanguage();

  // Sync URL language with context
  React.useEffect(() => {
    if (params.lang && (params.lang === 'en' || params.lang === 'km')) {
      setLanguage(params.lang as 'en' | 'km');
    }
  }, [params.lang, setLanguage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Software Sales */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.softwareSales')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.salesDescription')}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.availableSolutions')}</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.businessManagement')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.accounting')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.inventory')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.crm')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.pos')}
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href={`/${language}/contact`} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  {t('services.getAQuote')}
                </a>
                <a href={`tel:+85523456789`} className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                  {t('services.callUs')}
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('services.keyFeatures')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.khmerSupport')}</h4>
                    <p className="text-gray-600">Full interface and documentation in Khmer language</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.taxCompliance')}</h4>
                    <p className="text-gray-600">Compliant with Cambodian tax regulations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.multiCurrency')}</h4>
                    <p className="text-gray-600">Support for both KHR and USD currencies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.freeInstallation')}</h4>
                    <p className="text-gray-600">Free setup and training included</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-blue-600 text-white rounded-lg">
                <p className="text-sm font-medium mb-2">{t('services.startingFrom')} $499</p>
                <p className="text-xs opacity-90">{t('services.oneTimePayment')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Rental */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('services.rentalBenefits')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.noUpfront')}</h4>
                    <p className="text-gray-600">Start with minimal initial investment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.flexiblePlans')}</h4>
                    <p className="text-gray-600">Monthly or annual subscription options</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.latestVersion')}</h4>
                    <p className="text-gray-600">Always get the latest features and updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.prioritySupport')}</h4>
                    <p className="text-gray-600">24/7 technical support included</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.softwareRental')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.rentalDescription')}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.subscriptionPlans')}</h3>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{t('services.basicPlan')} - $29/month</h4>
                  <p className="text-gray-600 text-sm">{t('services.essentialFeatures')}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{t('services.professionalPlan')} - $79/month</h4>
                  <p className="text-gray-600 text-sm">{t('services.advancedFeatures')}</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">{t('services.enterprisePlan')} - $199/month</h4>
                  <p className="text-gray-600 text-sm">{t('services.fullFeatured')}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href={`/${language}/contact`} className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                  {t('services.getAQuote')}
                </a>
                <a href={`tel:+85523456789`} className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">
                  {t('services.callUs')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.customDevelopment')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('services.developmentDescription')}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('services.developmentServices')}</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.webDevelopment')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.mobileDevelopment')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.databaseDevelopment')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.apiDevelopment')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {t('services.ecommerce')}
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href={`/${language}/contact`} className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
                  {t('services.getAQuote')}
                </a>
                <a href={`tel:+85523456789`} className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition">
                  {t('services.callUs')}
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('services.developmentProcess')}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.consultation')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.understandingRequirements')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.planningDesign')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.creatingSpecifications')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.development')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.buildingSolution')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.testingDeployment')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.qualityAssurance')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('services.supportMaintenance')}</h4>
                    <p className="text-gray-600 text-sm">{t('services.ongoingAssistance')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-purple-600 text-white rounded-lg">
                <p className="text-sm font-medium mb-2">{t('services.customPricing')}</p>
                <p className="text-xs opacity-90">Based on project scope and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KhmerSoftware. {t('common.allRightsReserved')} | {t('common.servingCambodia')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
