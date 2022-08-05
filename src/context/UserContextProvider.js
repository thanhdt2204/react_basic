import React from 'react';
import UserContext from "./UserContext";

class UserContextProvider extends React.Component {

    state = { isSaveSuccess: false }

    render() {
        return (
            <UserContext.Provider value={
                {
                    state: this.state,
                    setSaveSuccess: (value) => this.setState({
                        isSaveSuccess: value
                    })
                }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }

}

export default UserContextProvider;