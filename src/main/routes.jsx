import React from 'react'
import { Router, Route, Redirect, IndexRoute, hashHistory } from 'react-router'

import Dashboard from '../dashboard/Dashboard'
import BillingCycle from '../billingCycle/BillingCycle'
import AuthOrApp from './AuthOrApp'

export default props => {
    const routes = (
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='billing-cycles' component={BillingCycle} />
        </Route>
    )
    return (
        <Router history={hashHistory}>
            {routes}
            <Redirect from='*' to='/' />
        </Router>
    )
}