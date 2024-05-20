import React from 'react'
import ResumeApp from '../components/Resume_App/Resume_App'

export default function Resume_maker({loggedIn,setLoggedIn, resume, setResume, user_id, username, veiwresume, setVeiwresume}) {
    return (
        <>
            <ResumeApp loggedIn={loggedIn} setLoggedIn={setLoggedIn} resume={resume} setResume={setResume} user_id={user_id} username={username} veiwresume={veiwresume} setVeiwresume={setVeiwresume} />
        </>
    )
}