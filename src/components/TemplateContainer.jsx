import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sessionCheckFailure, sessionCheckSuccess } from '../actions/authentication';

import Template from './Template';

class TemplateContainer extends React.Component {
    constructor(props) {
        super(props);

        // Bound functions
        this.checkSession = this.checkSession.bind(this);
    }

    componentWillMount() {
        // Before the component mounts, check for an existing user session
        this.checkSession();
    }

    async checkSession() {
        const { sessionCheckFailureAction, sessionCheckSuccessAction } = this.props;
        // Contact the API
        await fetch(
            // Where to contact
            '/api/authentication/checksession',
            // What to send
            {
                method: 'GET',
                credentials: 'same-origin',
            },
        )
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return null;
            })
            .then((json) => {
                if (json.username) {
                    sessionCheckSuccessAction(json);
                } else {
                    sessionCheckFailureAction();
                }
            })
            .catch((error) => {
                sessionCheckFailureAction(error);
            });
    }

    render() {
        const { authentication, progress } = this.props;
        return (
            <Template progress={progress} authentication={authentication} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sessionCheckFailureAction: sessionCheckFailure,
        sessionCheckSuccessAction: sessionCheckSuccess,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        progress: state.progress,
        authentication: state.authentication,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
