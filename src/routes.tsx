import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import AppAppBar from "./components/shared/views/AppAppBar";
import AppFooter from "./components/shared/views/AppFooter";
import * as React from 'react';
import withRoot from './components/modules/withRoot';
import EventList from "./components/pages/Events/EventList";

function Router() {
    return (
        <BrowserRouter>
            <AppAppBar />
            <div className='container-content'>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/events/list" element={<EventList />} />
                </Routes>
            </div>
            <AppFooter />
        </BrowserRouter>
    );
}

export default withRoot(Router);