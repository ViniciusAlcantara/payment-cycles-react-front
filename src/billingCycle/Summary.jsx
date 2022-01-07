import React from 'react'
import Grid from '../common/layout/Grid'
import Row from '../common/layout/Row'
import StatsCard from '../common/widgets/StatsCard'


export default ({ credit, debit, total }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Summary</legend>
            <Row>
                <StatsCard cols="12 12 4 4" color="green" value={`$ ${credit}`} text="Credits Total" icon="bank" />
                <StatsCard cols="12 12 4 4" color="red" value={`$ ${debit}`} text="Debits Total" icon="credit-card" />
                <StatsCard cols="12 12 4 4" color="blue" value={`$ ${total}`} text="Balance" icon="money" />
            </Row>
        </fieldset>
    </Grid>
)