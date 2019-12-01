var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocus: true,
            searchText: ''
        };
        return _this;
    }
    // 也可以直接这么写
    // state: {
    //     isFocus: boolean,
    //     searchText: string
    // } = {
    //         isFocus: true,
    //         searchText: ''
    //     }
    Search.prototype.blur = function () {
        // V-M 一定要通过setState来设置
        this.setState({
            isFocus: !this.state.isFocus
        });
        // 聚焦
        this.refs.input.focus();
    };
    // 设置搜索框内容
    Search.prototype.getValue = function (event) {
        // 获取搜索框的内容
        console.log(event.target.value);
        this.setState({
            searchText: event.target.value
        });
    };
    //清空搜索框
    Search.prototype.clear = function () {
        this.setState({
            searchText: ''
        });
        console.log(this);
        // 聚焦
        this.refs.input.focus();
    };
    Search.prototype.render = function () {
        // 结构内容
        var isFocus = this.state.isFocus;
        return (React.createElement("div", { className: isFocus ? 'weui-search-bar' : "weui-search-bar weui-search-bar_focusing", id: "searchBar" },
            React.createElement("form", { className: "weui-search-bar__form" },
                React.createElement("div", { className: "weui-search-bar__box" },
                    React.createElement("i", { className: "weui-icon-search" }),
                    React.createElement("input", { ref: 'input', value: this.state.searchText, onChange: this.getValue.bind(this), type: "search", className: "weui-search-bar__input", id: "searchInput", placeholder: "\u641C\u7D22", required: "" }),
                    React.createElement("a", { onClick: this.clear.bind(this), className: "weui-icon-clear", id: "searchClear" })),
                React.createElement("label", { onClick: this.blur.bind(this), className: "weui-search-bar__label", id: "searchText" },
                    React.createElement("i", { className: "weui-icon-search" }),
                    React.createElement("span", null, "\u641C\u7D22"))),
            React.createElement("a", { onClick: this.blur.bind(this), className: "weui-search-bar__cancel-btn", id: "searchCancel" }, "\u53D6\u6D88")));
    };
    return Search;
}(React.Component));
