import React from 'react'

import Footer from '../common/template/Footer'
import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Routes from './routes'
import Messages from '../common/msg/Messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)