import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleAction'
import FormField from "../common/form/FormField";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, buttonType, buttonLabel } = this.props
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' label='Name' placeholder='Type the name' cols='12' component={FormField} readOnly={readOnly} />
                    <Field name='month' label='Month' placeholder='Type the month' cols='12' component={FormField} readOnly={readOnly} />
                    <Field name='year' label='Year' placeholder='Type the year' cols='12' component={FormField} readOnly={readOnly} />
                </div>
                <div className="box-footer">
                    <button className={`btn btn-${buttonType}`} type="submit">{buttonLabel}</button>
                    <button className="btn btn-default" type="button" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(
    null,
    mapDispatchToProps
)(BillingCycleForm)