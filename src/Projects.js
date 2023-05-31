import React from 'react';

function Project({ titleKey, descriptionKey, t }) {
  const title = t(titleKey);
  const description = t(descriptionKey);

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Adicione as imagens do projeto aqui */}
    </div>
  );
}

function Projects({ t, projects }) {
  return (
    <section>
      <h2>{t('projects.title')}</h2>

      {projects.map((project, index) => (
        <Project
          key={index}
          titleKey={project.titleKey}
          descriptionKey={project.descriptionKey}
          t={t}
        />
      ))}
    </section>
  );
}

export default Projects;