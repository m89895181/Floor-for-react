import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'

function Footer(){
    return <footer className="footer">
        <NavLink to="/home">
            <dl>
                <dt className="icon home-icon"></dt>
                <dd>首页</dd>
            </dl>
        </NavLink>
        <NavLink to="/classify">
            <dl>
                <dt className="icon classify-icon"></dt>
                <dd>分类</dd>
            </dl>
        </NavLink>
        <NavLink to="/car">
            <dl>
                <dt className="icon car-icon"></dt>
                <dd>购物车</dd>
            </dl>
        </NavLink>
        <NavLink to="/my">
            <dl>
                <dt className="icon my-icon"></dt>
                <dd>我的</dd>
            </dl>
        </NavLink>
    </footer>
}

export default Footer