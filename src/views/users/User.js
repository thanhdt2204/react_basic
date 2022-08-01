import React from 'react';
import './User.scss';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import ListUser from './ListUser';
import userApi from '../../services/userService';
import { withRouter } from "react-router";
import { pagination } from '../../utils/constant';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            userList: [],
            numberOfElements: 0,
            totalElements: 0,
            totalPages: 0
        }
    }

    getAllUsers = async (currentPage) => {
        let response = await userApi.getAllUsers({ page: currentPage, size: pagination.PAGE_SIZE });
        if (response.status === 200) {
            this.setState({
                userList: response.data.content,
                numberOfElements: response.data.numberOfElements,
                totalElements: response.data.totalElements,
                totalPages: response.data.totalPages
            })
        }
    }

    componentDidMount() {
        this.getAllUsers(this.state.currentPage);
    }

    handleAddNew = () => {
        this.props.history.push("/user/new");
    }

    changePage = (pageNumber) => {
        console.log("Current page: ", this.state.currentPage + 1);
        this.setState({
            currentPage: pageNumber
        })
        this.getAllUsers(pageNumber);
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
                            totalElements={this.state.totalElements} totalPages={this.state.totalPages}
                            currentPage={this.state.currentPage} changePage={this.changePage} />
                    </div>
                </div>
                <UpdateUser />
                <DeleteUser />
            </>
        );
    }

}

export default withRouter(User);