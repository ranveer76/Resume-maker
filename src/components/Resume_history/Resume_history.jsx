import React from 'react'
import Resume_card from './Resume_card'
import './Resume_history.css'
import { Link } from 'react-router-dom'

export default function Resume_history({resume, setResume, veiwresume, setVeiwresume}) {
    return (
        <div className='resume-container'>
            <h1>Resume Cards</h1>
            <div className="resume-history-container">
                {
                    resume.length === 0 ? <h2>No Resumes Found</h2> :
                    resume.map((r, i)=><Resume_card key={i} resume={resume} setResume={setResume} r={r} veiwresume={veiwresume} setVeiwresume={setVeiwresume}/>)
                }
            </div>
            <Link to='/resume_form' id='formlink' style={{display:'none'}}/>                
            <div className="resume-btn" onClick={(e)=>{document.getElementById('formlink').click()}}>
                <div className="resume-btn-child-container">
                    <div className="resume-btn-child">
                    </div>
                    <div className="resume-btn-child">
                    </div>
                </div>
            </div>
        </div>
    )
}