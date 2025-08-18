import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            toast.error(t('contacts.form.validationError'));
            return;
        }

        try {
            const response = await axios.post('https://api-cv-tranvannghia.up.railway.app/api/contact/', formData);
            if (response.status === 200) {
                toast.success(t('contacts.form.successMessage'));
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error(t('contacts.form.failMessage'));
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(t('contacts.form.errorMessage'));
        }
    };

    return (
        <>
            <ToastContainer />
            <div id="contact" className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('contacts.title')}</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('contacts.contactInfoTitle')}</h3>
                            <p className="text-gray-600 mb-8">{t('contacts.introText')}</p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-medium text-gray-900">{t('contacts.location')}</h4>
                                        <p className="text-sm text-gray-500">{t('contacts.locationText')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <a href="mailto:nghiatran1527@gmail.com" className="hover:underline">
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-900">{t('contacts.email')}</h4>
                                            <p className="text-sm text-gray-500">{t('contacts.emailAddress')}</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-medium text-gray-900">{t('contacts.phone')}</h4>
                                        <p className="text-sm text-gray-500">{t('contacts.phoneNumber')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <a 
                                        href="https://www.facebook.com/imKaiO7/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:underline text-primary"
                                    >
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-900">{t('contacts.facebook')}</h4>
                                            <p className="text-sm text-gray-500">{t('contacts.facebookName')}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('contacts.form.firstName')}</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('contacts.form.lastName')}</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contacts.form.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{t('contacts.form.subject')}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contacts.form.message')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="w-full py-3 px-4 bg-primary text-white rounded-md">{t('contacts.form.submit')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactSection;
