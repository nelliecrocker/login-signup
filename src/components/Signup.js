import { useState } from 'react'

function Signup({ setPassword, setUsername, toggle, submitForm, username, password }) {

    const [confirmPassword, setConfirmPassword] = useState()
    const [failMessage, setFailMessage] = useState("")
    const confirmAndSend = () => {
        if (password == confirmPassword) {
            submitForm()
        } else {
            setFailMessage("The passwords don't match")
            setTimeout(() => { setFailMessage("") }, 2000)
        }
    }

    return (
        <form>
            <h1>Signup</h1>
            <label>Username</label>
            <input onChange={(e) => { setUsername(e.target.value) }}></input>
            <br />

            <label>Password</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value) }}></input>
            <br />

            {failMessage}

            <label>Confirm</label>
            <input type="password" onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
            <br />

            <a onClick={toggle}>Already have an account?</a>
            <button type="button" onClick={submitForm}>Signup</button>
        </form>

    )
}

export default Signup