import React, { useEffect, useState } from 'react';
import ResumeForm from './Resume_Form';
import ResumePreview from './Resume_Preview';
import './Resume.css';
import html2pdf from 'html2pdf.js';
import { Link } from 'react-router-dom';

const database = location.protocol + '//' + location.hostname + ':5000';

export default function Resume_App({loggedIn,setLoggedIn, resume, setResume, user_id, username, veiwresume, setVeiwresume}) {
    const [showForm, setShowForm] = useState(true);
    const [back, setBack] = useState(false);
    const [resumeData, setResumeData] = useState({
        id: '',
        user_id:'',
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        education: '',
        skills: '',
        experience: '',
        resume_type: '',
        created_on: ''
    });

    useEffect(() => {
        if(veiwresume){
            handlePreview();
        }
    }
    , [veiwresume]);

    const handlePreview = () => {
        let data;
        if(!veiwresume){
            const formData = new FormData(document.getElementById('resumeForm'));
            data = {
                id:`${resume.length + 1}`,
                user_id: `${user_id}`,
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                dob: formData.get('dob'),
                address: formData.get('address'),
                education: formData.get('education'),
                skills: formData.get('skills'),
                experience: formData.get('experience'),
                resume_type: formData.get('resume_type'),
                created_on: new Date().toLocaleDateString()
            };
            setResume([...resume, data]);
            fetch(database + '/Resume', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } else{
            data = {
                id: veiwresume.id,
                user_id: veiwresume.user_id,
                fullName: veiwresume.fullName,
                email: veiwresume.email,
                phone: veiwresume.phone,
                dob: veiwresume.dob,
                address: veiwresume.address,
                education: veiwresume.education,
                skills: veiwresume.skills,
                experience: veiwresume.experience,
                resume_type: veiwresume.resume_type,
                created_on: veiwresume.created_on
            };
        }
        setResumeData(data);
        setShowForm(false);
    };

    const handleGenerateResume = () => {
        const element = document.getElementById('resume');
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            };
            html2pdf().from(element).set(opt).save();
        };

    useEffect(() => {
        if(back){
            handleBack();
            setBack(false);
        }
    }
    , [back]);

    const handleBack = () => {
        if(veiwresume || back){
            setVeiwresume(null);
            document.getElementById('formlink').click();
        }
        setShowForm(true);
    };

    return (
        <div>
            <div className='resume-back-btn'>
                <div className='resume-back' onClick={()=>{
                    setBack(true);
                }}>
                    <div className='resume-back-child'>
                    </div>
                    <div className='resume-back-child'>
                    </div>
                    <div className='resume-back-child'>
                    </div>
                </div>
            </div>
            <Link to='/resume' id='formlink' style={{display:'none'}}/>
        {showForm ? (
            <ResumeForm onPreview={handlePreview} resumeData={resumeData} setResumeData={setResumeData}/>
        ) : (
            <ResumePreview
            resumeData={resumeData}
            onGenerateResume={handleGenerateResume}
            onBack={handleBack}
            />
        )}
        </div>
    );
}