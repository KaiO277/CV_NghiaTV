import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentProject from '../ContentProject';
import ProjectLinks from '../ProjectLinks';
import ProjectStats from '../ProjectStats';

const ProjectDetail = () => {
    const { id } = useParams(); // 👈 Lấy ID từ URL
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api-cv-tranvannghia.up.railway.app/api/get_all_with_ids/${id}/`)
            .then(res => res.json())
            .then(data => {
                setProjectData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fetch error:', err);
                setLoading(false);
            });
    }, [id]);
    console.log('Project data:', projectData);
    

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
