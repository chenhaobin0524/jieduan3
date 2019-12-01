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
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            inputValue: ''
        };
        return _this;
    }
    Header.prototype.getInputValue = function (e) {
        this.setState({
            inputValue: e.target.value
        });
    };
    ;
    //在渲染前调用,在客户端也在服务端,在render之前调用
    Header.prototype.componentWillMount = function () {
        window.a = 1;
        window.atimer = window.setInterval(function () {
            console.log('定时器');
        }, 1000);
        window.onscroll = function () {
            console.log('滚动了');
        };
        console.log('--------componentWillMount1---------');
    };
    Header.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, this.state.inputValue),
            React.createElement("input", { value: this.state.inputValue, onChange: this.getInputValue.bind(this), type: "text" })));
    };
    // 组件销毁的时候触发，在render之后调用
    Header.prototype.componentWillUnmount = function () {
        // 带走定时器和全局变量
        window.onscroll = null;
        delete window.a;
        clearInterval(window.atimer);
        console.log('--------componentWillUnmount2---------');
    };
    return Header;
}(React.Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            bool: true
        };
        return _this;
    }
    App.prototype.clear = function () {
        this.setState({
            bool: !this.state.bool
        });
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.clear.bind(this) }, "\u70B9\u51FB\u6E05\u9664"),
            this.state.bool ? this.props.component : ''));
    };
    return App;
}(React.Component));
var template = React.createElement("div", { style: {
        height: '2000px'
    } },
    React.createElement(App, { component: React.createElement(Header, null) }));
var el = document.querySelector('#demo');
ReactDOM.render(template, el);
