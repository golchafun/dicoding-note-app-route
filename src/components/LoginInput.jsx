import React from "react";
import useInput from "./UseInput";

function LoginInput({ login }) {
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');

    const handleClick = (e) => {
        e.preventDefault();
        login({ email, password });
    }

    return (
        <form className="input-login" onSubmit={handleClick}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={setEmail} autoComplete="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={setPassword} autoComplete="current-password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginInput;