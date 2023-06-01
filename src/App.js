import React, { useState, useEffect } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import Header from './Header';
import Projects from './Projects';
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

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
      
      <div class="divbtn">
        <button class="btn" onClick={() => changeLanguage('en')}>English</button>
        <button class="btn" onClick={() => changeLanguage('pt')}>Português</button>
      </div>
      
      <Header
        greeting={t('header.greeting')}
        jobTitle={t('header.jobTitle')}
        professionalSummary={t('summary.professionalSummary')} 
        onChangeLanguage={changeLanguage}
      />
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