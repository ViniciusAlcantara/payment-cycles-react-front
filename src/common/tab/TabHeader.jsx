import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from './tabAction'

class TabHeader extends Component {
    render() {
        const { target, icon, label, visible } = this.props
        const selected = this.props.selected === target
        if (visible[target]) {
            return (
                <li className={selected ? 'active' : ''}>
                    <a href="javascript:;"
                        data-toggle='tab'
                        data-target={target}
                        onClick={() => this.props.selectTab(target)}
                    >
                        <i className={`fa fa-${icon}`}></i> {label}
                    </a>
                </li>
            )
        }
        return false
    }
}

const mapStateToProps = state => ({ selected: state.tab.selected, visible: state.tab.visible })
const mapDispatchToProps = dispatch => bindActionCreators( { selectTab }, dispatch )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabHeader)