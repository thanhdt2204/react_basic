import React from 'react';

class DeleteUser extends React.Component {

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
                <div id="deleteEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete User</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete?</p>
                                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-danger" value="Delete" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default DeleteUser;