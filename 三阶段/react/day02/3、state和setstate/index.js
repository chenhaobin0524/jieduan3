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
    var Tool = /** @class */ (function (_super) {
        __extends(Tool, _super);
        function Tool(props) {
            var _this = _super.call(this, props) || this;
            //M层
            // 相当于vue里面的data，
            // 这里必须命名为state
            _this.state = {
                name: 'yao',
                skill: ['ps', 'js']
            };
            return _this;
            // 跟上面的写法一样，数据层
            // this.state = {
            //     name: 'yao',
            //     skill: ['ps', 'js']
            // }
        }
        Tool.prototype.test = function () {
            console.log(this);
            this.setState({
                name: 'lin',
                skill: ['abc']
            });
        };
        //V视图层
        Tool.prototype.render = function () {
            // bind(this) 修正this指向
            return (React.createElement("div", { onClick: this.test.bind(this) },
                this.state.name,
                " skill\uFF1A",
                this.state.skill[0]));
        };
        return Tool;
    }(React.Component));
    ReactDOM.render(React.createElement("div", null,
        React.createElement(Tool, null)), document.querySelector('#demo'));
})();
