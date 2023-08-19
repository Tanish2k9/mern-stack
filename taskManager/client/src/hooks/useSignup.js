import { useState } from 'react'
import useAuthContext from './useAuthContext';
const useSignup = () => {

    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    
    const signup = async (username,email,password)=>{
        setIsLoading(true);
        setError(null);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username,email,password})
        };
        const response = await fetch('http://localhost:8000/api/v1/auth/signup', requestOptions)
        const json = await response.json();
        
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        // console.log(password2,password3);

        if(response.ok){
            localStorage.setItem("user",JSON.stringify(json));
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);
        }

    }
  return {signup,isLoading,error}
}

export default useSignup