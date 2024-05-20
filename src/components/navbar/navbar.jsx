import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Navbar({route, setRoute, loggedIn, setLoggedIn, signup, setSignup, setUsername}) {
    const [navopen, setNavopen] = useState(false)
    const path = window.location.pathname === '/' ? '/resume' : '/'
    useEffect(() => {
        setRoute(window.location.pathname)
    }, [window.location.pathname])
    useEffect(() => {
        if(navopen){
            document.querySelectorAll('.bar').forEach((bar, index) => {
                bar.style.animation = `navBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                if(index === 0){
                    bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                }
                else if(index === 1){
                    bar.style.opacity = '0';
                }
                else{
                    bar.style.transform = 'rotate(-45deg) translate(5px, -5px)';
                }
            });
        }else{
            document.querySelectorAll('.bar').forEach((bar, index) => {
                bar.style.animation = `navBarFadeBack 0.5s ease forwards ${index / 7 + 0.3}s`;
                if(index === 0){
                    bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                }
                else if(index === 1){
                    bar.style.opacity = '1';
                }
                else{
                    bar.style.transform = 'rotate(0deg) translate(0px, 0px)';
                }
            });
        }
    }, [navopen])
    return (
        <nav className="navbar bg-white">
        <div className="container">
            <div className="navbar-content">
            <div className="brand-and-toggler">
                <Link to={path} className="navbar-brand">
                <img src="curriculum-vitae.png" alt="" className="navbar-brand-icon" />
                <span className="navbar-brand-text">Build the Best<span> Resume.</span></span>
                </Link>
                <div className="navbar-toggler">
                <button type="button" className="navbar-toggler-btn" onClick={()=>setNavopen(!navopen)}>
                    <div className="bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </button>
                {
                    navopen &&
                    <div className="navbar-toggler-overlay">
                    <div className="navbar-toggler-overlay-content">
                    <div className="navbar-overlay-nav">
                        <div className="overlay-content">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/resume" className="nav-link">Resume</Link>
                            </li>
                            {
                                !loggedIn &&
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={()=>setSignup(false)}>
                                            login
                                        </button>
                                    </li>
                                    <li className="nav-item" onClick={()=>setSignup(true)}>
                                        <button className="nav-link">
                                            signup
                                        </button>
                                    </li>
                                </>
                            }
                            {
                                loggedIn &&
                                <li className="nav-item">
                                    <button className="nav-link" onClick={(e)=>{
                                        setLoggedIn(false);
                                        setUsername('');
                                        localStorage.removeItem('username');
                                    }}>
                                        logout
                                    </button>
                                </li>
                            }
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                }
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
}

