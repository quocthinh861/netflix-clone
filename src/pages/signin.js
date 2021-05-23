import React, { useContext, useState } from 'react';
import HeaderContainer from '../containers/head';
import { FooterContainer } from '../containers/footer';
import { signInForm } from '../components/signin';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';


export default function SignIn() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = password === '' || email === '';

    function handleSignin(e){
        e.preventDefault();
        return  firebase.auth()
                        .signInWithEmailAndPassword(email, password)
                        .then(() => {
                            history.push(ROUTES.BROWSE);
                        })
                        .catch((error) => {
                            setEmail('');
                            setPassword('');
                            setError(error.message);
                        })
    };

    return (
        <>
            <HeaderContainer>
                <signInForm.Container>  
                    <signInForm.Title>
                        Đăng nhập
                    </signInForm.Title>
                    {
                        error && <signInForm.Error>{error}</signInForm.Error>
                    }
                    <signInForm.Base onSubmit={handleSignin} method='POST'>
                        <signInForm.Input placeholder='Địa chỉ Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <signInForm.Input placeholder='Mật khẩu' type='password' value={password} onChange={(e) => setPassword(e.target.value)} autocomplete='off' />
                        <signInForm.Submit disabled={isInValid}>Đăng nhập</signInForm.Submit>
                    </signInForm.Base>
                    <signInForm.Text>
                        Bạn mới tham gia Netflix <signInForm.Link to='/signup'>Đăng kí ngay.</signInForm.Link>
                    </signInForm.Text>
                    <signInForm.TextSmall>
                        Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot.
                    </signInForm.TextSmall>
                </signInForm.Container>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
