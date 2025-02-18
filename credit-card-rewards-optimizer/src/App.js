import './App.css';
import HomePage from './components/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import 'bootstrap/dist/css/bootstrap.min.css';

// Configure Amplify
Amplify.configure(awsExports);

function App() {
    return (
        <>
            <SiteNav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/protected"
                    element={
                        <Authenticator>
                            {({ signOut, user }) => (
                                <main>
                                    <h1>Hello {user?.username}</h1>
                                    <button onClick={signOut}>Sign out</button>
                                </main>
                            )}
                        </Authenticator>
                    }
                />
            </Routes>
            <SiteFooter />
        </>
    );
}

export default App;
