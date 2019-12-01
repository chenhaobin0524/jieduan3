import React, { Component } from 'react';

class Search extends Component {
    // 构造器
    constructor(props) {
        super(props);
        this.state = {
            isFocus: true,
            searchText: ''
        }
    }
    blur() {
        // V-M 一定要通过setState来设置
        this.setState({
            isFocus: !this.state.isFocus
        })
        // 聚焦
        this.refs.input.focus();
    }
    // 设置搜索框内容
    getValue(event) {
        // 获取搜索框的内容
        console.log(event.target.value);
        this.setState({
            searchText: event.target.value
        })
    }
    //清空搜索框
    clear() {
        this.setState({
            searchText: ''
        })
        console.log(this);
        // 聚焦
        this.refs.input.focus();
    }
    render() {
        return (
            <div className={this.state.isFocus ? 'weui-search-bar' : "weui-search-bar weui-search-bar_focusing"}
                id="searchBar">
                <form className="weui-search-bar__form">
                    <div className="weui-search-bar__box">
                        <i className="weui-icon-search"></i>
                        {/* 这里是用内置方法ref，相当于选中input这节点 */}
                        <input ref='input' value={this.state.searchText} onChange={this.getValue.bind(this)} type="search"
                            className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
                        <a href="###" onClick={this.clear.bind(this)} className="weui-icon-clear" id="searchClear"></a>
                    </div>
                    <label onClick={this.blur.bind(this)} className="weui-search-bar__label" id="searchText">
                        <i className="weui-icon-search"></i>
                        <span>搜索</span>
                    </label>
                </form>
                <a href="###" onClick={this.blur.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
            </div>
        )
    }
}
export default Search;