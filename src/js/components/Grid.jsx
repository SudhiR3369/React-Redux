import React, { Component } from "react";
import { connect } from "react-redux";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { getUserList } from "../actions/gridAction";
import "../../App.css";

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "FirstName", field: "firstName", sortable: true
            },
            {
                headerName: "LastName", field: "lastName", sortable: true
            }, {
                headerName: "Address", field: "address", sortable: true
            },
            {
                headerName: "ContactNo", field: "contactNo", sortable: true
            },
            {
                headerName: "Email", field: "email", sortable: true
            },
            {
                headerName: "RoleName", field: "roleName", sortable: true
            },
            {
                headerName: "Username", field: "username", sortable: true
            }]
        };
    }

    componentDidMount() {
        this.props.getUserList();

        // fetch('https://www.neptics.org.np/api/v1/user')
        //     .then(result => result.json().result)
        //     .then(rowData => this.setState({ rowData }));
    }

    render() {        
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '600px'
                }}
            >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.users}>
                </AgGridReact>
            </div>
        );
    }
}
function mapStateToProps(state) {    
    return {
        users: state.users
    }
}
//export default Grid;
export default connect(
    mapStateToProps,
    { getUserList }
)(Grid);