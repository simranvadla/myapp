import React, { useState } from 'react';

export default function Login1() {
    const [access, setAccessState] = useState({ access: "", className: "" });

    const f1 = () => {
        let name = document.getElementById('t1').value.trim();
        let pass = document.getElementById('t2').value.trim();
        console.log(name)
        console.log(pass)
        if (name === 'john' && pass === 'pass1234') {
            setAccessState({ access: 'Access granted', className: 'success' });
        } else {
            setAccessState({ access: 'Access Denied', className: 'fail' });
        }
    };

    return (
        <div>
            <h1>Login Form</h1>
            <input type='text' id='t1' placeholder="Username"></input><br /><br />
            <input type='password' id='t2' placeholder="Password"></input><br /><br />
            <button onClick={f1}>Submit</button>
            <div className={access.className}>{access.access}</div>
        </div>
    );
}