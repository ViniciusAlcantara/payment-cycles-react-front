import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab, showTabs } from '../common/tab/tabAction'
import { create, update, remove } from './billingCycleAction'

import TabContent from '../common/tab/TabContent'
import TabHeader from '../common/tab/TabHeader'
import Tabs from '../common/tab/Tabs'
import TabsContent from '../common/tab/TabsContent'
import TabsHeader from '../common/tab/TabsHeader'
import ContentBody from '../common/template/ContentBody'
import ContentHeader from '../common/template/ContentHeader'
import BillingCycleForm from './BillingCycleForm'
import BillingCycleList from './BillingCycleList'

class BillingCycle extends Component {
    componentDidMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render() {
        return (
            <div>
                <ContentHeader title="Billing Cycle" small="Register" />
                <ContentBody>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='List' icon='bars' target='tabList' />
                            <TabHeader label='Add' icon='plus' target='tabCreate' />
                            <TabHeader label='Edit' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Delete' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={this.props.create} buttonType="success" buttonLabel="Save" />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={this.props.update} buttonType="info" buttonLabel="Update" />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={this.props.remove} readOnly buttonType="danger" buttonLabel="Delete"  />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </ContentBody>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update, remove }, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(BillingCycle)