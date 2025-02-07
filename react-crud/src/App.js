import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
import { addDoc, collection , deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const App = () => {

  const[users,setUsers] = useState([]);
  const[InputName,setName] = useState("");
  const[InputAge,setAge] = useState(0);
  const[input,setInput] = useState(0);

  const usersCollectionRef = collection(db,"crud");

  const createUser = async () =>{
     await addDoc(usersCollectionRef,{name:InputName,age:InputAge})
  }

  const deleteUser = async (id) =>{
    const usersDoc = doc(db,"crud", id)
    await deleteDoc(usersDoc)
  }

  const updateAge = async (id,age) =>{
     const usersDoc = doc(db,"crud",id);
     const newAge = {age:age+5};
     await updateDoc(usersDoc,newAge)
  }

  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef)
      // console.log("docs Data",data.docs);
      const docsRef = data.docs.map((doc)=>({
        ...doc.data(),id:doc.id
      }))
      console.log("data:",docsRef) 
      setUsers(docsRef)
    }
    
    getUsers();
  },[input])

  return (
    <div>
      <input type='text' placeholder='Name..' value={InputName} onChange={(e)=>setName(e.target.value)}/>
      <input type='number' placeholder='Age..' value={InputAge} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={createUser} onChange={(e)=>setInput(()=>input++)}>Get User</button>
       {
        users.map((user)=>{
        return <div>
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
        <button onClick={() => updateAge(user.id,user.age)}>Update Age by 5</button>
        <button onClick={() => deleteUser(user.id)}>Delete User</button>
        </div>
       })}
    </div>  
  )
}

export default App
