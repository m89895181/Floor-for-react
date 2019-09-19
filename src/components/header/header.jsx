import React from 'react'
import './header.scss'
import {withRouter} from 'react-router-dom'

function Header(props){
    let {isBack,history,title} = props;
    return <header className="header">
        <span className="back" style={{display:isBack ?'block':'none'}} onClick={() => {
            history.go(-1)
        }}>返回</span>
        {title}
        <span className="more">...</span>
    </header>
}

Header.defaultProps = {
    isBack:false,
    title:'首页'
}

export default withRouter(Header)