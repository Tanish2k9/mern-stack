import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup';
const Signup = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    // const [password2,setPassword2] = useState("");
    // const [password3,setPassword3] = useState("");
    const {signup,isLoading,error} = useSignup();

    // const handleLevel2 = (e)=>{
    //     // console.log(e.target.value);
    //     setPassword2((prev)=>(prev+e.target.value))
    // }
    
    // const handleLevel3 = (e)=>{
    //     // console.log(e.target.value);
    //     setPassword3(e.target.value);
    // }
    // // console.log(password2,password3);


    const submithandle= async (e)=>{
        e.preventDefault();
        await signup(username,email,password);
        // await signup(username,email,password,password2,password3)
    }


  return (
    <div className='signup'>
        <form  className="form" onSubmit={submithandle}>
            <h1>SIGNUP</h1>
            {/* <h3>LEVEL1</h3> */}
            <input 
                placeholder='enter username'
                value={username}  
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                placeholder='enter email'
                value={email}  
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
                placeholder='enter password'
                value={password}  
                onChange={(e)=>setPassword(e.target.value)}
            />
{/* 
            <h3>LEVEL2</h3>
                <button type='button' value = "red" name="red" onClick={(e)=>handleLevel2(e)}>red</button>
                <button type='button' value = "blue" name="blue" onClick={(e)=>handleLevel2(e)}>blue</button>
                <button type='button' value = "green" name="green" onClick={(e)=>handleLevel2(e)}>green</button>
            <h3>LEVEL3</h3>
                <button type='button'value="image1" onClick={(e)=>handleLevel3(e)}>image1</button>
                <button type='button'value="image2" onClick={(e)=>handleLevel3(e)}>image2</button>
                <button type='button'value="image3" onClick={(e)=>handleLevel3(e)}>image3</button>
 */}



            <button disabled={isLoading}>Submit</button>
            {error&&<div className='error'>{error}</div>}
        </form>

    </div>
  )
}

export default Signup