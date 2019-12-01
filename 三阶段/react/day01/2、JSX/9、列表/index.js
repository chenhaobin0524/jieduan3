(function () {
    var teachers = [
        {
            name: 'yao',
            id: 2
        }, {
            name: 'lin',
            id: 1
        }, {
            name: 'lin',
            id: 3
        }
    ];
    var arr = [React.createElement("p", { key: '1' }, "1"), React.createElement("p", { key: '2' }, "2"), 3];
    //View
    var template = React.createElement("div", null,
        arr,
        React.createElement("ul", null, (function () {
            var arr = [];
            for (var i = 0; i < teachers.length; i++) {
                arr.push(React.createElement("li", { key: i },
                    teachers[i].id,
                    ":",
                    teachers[i].name));
            }
            return arr;
        })()),
        React.createElement("ul", null, (function () {
            return teachers.map(function (item, index) {
                return React.createElement("li", { key: index },
                    item.id,
                    ":",
                    item.name);
            });
        })()));
    var el = document.querySelector('#demo');
    ReactDOM.render(template, el);
})();
