import { useState } from 'react'
import useAuthContext from './useAuthContext';
const useLogin = () => {

    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    
    // const login = async (email,password,password2,password3,setPassword2)=>{
        const login = async (email,password)=>{
        setIsLoading(true);
        setError(null);
        // console.log(password2);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({email,password,password2,password3})
            body: JSON.stringify({email,password})

        };
        const response = await fetch('http://localhost:8000/api/v1/auth/login', requestOptions)
        const json = await response.json();
        
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
            // setPassword2("");
        }

        if(response.ok){
            localStorage.setItem("user",JSON.stringify(json));
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }

    }
  return {login,isLoading,error}
}


export default useLogin