import React, { Component } from 'react'

import { connect } from 'react-redux'

class TabContent extends Component {
    render() {
        const selected = this.props.id === this.props.selected
        return (
            <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ selected: state.tab.selected })

export default connect(
    mapStateToProps
)(TabContent)