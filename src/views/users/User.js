import React from 'react';
import './User.scss';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import ListUser from './ListUser';
import userApi from '../../services/userService';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            numberOfElements: 0,
            totalElements: 0
        }
    }

    handleAddNew = () => {
        this.props.history.push("/user/new");
    }

    async componentDidMount() {
        let response = await userApi.getAllUsers(this.props.token);
        console.log("Data: ", response);
        if (response.status === 200) {
            this.setState({
                userList: response.data.content,
                numberOfElements: response.data.numberOfElements,
                totalElements: response.data.totalElements
            })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>User Management</h2>
                                </div>
                                <div className="col-sm-6">
                                    <a onClick={this.handleAddNew} className="btn btn-success">
                                        <i className="material-icons">&#xE147;</i>
                                        <span>Add New</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ListUser userList={this.state.userList} numberOfElements={this.state.numberOfElements}
                            totalElements={this.state.totalElements} />
                    </div>
                </div>
                <UpdateUser />
                <DeleteUser />
            </>
        );
    }

}

const mapStateReduxToPropsOfUser = (state) => {
    return { token: state.token }
}

export default connect(mapStateReduxToPropsOfUser, null)(withRouter(User));