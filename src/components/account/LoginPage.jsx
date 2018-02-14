import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // Bound functions
        this.compileFormData = this.compileFormData.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

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

    compileFormData() {
        const { loginFunction } = this.props;
        const formData = this.state;
        loginFunction(formData);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="Absolute-Center is-Responsive" id="form-container">
                    <div className="Absolute-Center is-Responsive" id="login-form">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    id="userEmail"
                                    name="email"
                                    onChange={this.handleEmailChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="noreply@musiclist.com"
                                    required
                                    type="email"
                                    value={this.state.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    id="userPassword"
                                    name="password"
                                    onChange={this.handlePasswordChange}
                                    onKeyPress={this.handleKeyPress}
                                    placeholder="password"
                                    required
                                    type="password"
                                    value={this.state.password}
                                />
                            </FormGroup>
                            <Button onClick={this.compileFormData} id="signup-btn">Log In</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
