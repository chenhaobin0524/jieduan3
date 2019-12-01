// 数据是通过 props 属性自上而下（由父及子）进行传递的，
// 但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），
// 这些属性是应用程序中许多组件都需要的。
// Context 提供了一种在组件之间共享此类值的方式，
// 就能在组件树间进行数据传递的方法。
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
// Context 可以让我们无需明确地传遍每一个组件，就能将值深入传递进组件树
// 为当前的theme创建一个context（'light'为默认值）
var ThemeContext = React.createContext('light');
var APP = /** @class */ (function (_super) {
    __extends(APP, _super);
    function APP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    APP.prototype.render = function () {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        return (React.createElement(ThemeContext.Provider, { value: 'dark' },
            React.createElement(Toolbar, null)));
    };
    return APP;
}(React.Component));
// 中间的组件再也不必指明往下传递 theme 了。
// 函数组件
function Toolbar(props) {
    return (React.createElement("div", null,
        React.createElement(ThemeButton, null)));
}
var ThemeButton = /** @class */ (function (_super) {
    __extends(ThemeButton, _super);
    function ThemeButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeButton.prototype.render = function () {
        return React.createElement(Button, { theme: this.context });
    };
    // 指定 contextType 读取当前的 theme context
    // React 会往上找到最近的 theme Provider，然后使用它的值
    // 在这个例子中，当前的 theme 值为‘dark’
    ThemeButton.contextType = ThemeContext;
    return ThemeButton;
}(React.Component));
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        return (React.createElement("div", null, "\u6309\u94AE"));
    };
    return Button;
}(React.Component));
var el = document.querySelector('#demo');
ReactDOM.render(React.createElement("div", null,
    React.createElement(APP, null)), el);
