import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./EmployeeForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName: "",
        department: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEmployee = {
            name: this.state.employeeName,
            department: this.state.department,
            id: this.props.match.params.employeeId
        };

        APIManager.update(editedEmployee, "employees")
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        APIManager.get(this.props.match.params.employeeId, "employees")
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    department: employee.department,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <label htmlFor="employeeName">Employee Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="department"
                                value={this.state.department}
                            />
                            <label htmlFor="department">Department</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm