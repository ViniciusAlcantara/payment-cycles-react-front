import React, { Component } from 'react'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'


import Input from '../common/form/Input'
import Grid from '../common/layout/Grid'
import { bindActionCreators } from 'redux'

class CreditList extends Component {
    add(index, item = {}) {
        if (this.props.readOnly) return
        this.props.arrayInsert('billingCycleForm', this.props.name, index, item)
    }

    remove(index) {
        if (this.props.readOnly || this.props.credits.length <= 1) return
        this.props.arrayRemove('billingCycleForm', this.props.name, index)
    }

    renderRows() {
        const list = this.props.credits || []
        const name = this.props.name
        return list.map((credit, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${name}[${index}].name`} placeholder='Type the name' component={Input} readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`${name}[${index}].value`} placeholder='Type the value' component={Input} readOnly={this.props.readOnly} />
                </td>
                {
                    this.props.name === 'debits' ? (
                        <td>
                            <Field name={`${name}[${index}].status`} placeholder='Type the status' component={Input} readOnly={this.props.readOnly} />
                        </td>
                    ) : false
                }
                <td>
                    <button className="btn btn-success" type='button' onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button className="btn btn-warning" type='button' onClick={() => this.add(index + 1, credit)}>
                        <i className="fa fa-copy"></i>
                    </button>
                    <button className="btn btn-danger" type='button' onClick={() => this.remove(index)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.title}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                {
                                    this.props.name === 'debits' ? (
                                        <th>Status</th>
                                    ) : false
                                }
                                <th className='table-actions'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderRows() }
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(CreditList)