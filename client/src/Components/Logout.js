import React from 'react'
import axios from 'axios'
import {navigate} from '@reach/router';

export default function LogoutButton(){
    function handleClick(){
        axios.delete('http://localhost:8000/api/users/logout', { withCredentials: true})
        .then(()=>navigate('/'))
        .catch((err)=>console.log(err))
    }
    return(
        <button onClick={handleClick}>I/O</button>
    )
}