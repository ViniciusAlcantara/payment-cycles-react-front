import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import Row from '../common/layout/Row'
import ContentBody from '../common/template/ContentBody'
import ContentHeader from '../common/template/ContentHeader'
import StatsCard from '../common/widgets/StatsCard'

class Dashboard extends Component {
    componentDidMount() {
        this.props.getSummary()
    }
    render() {
        const { credit, debt, total } = this.props
        return (
            <div>
                <ContentHeader title="Dashboard" small="Version 1.0" />
                <ContentBody>
                    <Row>
                        <StatsCard cols="12 12 4 4" color="green" value={`$ ${credit}`} text="Credits Total" icon="bank" />
                        <StatsCard cols="12 12 4 4" color="red" value={`$ ${debt}`} text="Debits Total" icon="credit-card" />
                        <StatsCard cols="12 12 4 4" color="blue" value={`$ ${total}`} text="Balance" icon="money" />
                    </Row>
                </ContentBody>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    credit: state.dashboard.summary.credit,
    debt: state.dashboard.summary.debt,
    total: state.dashboard.summary.credit - state.dashboard.summary.debt
})

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)