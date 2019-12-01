class Header extends React.Component {
    state = {
        inputValue: ''
    }
    getInputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.inputValue}</p>
                <input type="text" value={this.state.inputValue} onChange={this.getInputValue.bind(this)} />
            </div>
        )
    }
    // react独有的生命周期，用于性能的优化
    // 介于虚拟dom和真实dom之间，关闭后没法更新
    shouldComponentUpdate() {
        if (this.state.inputValue.length > 10) {
            //停止更新
            return false;
        } else {
            // 开启更新
            return true
        }
    }
}
const template = <div>
    <Header />
</div>
const el = document.querySelector('#demo');
ReactDOM.render(template, el)