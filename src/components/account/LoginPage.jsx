import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // Bound functions
        this.compileFormData = this.compileFormData.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
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
                                    type="email"
                                    name="email"
                                    id="userEmail"
                                    placeholder="noreply@musiclist.com"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="userPassword"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
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
