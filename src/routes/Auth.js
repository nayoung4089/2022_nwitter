import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import React from "react";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }
    return(
        <div>
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="google">Continue in Google</button>
                <button onClick={onSocialClick} name="github">Continue in Github</button>
            </div>
        </div>
    )
}
export default Auth;