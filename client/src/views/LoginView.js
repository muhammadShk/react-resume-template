import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';



export default function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const [err, setErr] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        setErr('');

        axios.post('http://localhost:8000/api/users/login', {
            email,
            password
        }, { withCredentials:true })
        .then(()=> navigate('/dashboard'))
        .catch(()=>setErr('Please check your credentials !'));
    }

    return (
        <div className="container" id="Login">
            <img className="profile-pic"  src="images/avatar.png" alt="Avatar" />
                {
                    err && (
                        <p style={{color:'red'}}>{err}</p>
                    )
                }
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}