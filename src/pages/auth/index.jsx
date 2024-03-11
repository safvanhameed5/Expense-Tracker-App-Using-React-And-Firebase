import { auth, provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
export const Auth = () => {
    const navigate = useNavigate();
    const {isAuth} = useGetUserInfo()

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            useID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true
        };
        localStorage.setItem('auth', JSON.stringify(authInfo));
        navigate("/expense-tracker");

    }

    return (
    <div className="login-page">
        <p>Sign In with Google to continue</p>
        <button className="login-button" onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}