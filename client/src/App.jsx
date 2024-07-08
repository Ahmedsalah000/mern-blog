import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";
import Dashboard from './pages/Dashboard';
import CreatePost from './pages/CreatePost';

import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Route>
                <Route element={<OnlyAdminPrivateRoute />}>
                    <Route path='/create-post' element={<CreatePost />} />
                    {/* <Route path='/update-post/:postId' element={<UpdatePost />} /> */}
                </Route>
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
