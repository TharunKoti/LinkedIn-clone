import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilepic] = useState('')
    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();
        if(!name){
            return alert("Please enter a full name to register")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        })
        .catch((error) => alert(error))
    };

    const userlogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />

        <form>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='fullname required(If registering)' />
            <input type="text"  onChange={(e) => setProfilepic(e.target.value)} placeholder='Profile pic URL(optional)'/>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <button onClick={userlogin}>Sign In</button>
        </form>
        <p>
            Not a Member?{" "}
            <span className='register_btn' onClick={register}>
                Register Now
            </span>
        </p>
    </div>
  )
}

export default Login