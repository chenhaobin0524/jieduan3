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
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    // 构造器
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        // 存数据
        _this.state = {
            news: []
        };
        // 请求数据
        axios.get('https://cnodejs.org/api/v1/topics').then(function (data) {
            console.log(data);
            // 设置数据
            _this.setState({
                news: data.data.data
            });
        });
        return _this;
    }
    Panel.prototype.renderNews = function (news) {
        var arr = news.map(function (item, index) {
            return (React.createElement("a", { key: index, className: "weui-media-box weui-media-box_appmsg" },
                React.createElement("div", { className: "weui-media-box__hd" },
                    React.createElement("img", { className: "weui-media-box__thumb", src: item.author.avatar_url })),
                React.createElement("div", { className: "weui-media-box__bd" },
                    React.createElement("h4", { className: "weui-media-box__title" }, item.title),
                    React.createElement("p", { className: "weui-media-box__desc" }, "\u7531\u5404\u79CD\u7269\u8D28\u7EC4\u6210\u7684\u5DE8\u578B\u7403\u72B6\u5929\u4F53\uFF0C\u53EB\u505A\u661F\u7403\u3002\u661F\u7403\u6709\u4E00\u5B9A\u7684\u5F62\u72B6\uFF0C\u6709\u81EA\u5DF1\u7684\u8FD0\u884C\u8F68\u9053\u3002"))));
        });
        return arr;
    };
    Panel.prototype.render = function () {
        return (React.createElement("div", { className: "weui-panel weui-panel_access" },
            React.createElement("div", { className: "weui-panel__hd" }, "\u56FE\u6587\u7EC4\u5408\u5217\u8868"),
            React.createElement("div", { className: "weui-panel__bd" }, this.renderNews(this.state.news)),
            React.createElement("div", { className: "weui-panel__ft" },
                React.createElement("a", { className: "weui-cell weui-cell_access weui-cell_link" },
                    React.createElement("div", { className: "weui-cell__bd" }, "\u67E5\u770B\u66F4\u591A"),
                    React.createElement("span", { className: "weui-cell__ft" })))));
    };
    return Panel;
}(React.Component));
