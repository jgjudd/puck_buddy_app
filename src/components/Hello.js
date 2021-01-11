import React, { useEffect, useState } from 'react'

const Hello = () => {
    const [message, setMessage] = useState('default greeting')
    
    const getGreeting = async () => {
        await fetch('http://127.0.0.1:5000/hello')
            .then(res => res.json())
            .then(res2 => setMessage(res2.greeting))    
    }
    
    return (
        <React.Fragment>
            {message}
            <button onClick={() => getGreeting()}>Get Greeting</button>
        </React.Fragment>
    )
}

export default Hello
