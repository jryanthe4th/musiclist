import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        // bound functions
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

        // component state
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            username: '',
        };
    }

    // // Put everything together and send it up to the register function
    // compileFormData() {
    //     const { registerFunction } = this.props;
    //     const formData = this.state;
    //     registerFunction(formData);
    // }

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

    // Handle submission once all form data is valid
    handleValidSubmit() {
        const { registerFunction } = this.props;
        const formData = this.state;
        registerFunction(formData);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-sm-7 col-md-5 col-lg-4">
                    <p>
                      Want to get started saving your favorite bands to MusicList?
                      Create an account!
                    </p>
                    <AvForm onValidSubmit={this.handleValidSubmit}>
                        <AvGroup>
                            <Label for="email">Email</Label>
                            <AvInput
                                id="email"
                                name="email"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Email"
                                required
                                type="email"
                                value={this.state.email}
                            />
                            <AvFeedback>Valid email required to register</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="password">Password</Label>
                            <AvInput
                                id="password"
                                minLength="6"
                                name="password"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Password"
                                required
                                type="password"
                                value={this.state.password}
                            />
                            <AvFeedback>Passwords must be at least six characters in length</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="username">Username</Label>
                            <AvInput
                                id="username"
                                name="username"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="username"
                                required
                                type="text"
                                value={this.state.username}
                            />
                            <AvFeedback>Username required to register</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="firstName">First Name</Label>
                            <AvInput
                                id="firstName"
                                name="firstName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="First Name"
                                required
                                type="text"
                                value={this.state.firstName}
                            />
                            <AvFeedback>First name required to register</AvFeedback>
                        </AvGroup>

                        <AvGroup>
                            <Label for="lastName">Last Name</Label>
                            <AvInput
                                id="lastName"
                                name="lastName"
                                onChange={this.handleInputChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Last Name"
                                required
                                type="text"
                                value={this.state.lastName}
                            />
                            <AvFeedback>Last name required to register</AvFeedback>
                        </AvGroup>

                        <Button color="primary" onClick={this.compileFormData}>Register</Button>
                    </AvForm>
                </div>
            </div>
        );
    }
}
