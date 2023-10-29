import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

function Main() {
    const[user, SetUser] = useLocalStorage("USER","");
    const[inputValue, setInputValue] = useState("");
    return(
        <>
        {user && (
        <>
        <div className='mainBlock'>
            <h1 className='mainHeader'>Welcome to my website, {user}</h1>
        </div>
        <p className='p'>This is my project made on the React </p>
        <p className='p'>Made by Sinev Vsevolod</p>
        <button className='button_1' onClick={() => SetUser("")}>Log Out</button>
        </>
        )}
        {!user &&(
            <>
            <div className='mainBlock'>
                <h1 className='mainHeader'>Hello, please login</h1>
            </div>
                <p className='p_login'>Enter your name here:</p>
                <input className='input_login' value ={inputValue} placeholder='Your name' onChange={(e) => setInputValue(e.target.value)}/>
                <button className='button' onClick={() => SetUser(inputValue)}>Login</button>
            </>
        )}
        </>
    )
}
export default Main;