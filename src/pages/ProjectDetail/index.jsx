import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentProject from '../ContentProject';
import ProjectLinks from '../ProjectLinks';
import projectsData from '../../locales/projectsData.json'; // Nhập dữ liệu từ file JSON

const ProjectDetail = () => {
    const { id } = useParams(); // Lấy ID từ URL
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Tìm dự án dựa trên ID
        const project = projectsData.find(project => project.id === parseInt(id));
        if (project) {
            setProjectData(project);
        }
        setLoading(false);
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!projectData) return <div>Không có dữ liệu</div>;

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                <ContentProject data={projectData} />
                <div className="md:w-1/3 space-y-6">
                    <ProjectLinks data={projectData} />
                    {/* <ProjectStats data={projectData} /> */}
                </div>
            </div>
        </main>
    );
};

export default ProjectDetail;