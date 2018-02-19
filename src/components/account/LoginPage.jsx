import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // Bound functions
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

        // Component state
        this.state = {
            email: '',
            password: '',
        };
    }

    // Update state as email value changes
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    // Catch enter clicks
    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.compileFormData();
        }
    }

    // Update state as password value changes
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    // Handle submission once all form data is valid
    handleValidSubmit() {
        const { loginFunction } = this.props;
        const formData = this.state;
        loginFunction(formData);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="Absolute-Center is-Responsive" id="form-container">
                    <div className="Absolute-Center is-Responsive" id="login-form">
                        <AvForm onValidSubmit={this.handleValidSubmit}>
                            <AvGroup>
                                <Label for="exampleEmail">Email</Label>
                                <AvInput
                                    id="userEmail"
                                    name="email"
                                    onChange={this.handleEmailChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="Email@musiclist.com"
                                    required
                                    type="email"
                                    value={this.state.email}
                                />
                                <AvFeedback>Valid email required to log in</AvFeedback>
                            </AvGroup>
                            <AvGroup>
                                <Label for="examplePassword">Password</Label>
                                <AvInput
                                    id="userPassword"
                                    name="password"
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="password"
                                    required
                                    type="password"
                                    value={this.state.password}
                                />
                                <AvFeedback>Password required to log in</AvFeedback>
                            </AvGroup>
                            <Button color="primary" id="signup-btn">Log In</Button>
                        </AvForm>
                    </div>
                </div>
            </div>
        );
    }
}
