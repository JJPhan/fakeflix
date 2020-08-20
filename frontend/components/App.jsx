import React from 'react';
import {Route} from 'react-router'
import LoginFormContainer from './session_form/LoginFormContainer'
import SignupFormContainer from './session_form/SignupFormContainer'
import Navbar from './navbar'
import Sidebar2 from './sidebar2'

// import HamModule from './hamModule/hamModule'

const App = () => {
    return (
            <div>
                {/* <Navbar /> */}
                {/* <HamModule /> */}
                <Sidebar2 />
                <Navbar />
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
                
            </div>
    )
}

export default App