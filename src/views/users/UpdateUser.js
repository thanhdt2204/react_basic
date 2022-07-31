import React from 'react';

class UpdateUser extends React.Component {

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
                <div id="editEmployeeModal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form>
                                <div className="modal-header">
                                    <h4 className="modal-title">Update User</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                    <input type="submit" className="btn btn-info" value="Save" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default UpdateUser;