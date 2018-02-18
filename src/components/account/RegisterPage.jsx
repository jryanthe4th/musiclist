import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        // bound functions
        this.compileFormData = this.compileFormData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        // component state
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            username: '',
        };
    }

    // Put everything together and send it up to the register function
    compileFormData() {
        const { registerFunction } = this.props;
        const formData = this.state;
        registerFunction(formData);
    }

    // Handle input changes
    handleInputChange(e) {
        this.setState({ [e.currentTarget.id]: e.target.value });
    }

    // catch enter clicks
    handleKeyPress(target) {
        if (target.charCode === 13) {
            target.preventDefault();
            this.compileFormData();
        }
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                    <p>
                      Want to get started saving your favorite bands to MusicList?
                      Create an account!
                    </p>
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Email"
                                type="email"
                                value={this.state.email}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Password"
                                type="password"
                                value={this.state.password}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="User Name"
                                type="text"
                                value={this.state.username}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="First Name"
                                type="text"
                                value={this.state.firstName}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Last Name"
                                type="text"
                                value={this.state.lastName}
                            />
                        </FormGroup>

                        <Button color="primary" onClick={this.compileFormData}>Register</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
