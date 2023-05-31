import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Header from './Header';
import Summary from './Summary';
import Projects from './Projects';

function App() {
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
  ];

  return (
    <div>
      <Header
        greeting={t('header.greeting')}
        jobTitle={t('header.jobTitle')}
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

export default App;