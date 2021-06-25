function Login({ setUsername, setPassword, toggle }) {
    return (
        <form>
            <h1>Login</h1>
            <label>Username</label>
            <input onChange={(e) => { setUsername(e.target.value) }}></input>
            <br />
            <label>Password</label>
            <input onChange={(e) => { setPassword(e.target.value) }}></input>
            <a onClick={toggle}>Don't have an account?</a>
            <button>Login</button>
        </form>
    )
}

export default Login