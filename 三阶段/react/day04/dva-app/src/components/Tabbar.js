import React, { Component } from 'react';
import iconTabbar from '../assets/icon_tabbar.png';
// 引入路由标签
import { Link } from 'dva/router';
class Tabbar extends Component {
    render() {
        return (
            <div className="weui-tabbar" style={{
                position: 'fixed',
                width: '100%',
                bottom: '0',
                left: '0',

            }}>
                <Link to='/wechat' className="weui-tabbar__item weui-bar__item_on">
                    <span style={{ display: 'inline-block', position: 'relative' }}>
                        <img src={iconTabbar} alt="" className="weui-tabbar__icon" />>
                <span className="weui-badge" style={{ position: 'absolute', top: '-2px', right: '-13px' }}>8</span>
                    </span>
                    <p className="weui-tabbar__label">微信</p>
                </Link>
                <Link to='/contect' className="weui-tabbar__item">
                    <img src={iconTabbar} alt="" className="weui-tabbar__icon" />>
            <p className="weui-tabbar__label">通讯录</p>
                </Link>
                <Link to="discover" className="weui-tabbar__item">
                    <span style={{ display: 'inline-block', position: 'relative' }}>
                        <img src={iconTabbar} alt="" className="weui-tabbar__icon" />>
                <span className="weui-badge weui-badge_dot"
                            style={{ position: 'absolute', top: '0', right: '-6px' }}></span>
                    </span>
                    <p className="weui-tabbar__label">发现</p>
                </Link>
                <Link to="mine" className="weui-tabbar__item">
                    <img src={iconTabbar} alt="" className="weui-tabbar__icon" />>
            <p className="weui-tabbar__label">我</p>

                </Link>
            </div >
        )
    }
}
export default Tabbar;