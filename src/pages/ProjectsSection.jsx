import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projectsData from '../locales/projectsData.json'; // Đảm bảo đường dẫn đúng
import image1 from "../assets/images/projects/image1.png";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchProjects = () => {
      setProjects(projectsData); // Sử dụng dữ liệu từ file JSON
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center py-16">{t('loading') || 'Loading projects...'}</div>;
  }

  if (!projects.length) {
    return <div className="text-center py-16 text-red-500">{t('no_projects') || 'No projects available.'}</div>;
  }

  return (
    <div id="projects" className="bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('projects_title') || 'Featured Projects'}</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                className="w-full h-48 object-cover"
                src={project.image} // Sử dụng đường dẫn từ file JSON
                alt={project.name || 'Project Image'}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">
                  {i18n.language === 'vi' ? project.description_vn : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.languages?.map((language, langIndex) => (
                    <span key={langIndex} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {language.name}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-primary font-medium inline-flex items-center"
                >
                  {t('view_project') || 'View Project'}
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;