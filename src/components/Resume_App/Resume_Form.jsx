import React from 'react';

function ResumeForm({ onPreview, resumeData, setResumeData}) {
    const { id, user_id, fullName, email, phone, dob, address, education, skills, experience, resume_type, created_on } = resumeData;
    const previewResume = () => {
        onPreview();
    };

    return (
        <div className="Resume-container">
            <h1>Resume Maker</h1>
            <form id="resumeForm">

                <div className="Resume-container-child">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e)=>{
                        setResumeData({...resumeData, fullName: e.target.value})
                    }} required />
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={
                        (e)=>{
                            setResumeData({...resumeData, email: e.target.value})
                        }
                    
                    } required />
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e)=>{
                        setResumeData({...resumeData, phone: e.target.value})
                    }} required />
                </div>
                
                <div className="Resume-container-child">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" value={dob} onChange={(e)=>{
                        setResumeData({...resumeData, dob: e.target.value})
                    }} required />
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" rows="4" value={address} onChange={(e)=>{
                        setResumeData({...resumeData, address: e.target.value})
                    }} required></textarea>
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="education">Education:</label>
                    <textarea id="education" name="education" rows="4" value={education} onChange={(e)=>{
                        setResumeData({...resumeData, education: e.target.value})
                    }} required></textarea>
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="skills">Skills:</label>
                    <textarea id="skills" name="skills" rows="4" value={skills} onChange={(e)=>{
                        setResumeData({...resumeData, skills: e.target.value})
                    }} required></textarea>
                </div>

                <div className="Resume-container-child">
                    <label htmlFor="experience">Work Experience:</label>
                    <textarea id="experience" name="experience" rows="4" value={experience} onChange={(e)=>{
                        setResumeData({...resumeData, experience: e.target.value})
                    }} required></textarea>
                </div>
                <div className="Resume-container-child">
                    <label htmlFor="resume_type">Resume Type:</label>
                    <select name="resume_type" id="resume_type" value={resume_type} onChange={(e)=>{
                        setResumeData({...resumeData, resume_type: e.target.value})
                    }} required>
                        <option value="1">Classic</option>
                        <option value="2">Modern</option>
                        <option value="3">Creative</option>
                    </select>
                </div>
                <button type="button" id="Preview" onClick={previewResume}>Generate Resume</button>
            </form>
        </div>
    );
}

export default ResumeForm;
