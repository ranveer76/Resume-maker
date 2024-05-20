import React from 'react'
import './Resume_card.css'

const database = location.protocol + '//' + location.hostname + ':5000';

export default function Resume_card({resume, r, setVeiwresume, setResume}) {
    const handleView = ()=>{
        setVeiwresume(r)
        document.getElementById('formlink').click()
    }
    const handleDelete = ()=>{
        const newResume = resume.filter((resume)=>resume !== r)
        setVeiwresume(null)
        setResume(newResume)
        fetch(database + '/Resume/' + r.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return (
        <div className="resume-history-card">
            <h3>{r.fullName}</h3>
            <p>Created on: {r.created_on}</p>
            <button onClick={(e)=>{
                handleView()
            }}>View</button>
            <button onClick={(e)=>{
                handleDelete()
            }}>Delete</button>
        </div>
    )
}