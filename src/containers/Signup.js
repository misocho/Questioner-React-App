import React from "react";

import Navigation from '../components/Navigation';
import SignupForm from '../components/Signup';

import '../css/input.css';

class Signup extends React.Component {
    render() {
        return (
            <div class="signup">
                <Navigation></Navigation>
                <div className="page-body">
                    <div className="container">
                    <SignupForm></SignupForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;