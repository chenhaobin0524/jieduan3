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
(function () {
    // 类组件，本质是一个构造函数，所以首字母必须大写
    var Tool = /** @class */ (function (_super) {
        __extends(Tool, _super);
        // 构造器
        function Tool(props) {
            return _super.call(this, props) || this;
        }
        ;
        Tool.prototype.render = function () {
            // 获取带过来的参数
            return (React.createElement("div", { onClick: this.test }, this.props.name));
        };
        ;
        // 这些都是方法，挂载构造函数的原型对象下
        Tool.prototype.test = function () {
            alert(1);
        };
        return Tool;
    }(React.Component));
    // 继承Tool，同时获得他的方法，自己有优先用自己的
    // state 是React.Component内置的属性
    var NewHeader = /** @class */ (function (_super) {
        __extends(NewHeader, _super);
        function NewHeader(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                name: '你好',
                age: 18
            };
            return _this;
        }
        // 自己的方法
        NewHeader.prototype.test = function () {
            console.log(2);
        };
        return NewHeader;
    }(Tool));
    // 带参{name：'abc'}进去，可以通过props获取
    console.log(new NewHeader({
        name: 'abc'
    }));
    // ReactDOM.render(template,el)
    // 参数一：JSX格式的虚拟dom 参数二：渲染节点
    ReactDOM.render(React.createElement("div", null,
        React.createElement(Tool, { name: 'chen' }),
        React.createElement(NewHeader, { name: 'bcd' })), document.querySelector('#demo'));
})();
