(function () {
    //组件的本质是一个构造函数
    //组件是一个独立作用域
    //只有函数才有私有作用域
    var Abc = function () {
        var data = {
            title: 'hello'
        };
        var methods = {
            test: function () {
                console.log(1);
                return 2;
            }
        };
        return React.createElement("div", { onClick: methods.test }, methods.test());
    };
    var template = React.createElement("div", null,
        Abc(),
        Abc(),
        React.createElement(Abc, null),
        React.createElement(Abc, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
