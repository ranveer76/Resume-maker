import React from 'react';
import './ResumeModern.css';
import './ResumeClassic.css';
import './ResumeCreative.css';

function ResumePreview({ resumeData, onGenerateResume, onBack, setResumeData}) {
    const { id, user_id, fullName, email, phone, dob, address, education, skills, experience, resume_type, created_on } = resumeData;
    const types = ['classic', 'modern', 'creative'];

    return (
        <div id="resumeOutput">
            {
                (resume_type == 1) ?
                (<div id='resume' className={types[resume_type - 1]}>
                    <h1>Resume</h1>
                    <div id="resumeHeader">
                        <div id="resumeHeaderRight">
                            <h2 id="resumeFullName">{fullName}</h2>
                            <pre id="resumeEmail">{email}</pre>
                            <pre id="resumePhone">{phone}</pre>
                            <pre id="resumeDob">{dob}</pre>
                            <pre id="resumeAddress">{address}</pre>
                        </div>
                    </div>
                    <div id="resumeBody">
                        <h2>Skills</h2>
                        <ul id="resumeSkills">
                            {skills.split('\n').map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h2>Education</h2>
                        <ul id="resumeEducation">
                            {education.split('\n').map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                        <h2>Work Experience</h2>
                        <ul id="resumeExperience">
                            {experience.split('\n').map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                </div>):
                ((resume_type == 2) ?
                (<div id='resume' className={types[resume_type - 1]}>
                    <h1>Resume</h1>
                    <div id="resumeHeader">
                        <div id="resumeHeaderRight">
                            <h2 id="resumeFullName">{fullName}</h2>
                            <pre id="resumeEmail">{email}</pre>
                            <pre id="resumePhone">{phone}</pre>
                            <pre id="resumeDob">{dob}</pre>
                            <pre id="resumeAddress">{address}
                            </pre>
                        </div>
                    </div>
                    <div id="resumeBody">
                        <h2>Skills</h2>
                        <ul id="resumeSkills">
                            {skills.split('\n').map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h2>Education</h2>
                        <ul id="resumeEducation">
                            {education.split('\n').map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                        <h2>Work Experience</h2>
                        <ul id="resumeExperience">
                            {experience.split('\n').map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                </div>):
                (<div id='resume' className={types[resume_type - 1]}>
                    <h1>Resume</h1>
                    <div id="resumeHeader">
                        <div id="resumeHeaderRight">
                            <h2 id="resumeFullName">{fullName}</h2>
                            <pre id="resumeEmail">{email}</pre>
                            <pre id="resumePhone">{phone}</pre>
                            <pre id="resumeDob">{dob}</pre>
                            <pre id="resumeAddress">{address}</pre>
                        </div>
                    </div>
                    <div id="resumeBody">
                        <h2>Skills</h2>
                        <ul id="resumeSkills">
                            {skills.split('\n').map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h2>Education</h2>
                        <ul id="resumeEducation">
                            {education.split('\n').map((edu, index) => (
                                <li key={index}>{edu}</li>
                            ))}
                        </ul>
                        <h2>Work Experience</h2>
                        <ul id="resumeExperience">
                            {experience.split('\n').map((exp, index) => (
                                <li key={index}>{exp}</li>
                            ))}
                        </ul>
                    </div>
                </div>))
            }
            <button className="button" type="button" id="generate" onClick={onGenerateResume}>Download</button>
            <button type="button" id="prev" onClick={onBack}>BACK</button>
        </div>
    );
}

export default ResumePreview;
