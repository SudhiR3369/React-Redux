import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actionIndex";

export class Post extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <React.Fragment>
                <ul className="list-group list-group-flush">
                    {
                        this.props.users.map(el =>
                            (<li className="list-group-item" key={el.firstName}>
                                {el.firstName + " " + el.lastName}
                            </li>))
                    }
                </ul>
                </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.slice(0, 10)
    };
}

export default connect(
    mapStateToProps,
    { getData }
)(Post);