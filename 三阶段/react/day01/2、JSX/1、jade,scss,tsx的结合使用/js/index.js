(function () {
    var data = {
        name: 'yao',
        age: 18
    };
    var template = React.createElement("div", null,
        React.createElement("p", null,
            "\u59D3\u540D\uFF1A",
            data.name),
        React.createElement("p", null,
            "\u5E74\u9F84",
            data.age));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
