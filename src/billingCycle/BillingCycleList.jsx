import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getList, showUpdate, showDelete } from './billingCycleAction'

class BillingCycleList extends Component {
    componentDidMount() {
        this.props.getList()
    }

    renderTableBody() {
        const { billing_cycles } = this.props
        return billing_cycles.map(cycle => (
            <tr key={cycle._id}>
                <td>{cycle.name}</td>
                <td>{cycle.month}</td>
                <td>{cycle.year}</td>
                <td className="table-actions">
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(cycle)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(cycle)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th className="table-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderTableBody() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ billing_cycles: state.billingCycle.billing_cycles })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleList)