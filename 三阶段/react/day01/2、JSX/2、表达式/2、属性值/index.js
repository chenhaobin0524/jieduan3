(function () {
    var data = {
        name: 'chen',
        num: 23,
        style: {
            fontSize: '30px',
            color: 'red'
        }
    };
    // JSX语法
    var template = React.createElement("div", null,
        React.createElement("p", null, "\u5C5E\u6027\u503C"),
        React.createElement("p", { age: '18', kkk: data.num, name: 0 ? data.name : '假的' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "\u5C5E\u6027\u503C class"),
        React.createElement("p", { className: 0 ? 'active' : 'noactive' }, 0 ? data.name : '假的'),
        React.createElement("p", null, "\u5C5E\u6027\u503C style"),
        React.createElement("p", { style: {
                fontSize: data.num + "px",
                color: 'red'
            } }, 0 ? data.name : '假的'),
        React.createElement("p", { style: data.style }, 0 ? data.name : '假的'));
    // 渲染到节点demo上
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
