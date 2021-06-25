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
    return (
        <>
            { showLogin
                ? <Login
                    setPassword={setPassword}
                    setUsername={setUsername}
                    toggle={toggleLoginSignup}
                />
                : <Signup
                    setPassword={setPassword}
                    setUsername={setUsername}
                    toggle={toggleLoginSignup}

                />
            }

            {username}
            {password}        </>
    )

}

export default Portal