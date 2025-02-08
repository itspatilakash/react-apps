import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = () => {

  const [email,setEmail] = useState('');  
  const [password,setPassword] = useState('');  
  const [user,SetUser] = useState()

  const LogIn = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials)=>{
        const loggedInUser = userCredentials.user;
        SetUser(loggedInUser)
    }).catch((error)=>console.log("Wrong Credentials", error ))
  }

  const logOut =()=>[
    signOut(auth)
    .then(()=>{
        SetUser(null);
    }).catch((error)=>console.log(error))
  ]

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user)=>{
        if(user){
            SetUser(user);
        }else{
            SetUser(null);
        }
    });
    return ()=>unsubscribe();
  },[])


  return (
    <div onSubmit={LogIn}>
        <form>
            <h1>LogIn Account</h1>
            <input type='email' placeholder='Enter Your Mail' value ={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Log In</button>
        </form>
        {
            user ? 
            (
                <div>
                <p>Welcome {user.email}</p>
                <button onClick={logOut}>Log Out</button>
                </div>
                
            )   
            :(
                <p>You are Not Logged in </p>
            )
        }
    </div>
  )
}

export default Login
