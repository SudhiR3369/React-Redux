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
                headerName: "FirstName", field: "firstName", sortable: true, filter: true, checkboxSelection: true
            },
            {
                headerName: "LastName", field: "lastName", sortable: true, filter: true
            }, {
                headerName: "Address", field: "address", sortable: true, filter: true
            },
            {
                headerName: "ContactNo", field: "contactNo", sortable: true, filter: true
            },
            {
                headerName: "Email", field: "email", sortable: true, filter: true
            },
            {
                headerName: "Role", field: "roleName", sortable: true, filter: true
            },
            {
                headerName: "Username", field: "username", sortable: true, filter: true
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
                    id="userGrid"
                    className="ag-theme-balham"
                    style={{
                        height: '600px',
                        width: '100%'
                    }}>               

                    <button onClick={this.onButtonClick}>Get selected rows</button>

                    <AgGridReact
                        pagination={true}
                        paginationAutoPageSize={true}
                        onGridReady={params => this.gridApi = params.api}
                        rowSelection="multiple"
                        columnDefs={this.state.columnDefs}
                        rowData={this.props.users}>
                    </AgGridReact>
                </div>            
        );
    }

    onButtonClick = (e) => {
        debugger
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.firstName + ' ' + node.lastName).join(', ')
        alert(`Selected Users: ${selectedDataStringPresentation}`)
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