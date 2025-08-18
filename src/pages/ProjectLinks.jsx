import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectLinks = () => {
    const { i18n, t } = useTranslation();

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm p-6" data-id="t4656jr6" data-line="84-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4" data-id="qrj8a01r" data-line="85-85">{t('project.links_title')}</h3>
                <div className="space-y-3" data-id="azoa7uwh" data-line="86-99">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800" data-id="izh0jly0" data-line="87-90">
                        <i className="fab fa-github mr-2" data-id="0uw5bhh9" data-line="88-88"></i>
                        <span data-id="8suu3vtm" data-line="89-89">{t('project.github')}</span>
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800" data-id="p5yss9ty" data-line="91-94">
                        <i className="fas fa-external-link-alt mr-2" data-id="pmqvumew" data-line="92-92"></i>
                        <span data-id="1kz93mf5" data-line="93-93">{t('project.live_demo')}</span>
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800" data-id="12jxatfj" data-line="95-98">
                        <i className="fas fa-file-alt mr-2" data-id="h56fn0gv" data-line="96-96"></i>
                        <span data-id="m5g20zpo" data-line="97-97">{t('project.case_study')}</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectLinks;