import React from "react";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandle(user) {
        const { password, confirmPassword } = user;
        if (password !== confirmPassword) {
            alert("Password dan konfirmasi password tidak sama");
            return;
        }
        const { error } = await register(user);
        if (!error) {
            navigate("/");
        }
    }

    return (
        <section className="register-page">
            <RegisterInput register={onRegisterHandle} />
            <p>Sudah punya akun? <a href="/">Login di sini</a></p>
        </section>

    );
}

export default RegisterPage;