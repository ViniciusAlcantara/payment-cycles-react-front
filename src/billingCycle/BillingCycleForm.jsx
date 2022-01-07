import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleAction'
import FormField from "../common/form/FormField";
import CreditList from "./creditList";
import Summary from "./Summary";

class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v

        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, buttonType, buttonLabel, credits, debts } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' label='Name' placeholder='Type the name' cols='12 4' component={FormField} readOnly={readOnly} />
                    <Field name='month' label='Month' placeholder='Type the month' cols='12 4' component={FormField} readOnly={readOnly} />
                    <Field name='year' label='Year' placeholder='Type the year' cols='12 4' component={FormField} readOnly={readOnly} />

                    <Summary credit={sumOfCredits} debit={sumOfDebits} total={sumOfCredits - sumOfDebits} />

                    <CreditList cols="12 6" title="Credits" name="credits" credits={credits} readOnly={readOnly} />
                    <CreditList cols="12 6" title="Debits" name="debits" credits={debts} readOnly={readOnly} />
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
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycleForm)