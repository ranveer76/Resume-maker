import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Home from './pages/home'
import Resume_maker from './pages/Resume_maker'
import LoginSignup from './components/Login/login_signup'
import {createBrowserRouter as cbr, RouterProvider as RP} from 'react-router-dom'
import Resume_history from './components/Resume_history/Resume_history'

const database = location.protocol + '//' + location.hostname + ':5000'
function App() {
  const [route, setRoute] = useState('/')
  const [loggedIn, setLoggedIn] = useState(false)
  const [signup, setSignup] = useState(false)
  const [username, setUsername] = useState('')
  const [veiwresume, setVeiwresume] = useState(null)
  const [resume, setResume] = useState([])
  const [user_id, setUser_id] = useState('')

  useEffect(() => {
    document.title = 'Resume Builder/'+(route==='/'?'home':(route.split('/')[1]).split('_').join(' '))
  }, [route])

  useEffect(() => {
    if(localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'))
      setLoggedIn(true)
    }
  }, [])

  useEffect(() => {
    if(loggedIn){
      fetch(database + '/Users?name=' + username, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        setUser_id(data[0].id)
      })
      .catch(err=>console.log(err))
    } else{
      setUser_id('')
    }
  }, [loggedIn])

  useEffect(() => {
    if(loggedIn){
      fetch(database + '/Resume?user_id=' + user_id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        setResume(data)
      })
      .catch(err=>console.log(err))
    } else{
      setResume([])
    }
  }, [loggedIn, user_id])

  const routes = cbr([
    {
      path: '/',
      element: <><Navbar route={route} setRoute={setRoute} loggedIn={loggedIn} setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} setUsername={setUsername}/>
      <div className="section-main">
      <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </div>
      </>
    },
    {
      path: '/resume_form',
      element: <><Navbar route={route} setRoute={setRoute} loggedIn={loggedIn} setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} setUsername={setUsername}/>
      <div className="section-main">
      <Resume_maker loggedIn={loggedIn} setLoggedIn={setLoggedIn} resume={resume} user_id={user_id} setResume={setResume} username={username} veiwresume={veiwresume} setVeiwresume={setVeiwresume}/>
      </div>
      </>
    },
    {
      path: '/login',
      element: <><Navbar route={route} setRoute={setRoute} loggedIn={loggedIn} setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} setUsername={setUsername}/>
      <div className="section-main">
      <LoginSignup setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} username={username} setUsername={setUsername}/>
      </div>
      </>
    },
    {
      path: '/signup',
      element: <><Navbar route={route} setRoute={setRoute} loggedIn={loggedIn} setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} setUsername={setUsername}/>
      <div className="section-main">
      <LoginSignup setLoggedIn={setLoggedIn} signup={signup?signup:true} setSignup={setSignup} username={username} setUsername={setUsername}/>
      </div>
      </>
    },
    {
      path: '/resume',
      element: <><Navbar route={route} setRoute={setRoute} loggedIn={loggedIn} setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} setUsername={setUsername}/>
      <div className="section-main">
          <Resume_history loggedIn={loggedIn} setLoggedIn={setLoggedIn} resume={resume} setResume={setResume} veiwresume={veiwresume} setVeiwresume={setVeiwresume}/>
        </div>
      </>
    }
  ])

  return (
    <>
      <RP router={routes} />
      {
        !loggedIn &&
        <LoginSignup setLoggedIn={setLoggedIn} signup={signup} setSignup={setSignup} username={username} setUsername={setUsername}/>
      }
      <Footer />
    </>
  )
}

export default App
