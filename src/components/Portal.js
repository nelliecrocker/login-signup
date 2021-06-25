import Login from './Login'
import Signup from './Signup'

import { useState } from 'react'

function Portal() {
    const [showLogin, setShowLogin] = useState(true)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const toggleLoginSignup = () => {
        setShowLogin(!showLogin)
    }
    const submitForm = () => { alert(`Form is sent, ${username}, ${password}`) }

    return (
        <>
            { showLogin
                ? <Login
                    setPassword={setPassword}
                    setUsername={setUsername}
                    toggle={toggleLoginSignup}
                    submitForm={submitForm}
                />
                : <Signup
                    password={password}
                    setPassword={setPassword}
                    setUsername={setUsername}
                    toggle={toggleLoginSignup}
                    submitForm={submitForm}

                />
            }
        </>
    )

}

export default Portal