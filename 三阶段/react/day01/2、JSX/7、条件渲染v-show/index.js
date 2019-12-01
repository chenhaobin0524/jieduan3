(function () {
    //v-show
    var Vshow = function () {
        var num = 9;
        return React.createElement("div", { style: { display: num > 7 ? 'block' : 'none' } }, "\u663E\u793A\u6216\u8005\u9690\u85CF");
    };
    //view层
    var template = React.createElement("div", null,
        React.createElement(Vshow, null));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
