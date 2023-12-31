import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { authService } from "fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { LoginButton, LoginContainer, LoginInput, LoginToggle } from "styles/LoginStyle";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccout] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create account
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                // log in
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    }

    const toggleAccount = () => setNewAccout((prev) => !prev);

    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data);
    }

    return (
        <LoginContainer>
            <form onSubmit={onSubmit}>
                <LoginInput name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
                <LoginInput name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <LoginInput type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error && <span>{error}</span>}
            </form>
            <LoginToggle onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </LoginToggle>
            <div>
                <LoginButton onClick={onSocialClick} name="google">
                    Continue with Google
                </LoginButton>
                <LoginButton onClick={onSocialClick} name="github">
                    Continue with Github
                </LoginButton>
            </div>
        </LoginContainer>
    );
}

export default Auth;