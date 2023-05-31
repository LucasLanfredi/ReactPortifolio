import React, { useState, useEffect } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import Header from './Header';
import Summary from './Summary';
import Projects from './Projects';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: 'projects.project1.title',
      descriptionKey: 'projects.project1.description',
    },
    {
      titleKey: 'projects.project2.title',
      descriptionKey: 'projects.project2.description',
    },
    {
      titleKey: 'projects.project3.title',
      descriptionKey: 'projects.project3.description',
    },
  ];

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    
    <div>
      <Header
        greeting={t('header.greeting')}
        jobTitle={t('header.jobTitle')}
        onChangeLanguage={changeLanguage}
      />
      <Summary professionalSummary={t('summary.professionalSummary')} />
      <Projects t={t} projects={projects} />
    </div>
  );
}

// Configurar i18n
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: require('./locales/en.json')
    },
    pt: {
      translation: require('./locales/pt.json')
    }
  }
});

function RootApp() {
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
}

export default RootApp;