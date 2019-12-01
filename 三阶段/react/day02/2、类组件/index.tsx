(() => {
    // 类组件，本质是一个构造函数，所以首字母必须大写
    class Tool extends React.Component {
        // 构造器
        constructor(props) {
            super(props)
        };
        render() {
            // 获取带过来的参数
            return (<div onClick={this.test}>{this.props.name}</div>)
        };
        // 这些都是方法，挂载构造函数的原型对象下
        test() {
            alert(1)

        }
    }
    // 继承Tool，同时获得他的方法，自己有优先用自己的
    // state 是React.Component内置的属性
    class NewHeader extends Tool {
        constructor(props) {
            super(props)
            this.state = {
                name: '你好',
                age: 18
            }
        }
        // 自己的方法
        test() {
            console.log(2);
        }
    }
    // 带参{name：'abc'}进去，可以通过props获取
    console.log(new NewHeader({
        name: 'abc'
    }));
    // ReactDOM.render(template,el)
    // 参数一：JSX格式的虚拟dom 参数二：渲染节点
    ReactDOM.render(
        <div>
            <Tool name='chen' />
            <NewHeader name='bcd' />
        </div>
        , document.querySelector('#demo'))
})()