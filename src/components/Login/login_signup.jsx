import React, { useState, useEffect } from 'react'
import './login.css';
const databasehost = location.protocol + '//' + location.hostname + ':5000'

export default function LoginSignup({ setLoggedIn, signup, setSignup, username, setUsername}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [error, setError] = useState(false);
    const [userdatalength, setUserdatalength] = useState(0);
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        fetch(`${databasehost}/Users`)
            .then(response => response.json())
            .then(data => setUserdatalength(data.length))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(signup){
            if(password === cPassword){
                fetch(`${databasehost}/Users`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: userdatalength + 1,
                        name: name,
                        email: email,
                        password: password
                    })
                }).then(response => response.json())
                .then(data => {
                    if(data){
                        setLoggedIn(true);
                        setUsername(name);
                        if(remember){
                            localStorage.setItem('username', name)
                        }
                    }else{
                        setError(true);
                    }
                })
            } else{
                setError(true);
            }
        } else{
            fetch(`${databasehost}/Users`)
                .then(response => response.json())
                .then(data => {
                    for(let i = 0; i < data.length; i++){
                        if(data[i].name === name && data[i].password === password){
                            setLoggedIn(true);
                            setUsername(name);
                            if(remember){
                                localStorage.setItem('username', name)
                            }
                            break;
                        }
                    }
                    setError(true);
                })
        }
    }

    document.title = signup ? 'Sign Up' : 'Login';


    return (
        <>
            <form className='login_signup' onSubmit={handleSubmit}>
                <h1 className='login'>{signup ? 'Sign Up' : 'Login'}</h1>
                <input
                    className='login'
                    type='text'
                    id='username'
                    name='username'
                    value={name}
                    placeholder='Username'
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                {signup && (
                    <>
                        <input
                            className='login'
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </>
                )}
                <input
                    className='login'
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {signup && (
                    <>
                        <input
                            className='login'
                            type='password'
                            id='c-password'
                            name='c-password'
                            placeholder='Confirm Password'
                            value={cPassword}
                            onChange={(e) => setCPassword(e.target.value)}
                            required
                        />
                    </>
                )}
                <div className='remember login'>
                    <input type='checkbox' className='login' id='remember' name='remember' onChange={()=>setRemember(true)} value={remember}/>
                        <label htmlFor='remember' className='login'>Remember me</label>
                </div>
                <button type='submit' className='login'>{signup ? 'Sign Up' : 'Login'}</button>
                <p className='login'> {signup ? 'Already have an account?' : 'Don\'t have an account?'} <span className='login' onClick={() => setSignup(!signup)}>{signup ? 'Login' : 'Sign Up'}</span></p>
            </form>
        </>
    );
}
