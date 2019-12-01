class Header extends React.Component {
    state = {
        inputValue: ''
    };
    getInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    };
    //在渲染前调用,在客户端也在服务端,在render之前调用
    componentWillMount() {
        window.a = 1;
        window.atimer = window.setInterval(() => {
            console.log('定时器');

        }, 1000)
        window.onscroll = () => {
            console.log('滚动了');
        }
        console.log('--------componentWillMount1---------')
    }
    render() {
        return (
            <div>
                <p>{this.state.inputValue}</p>
                <input value={this.state.inputValue} onChange={this.getInputValue.bind(this)} type="text" />
            </div>
        )
    }
    // 组件销毁的时候触发，在render之后调用
    componentWillUnmount() {
        // 带走定时器和全局变量
        window.onscroll = null;
        delete window.a;
        clearInterval(window.atimer);

        console.log('--------componentWillUnmount2---------')
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        bool: true
    }
    clear() {
        this.setState({
            bool: !this.state.bool
        })
    }
    render() {
        return (
            <div>
                <button onClick={
                    this.clear.bind(this)
                }>点击清除</button>
                {this.state.bool ? this.props.component : ''}
            </div>
        )
    }
}

const template = <div style={{
    height: '2000px'
}}>
    <App component={<Header />} />
</div>

const el = document.querySelector('#demo')
ReactDOM.render(template, el)