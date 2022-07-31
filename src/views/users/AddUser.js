import React from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

class AddUser extends React.Component {

    state = {
        name: '',
        age: ''
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleChangeAge = (e) => {
        this.setState({
            age: e.target.value
        });
    };

    handleAdd = (e) => {
        e.preventDefault();
        this.props.addInform({
            id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            age: this.state.age
        });
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="table-wrapper">
                        <div className="table-title">Create User</div>
                        <form >
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" required />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" required />
                            </div>

                            <Link to="/user" className='btn btn-default'>Cancel</Link>&nbsp;
                            <input className='btn btn-success' type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
                <ToastContainer />
            </>
        );
    }

}

export default AddUser;