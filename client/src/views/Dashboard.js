import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Logout from '../Components/Logout.js'


export default function Login(){
    const [inquiries, setinquiries]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/inquiry', { withCredentials:true })
        .then((response) => setinquiries(response.data))
        .catch(() => navigate('/'));
        }, [])


    return (
        <div className="container" id="Dashboard">
            <h1>
            ///////////////////////////////////////////////<br/>
                            Dashboard           <Logout/>  <br/>
            ///////////////////////////////////////////////<br/>
            </h1>
            {inquiries.map((inquiry, idx)=>{
                return(
                    <div key={idx}>
                        <h6>> Message by:  {inquiry.contactName}</h6>
                        <h6>> email:  {inquiry.contactEmail}</h6>
                        <h6>> Subject: {inquiry.contactSubject}</h6>
                        <p>> Message: {inquiry.contactMessage}</p>
                    </div>
                )
            })}
        </div>
    );
}