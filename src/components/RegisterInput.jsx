import React from "react";
import useInput from "./UseInput";

function RegisterInput({ register }) {
    const [name, setName] = useInput('');
    const [email, setEmail] = useInput('');
    const [password, setPassword] = useInput('');
    const [confirmPassword, setConfirmPassword] = useInput('');

    const handleClick = (e) => {
        e.preventDefault();
        register({ name, email, password, confirmPassword });
    }

    return (
        <form className="input-register" onSubmit={handleClick}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={setName} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={setEmail} autoComplete="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={setPassword} autoComplete="new-password" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={setConfirmPassword} autoComplete="new-password" />

            <button type="submit">Register</button>
        </form>
    );
}

export default RegisterInput;