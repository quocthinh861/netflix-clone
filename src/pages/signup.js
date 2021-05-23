import React, { useContext, useState } from 'react';
import HeaderContainer from '../containers/head';
import { FooterContainer } from '../containers/footer';
import { signInForm } from '../components/signin';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { firebase } from '../lib/firebase';


export default function SignUp() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInValid = firstName === '' || password === '' || email === '';

    const handleSignup = (e) => {
        e.preventDefault();
        firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(result => {
                    result.user.updateProfile({displayName: firstName})
                          .then(() => {
                                history.push(ROUTES.BROWSE);
                            });
                })
                .catch(error => {
                    setFirstName('');
                    setPassword('');
                    setEmail('');
                    setError(error.message);
                })
    }

    return ( 
        <>
        <HeaderContainer>
                <signInForm.Container>  
                    <signInForm.Title>
                        Đăng kí
                    </signInForm.Title>
                    {
                        error && <signInForm.Error>{error}</signInForm.Error>
                    }
                    <signInForm.Base onSubmit={handleSignup} method='POST'>
                        <signInForm.Input placeholder='Tên chính' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <signInForm.Input placeholder='Địa chỉ Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <signInForm.Input placeholder='Mật khẩu' type='password' value={password} onChange={(e) => setPassword(e.target.value)} autocomplete='off' />
                        <signInForm.Submit disabled={isInValid}>Đăng kí</signInForm.Submit>
                    </signInForm.Base>
                    <signInForm.Text>
                        Bạn đã sẵn sàng? <signInForm.Link to='/signin'>Đăng nhập ngay.</signInForm.Link>
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
