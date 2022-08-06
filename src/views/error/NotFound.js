import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class NotFound extends React.Component {

    state = {
        pageDestination: this.props.isLoggedIn ? 'home page' : 'login page'
    }

    handleToHome = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div style={{ color: "white", textAlign: "center", marginTop: "260px", fontWeight: "bold" }}>
                <div>Page not found</div>
                <a href='# ' onClick={this.handleToHome}>Back to {this.state.pageDestination}</a>
            </div>
        );
    }

}

const mapStateReduxToPropsOfApp = (state) => {
    return { isLoggedIn: state.isLoggedIn }
}

export default connect(mapStateReduxToPropsOfApp, null)(withRouter(NotFound));