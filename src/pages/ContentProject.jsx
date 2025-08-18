import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentProject = ({ data }) => {
  const { i18n, t } = useTranslation();
  const BASE_IMAGE_URL = "https://res.cloudinary.com/dzdpbg0wg/";

  // Lấy mô tả dài dựa trên ngôn ngữ hiện tại
  const description =
    i18n.language === 'vi'
      ? data.project_details[0]?.description_long_vn
      : data.project_details[0]?.description_long;

    const date =
    i18n.language === 'vi'
      ? data.project_details[0]?.date_vn
      : data.project_details[0]?.date;

    return (
        <>
            <div className="md:w-2/3 " data-id="kq3jfg58" data-line="29-81">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden" data-id="yyi4es23" data-line="30-80">
                    <img 
                        src={
                        data.image?.startsWith("http")
                            ? data.image
                            : `${BASE_IMAGE_URL}${data.image}`
                        }
                        alt={data.name || 'Project Image'}
                        className="w-full h-64 md:h-96 object-cover" 
                        data-id="z3bgcbuk" 
                        data-line="31-31"
                    />
                    <div className="p-6" data-id="aouxf3z9" data-line="32-79">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2" data-id="r8bj1wb7" data-line="33-33">{data.name}</h1>
                        <div className="flex items-center space-x-4 mb-6" data-id="028arrii" data-line="34-37">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-id="rrhedkdl" data-line="35-35">{data.project_details[0]?.name_type}</span>
                            <span className="text-gray-500" data-id="lf9s9gjp" data-line="36-36">
                                <i className="far fa-calendar-alt mr-1" data-id="5oeg9rah" data-line="36-36"></i> {date}
                            </span>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed" data-id="v78lct2e" data-line="38-40">
                            {description}
                        </p>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3" data-id="p30ktj7h" data-line="41-41">{t('project.features_title')}</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8" data-id="scabwu5a" data-line="42-67">
                            {data.project_details?.[0]?.features?.map((feature) => (
                                <li key={feature.id} className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-700">{feature.name}</span>
                                </li>
                            ))}
                        </ul>
                        <h2 className="text-xl font-semibold text-gray-800 mb-3" data-id="za0iiir1" data-line="68-68">{t('project.technologies_title')}</h2>
                        <div className="flex flex-wrap gap-3 mb-8" data-id="93j5uz2f" data-line="69-78">
                            {data.languages?.map((lang) => (
                                <span
                                key={lang.id}
                                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                                >
                                {lang.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentProject;