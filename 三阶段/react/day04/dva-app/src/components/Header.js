// import React from 'react'

// 函数组件写法
// function Header() {
//     return (<header>今日头条</header>)
// }
// export default Header;

// 类组件写法
// class Header extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {}
//     };
//     render() {
//         return (<header>今日头条</header>)
//     }
// }
// 也可以写成下面这种
import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (<header>今日头条</header>)
    }
}
// 抛出组件Header
export default Header;